import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { fakeAddress, getEventData } from "./utils";
import {
  CatsAndSoup,
  CatsAndSoup__factory,
} from "../build/typechain";

let catsAndSoup: CatsAndSoup;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;

describe("CatsAndSoup Contract", () => {
  before(async () => {
    deployer = (await ethers.getSigners())[0];
    catsAndSoup = await new CatsAndSoup__factory(deployer).deploy();
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

  it("Should only allow owner can set the marketplace", async () => {
    catsAndSoup.connect(user);
    expect(catsAndSoup.setMarketplace(user.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("Should not allow marketplace to be set to 0", async () => {
    catsAndSoup.connect(deployer);
    await expect(
      catsAndSoup.setMarketplace(tsEthers.constants.AddressZero)
    ).to.be.revertedWith("Cannot assign marketplace to zero address");
  });

  it("Should set the marketplace address", async () => {
    catsAndSoup.connect(deployer);
    await catsAndSoup.setMarketplace(fakeAddress);
    const newAddress = await catsAndSoup._marketplace();
    expect(newAddress).to.equal(fakeAddress);
  });

  it("Should emit a setMarketplace event", async () => {
    const receipt = await (
      await catsAndSoup.setMarketplace(fakeAddress)
    ).wait(1);
    const event = getEventData("MarketplaceSet", catsAndSoup, receipt);
    expect(event.marketplace).to.equal(fakeAddress);
  });
  
  //Test minting function from Marketplace
});
