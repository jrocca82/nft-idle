import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { Pot, Pot__factory, Land, Land__factory, CatsAndSoup__factory, CatsAndSoup } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  const catsFactory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );

  const catsAndSoup = (await catsFactory.deploy()) as unknown as CatsAndSoup;

  const landFactory: Land__factory = await ethers.getContractFactory(
    "Land"
  );

  //Max supply set to 10
  const land = (await landFactory.deploy(
    "Land",
    "LND",
    10,
    catsAndSoup.address
  )) as unknown as Land;

  const factory: Pot__factory = await ethers.getContractFactory("Pot");

  const pot = (await factory.deploy(
    "SoupPot",
    "SPT",
    land.address
  )) as unknown as Pot;

  return { pot };
};

describe("Pot", () => {
  let pot: Pot;
  let deployer: SignerWithAddress, alice: SignerWithAddress;
  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment();
    pot = env.pot;
  });
  
  it("Should not set marketplace address to 0", async () => {
    await expect(
      pot.connect(deployer).setMarketplace(ethers.constants.AddressZero)
    ).to.be.revertedWith("Cannot set marketplace to 0 address");
  });

  it("Should not allow unauthorized mint", async () => {
    await expect(
      pot.connect(alice).mintPot(1, alice.address)
    ).to.be.revertedWith("Pot Contract: Unauthorized");
  });

  it("Should return decimals at 0", async () => {
    expect(await pot.decimals()).to.be.equal(0);
  });

  it("Should not mint to a 0 address", async() => {
    pot.connect(deployer);
    await expect(pot.mintPot(0, ethers.constants.AddressZero)).to.be.revertedWith("Cannot mint pot to zero address");
  });
});
