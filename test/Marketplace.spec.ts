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

describe("Marketplace Contract", () => {
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
  
  xit("Should allow new user to buy starter pack", async() => {
    marketplace.connect(user);
    await marketplace.starterPack();
    const potBalance = await pot.balanceOf(user.address);
    const landBalance = await  land.balanceOf(user.address)
    expect(potBalance).to.equal(1);
    expect(landBalance).to.equal(1);
  });

  xit("Should emit a purchase starter pack event", async () => {
    const deployerAddress = await deployer.getAddress();
    const receipt = await (await marketplace.starterPack()).wait(1);
    const event = getEventData("StarterPackPurchase", pot, receipt);
    expect(event.owner).to.equal(deployerAddress);
  });

  it("Should allow user to buy land", async() => {

  });

  it("Should not allow user to own more than 10 land", async() => {

  });

  it("Should allow user to buy pot", async() => {

  });

  it("Should not allow user to buy more pots and land owned", async() => {

  });

  it("Should allow user to buy items", async() => {

  });
  
  it("Should emit purchase event", async() => {

  });
});