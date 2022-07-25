import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { getEventData } from "./utils";
import {
  Pot,
  Pot__factory,
  Land,
  Land__factory,
  Marketplace,
  Marketplace__factory,
  CatsAndSoup,
  CatsAndSoup__factory,
  Currency,
  Currency__factory
} from "../build/typechain";

let pot: Pot;
let land: Land;
let catsAndSoup: CatsAndSoup;
let currency: Currency;
let marketplace: Marketplace;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;

describe("Land Contract", () => {
  before(async () => {
    deployer = (await ethers.getSigners())[0];
    currency = await new Currency__factory(deployer).deploy(
      "Currency",
      "CRY",
      18
    );
    pot = await new Pot__factory(deployer).deploy("Pot", "POT");
    catsAndSoup = await new CatsAndSoup__factory(deployer).deploy();
    land = await new Land__factory(deployer).deploy(
      "Land",
      "LND",
      catsAndSoup.address
    );
    marketplace = await new Marketplace__factory(deployer).deploy(
      land.address,
      pot.address,
      catsAndSoup.address,
      currency.address
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

  it("Should only allow owner can set the marketplace", async () => {
    land.connect(user);
    expect(land.setMarketplace(user.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("Should not allow marketplace to be set to 0", async () => {
    land.connect(deployer);
    await expect(
      land.setMarketplace(tsEthers.constants.AddressZero)
    ).to.be.revertedWith("Cannot assign marketplace to zero address");
  });

  it("Should set the marketplace address", async () => {
    land.connect(deployer);
    const fakeAddress = "0x5CD0b455893eae3ebe0a72b23f0D86564ccEC218";
    await land.setMarketplace(fakeAddress);
    const newAddress = await land.marketplace();
    expect(newAddress).to.equal(fakeAddress);
  });

  it("Should emit a setMarketplace event", async () => {
    const receipt = await (
      await land.setMarketplace(marketplace.address)
    ).wait(1);
    const event = getEventData("MarketplaceSet", land, receipt);
    expect(event.marketplace).to.equal(marketplace.address);
  });

  //Mint land to caller
  //Emit land purchased event
  //Only land owner can assign pot
  //Assigns pot to land
  //Emits item assigned event for pot
  //Only land owner can remove pot
  //Removes pot from land
  //Only land owner can assign cat
  //Only cat owner can assign cat
  //Assigns cat to land
  //Emits item assigned event for cat
  //Only land owner can assign soup
  //Only soup owner can assign soup
  //Assigns soup to land
  //Emits item assigned event for soup

});