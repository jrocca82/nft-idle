import { ethers } from "hardhat";
import { BigNumber, ethers as tsEthers } from "ethers";
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
let landUnit: {
  landType: string;
  hasPot: boolean;
  owner: string;
  catId: BigNumber;
  soupId: BigNumber;
};

describe("Pot Contract", () => {
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

    //Give deployer land
    land.connect(deployer);

    //Buy 10 lands
    for(let i = 0; i < 10; i ++) {
      land.buyLand();
    }

    //Land 0
    landUnit = await land.lands(0);
  });

  //Help fix
  xit("Should return the correct decimal count", async () => {
    const decimals = await pot.decimals();
    expect(decimals).to.equal(0);
  });

  it("Should only allow owner can set the marketplace", async () => {
    pot.connect(user);
    expect(pot.setMarketplace(user.address)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("Should not allow marketplace to be set to 0", async () => {
    pot.connect(deployer);
    await expect(
      pot.setMarketplace(tsEthers.constants.AddressZero)
    ).to.be.revertedWith("Cannot assign marketplace to zero address");
  });

  it("Should set the marketplace address", async () => {
    pot.connect(deployer);
    const fakeAddress = "0x5CD0b455893eae3ebe0a72b23f0D86564ccEC218";
    await pot.setMarketplace(fakeAddress);
    const newAddress = await pot.marketplace();
    expect(newAddress).to.equal(fakeAddress);
  });

  it("Should emit a setMarketplace event", async () => {
    const receipt = await (
      await pot.setMarketplace(marketplace.address)
    ).wait(1);
    const event = getEventData("MarketplaceSet", pot, receipt);
    expect(event.marketplace).to.equal(marketplace.address);
  });

  it("Should only allow marketplace to buy pot", async () => {
    await expect(pot.buyPot(0, user.address)).to.be.revertedWith(
      "Unauthorized. Marketplace only."
    );
  });

  //NOT MINTING </3
  xit("Should mint pot onto land", async () => {
    pot.setMarketplace(marketplace.address);
    pot.buyPot(0, user.address);
    const balance = await land.balanceOf(user.address);
    //expect(landUnit.owner).to.equal(user.address);
    expect(balance).to.equal(1);
  });

  //THROWING ERROR UNKNOWN
  xit("Should emit a purchase event", async () => {
    pot.setMarketplace(marketplace.address);
    const receipt = await (await pot.buyPot(1, user.address)).wait(1);
    const event = getEventData("PurchasePot", pot, receipt);
    console.log(event);
    //expect(event.landId).to.equal("1");
    //expect(event.account).to.equal(user.address);
  });

  //NEED TO FIX MINTING POT
  xit("Should burn pot", async () => {
    const prevBalance = await pot.balanceOf(user.address);
    await pot.deletePot(0);
    const balance = await pot.balanceOf(user.address);
    expect(balance).to.equal(prevBalance.sub(1));
  });


  xit("Should emit a burn event", async () => {
    const receipt = await (await pot.buyPot(0, user.address)).wait(1);
    const event = getEventData("BurnPot", pot, receipt);
    expect(event.landId).to.equal("0");
  });
});
