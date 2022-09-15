import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { Pot, Pot__factory } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  const factory: Pot__factory = await ethers.getContractFactory("Pot");

  const pot = (await factory.deploy(
    "SoupPot",
    "SPT"
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

  it("Should return decimals at 0", async () => {
    expect(await pot.decimals()).to.be.equal(0);
  });

  it("Should not mint to a 0 address", async() => {
    pot.connect(deployer);
    await expect(pot.mintPot(0, ethers.constants.AddressZero)).to.be.revertedWith("Cannot mint pot to zero address");
  });

//Not finished
});
