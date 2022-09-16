import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { CatsAndSoup, CatsAndSoup__factory } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  const factory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );
  const catsAndSoup = (await factory.deploy()) as unknown as CatsAndSoup;

  return { catsAndSoup };
};

describe("CatsAndSoup", () => {
  let catsAndSoup: CatsAndSoup;
  let deployer: SignerWithAddress, alice: SignerWithAddress;
  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment();
    catsAndSoup = env.catsAndSoup;
  });

  it("Should not set marketplace address to 0", async () => {
    await expect(
      catsAndSoup.connect(deployer).setMarketplace(ethers.constants.AddressZero)
    ).to.be.revertedWith("Cannot set marketplace to 0 address");
  });

  it("Should not allow unauthorized mint", async () => {
    await expect(
      catsAndSoup.connect(alice).mintItem(1, alice.address)
    ).to.be.revertedWith("Cats and Soup: Unauthorized");
  });

  it("Should not mint invalid item ID", async () => {
    await expect(
      catsAndSoup.connect(deployer).mintItem(2, alice.address)
    ).to.be.revertedWith("Invalid item ID");
  });
  
  it("Should allow authorized account to mint and item", async () => {
    //Deployer should be authorised
    catsAndSoup.connect(deployer);

    //Check Alice's balance of item
    const initBalance = await catsAndSoup.balanceOf(alice.address, 0);

    expect(initBalance).to.equal(0);

    //Mint an item to Alice
    await catsAndSoup.mintItem(0, alice.address);

    //Check new balance
    const newBalance = await catsAndSoup.balanceOf(alice.address, 0);
    expect(newBalance).to.equal(1);
  });
});
