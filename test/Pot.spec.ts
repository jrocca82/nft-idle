import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import {
  CatsAndSoup,
  CatsAndSoup__factory,
  Land,
  Land__factory,
  Pot,
  Pot__factory
} from "../build/typechain";

let pot: Pot;
let land: Land;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;
let catsAndSoup: CatsAndSoup;

describe("Pot Contract", () => {
  before(async () => {
    deployer = (await ethers.getSigners())[0];
    catsAndSoup = await new CatsAndSoup__factory(deployer).deploy();
    land = await new Land__factory(deployer).deploy(
      "Land",
      "LND",
      10,
      catsAndSoup.address
    );
    pot = await new Pot__factory(deployer).deploy(
      "Pot",
      "SPT",
      land.address
    );
    user = new ethers.Wallet(
      "0xbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeefbeef",
      deployer.provider
    );
    // Send ETH to user from signer.
    await deployer.sendTransaction({
      to: user.address,
      value: ethers.utils.parseEther("1000")
    });
  });

  //Test mint function in Marketplace

  it("Should return the correct decimals", async () => {
    const decimals = await pot.decimals();
    expect(decimals).to.equal(0);
  });
});
