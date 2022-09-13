import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { fakeAddress, getEventData } from "./helpers/utils";
import {
  CatsAndSoup,
  CatsAndSoup__factory,
  Currency,
  Currency__factory,
  Land,
  Land__factory,
  Marketplace,
  Marketplace__factory,
  Pot,
  Pot__factory
} from "../build/typechain";

let land: Land;
let catsAndSoup: CatsAndSoup;
let pot: Pot;
let currency: Currency;
let marketplace: Marketplace;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;

describe("Marketplace buyStarter", () => {
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
      "Soup Pot",
      "SPT",
      land.address
    );
    currency = await new Currency__factory(deployer).deploy(
      "Currency",
      "CNY"
    );
    marketplace = await new Marketplace__factory(deployer).deploy(
      pot.address,
      land.address,
      currency.address,
      catsAndSoup.address
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

    //Set up land contract with marketplace and mint all lands (10 total)
    land.connect(deployer);
    await land.setMarketplace(marketplace.address);
    await land.initialBatchMint();

    //Set up marketplace with all other contracts (except currency-- doesn't need)
    await pot.setMarketplace(marketplace.address);
    await catsAndSoup.setMarketplace(marketplace.address);
  });

  it("Should check user sent enough ETH", async () => {
    await expect(marketplace.buyStarterPack(0)).to.be.revertedWith("Not enough ETH");
  })

  it("Should not let user buy land that has not been minted", async () => {
    marketplace.connect(user);
    //Buy starter with landId 11 (only exists through 10)
    await expect(marketplace.buyStarterPack(11, {value: ethers.utils.parseEther("1")})).to.be.revertedWith("This land does not exist");

  });

  it("Should emit a purchase event", async () => {
    //Something is up here-- connection not working (need payable address?)
    marketplace.connect(user);
    //Buy starter with landId 0
    const receipt = await (await marketplace.buyStarterPack(0, {value: ethers.utils.parseEther("1")})).wait(1);
    const event = getEventData("Purchase", marketplace, receipt);
    expect(event.purchaseType).to.equal("Starter Pack");
    expect(event.purchaser).to.equal(user.address);
    expect(event.id).to.equal(0);
  });
  
  //This test checks land.buyLand, pot.mintPot, and catsAndSoup.mintItem works
  //BUT Does not check their require statements
  xit("Should allow user to buy a starter pack", async () => {
    marketplace.connect(user);
    //Buy starter with landId 0
    const starter = await marketplace.buyStarterPack(0, {value: ethers.utils.parseEther("1")});
    console.log(starter.data);
    //Get user balances
    const userLandBalance = await land.balanceOf(user.address);
    console.log(userLandBalance, "Land balance");
    // const potBalance = await pot.balanceOf(user.address);
    // const catBalance = await catsAndSoup.balanceOf(user.address, 0);
    // const soupBalance = await catsAndSoup.balanceOf(user.address, 1);
  
    expect(userLandBalance).to.equal(1);
    // expect(potBalance).to.equal(1);
    // expect(catBalance).to.equal(1);
    // expect(soupBalance).to.equal(1);
  });

  //Should not allow user to buy land that is already bought
  //Should assign pot to land
  //Should not allow user to buy starter pack if they have land
});
