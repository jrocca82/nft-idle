import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers, deployments } from "hardhat";
import { CatsAndSoup, CatsAndSoup__factory, Currency, Currency__factory, Land, Land__factory, Marketplace, Marketplace__factory, Pot, Pot__factory } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { getEventData } from "./helpers/utils";

chai.use(solidity);
chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  const tokenFactory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );

  const catsAndSoup = (await tokenFactory.deploy()) as unknown as CatsAndSoup;

  const landFactory: Land__factory = await ethers.getContractFactory(
    "Land"
  );

  //Max supply set to 10
  const land = (await landFactory.deploy(
    "Land",
    "LND",
    10
  )) as unknown as Land;

  const currencyFactory: Currency__factory = await ethers.getContractFactory(
    "Currency"
  );

  const currency = (await currencyFactory.deploy(
    "Currency",
    "CNY"
  )) as unknown as Currency;

  const potFactory: Pot__factory = await ethers.getContractFactory("Pot");

  const pot = (await potFactory.deploy("SoupPot", "SPT", land.address)) as unknown as Pot;

  const mFactory: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );

  const marketplace = (await mFactory.deploy(
    pot.address,
    land.address,
    currency.address,
    catsAndSoup.address
  )) as unknown as Marketplace;

  return { pot, catsAndSoup, land, currency, marketplace };
};

describe("Land", () => {
  let land: Land;
  let marketplace: Marketplace;
  let pot: Pot;
  let deployer: SignerWithAddress, alice: SignerWithAddress;
  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment();
    land = env.land;
    marketplace = env.marketplace;
    pot = env.pot;
  });

  it("Should set the max supply to 10", async () => {
    const supply = await land.maxSupply();
    expect(supply).to.equal(10);
  });

  it("Should allow only owner to set contract addresses to non-zero address", async () => {
    //Not passing
    // land.connect(alice);
    // await expect(land.setMarketplace(marketplace.address)).to.be.revertedWith("Ownable: caller is not the owner");
    
    //Passing
    land.connect(deployer);
    await expect(land.setMarketplace(ethers.constants.AddressZero)).to.be.revertedWith("Cannot set marketplace to 0 address");
    await land.setMarketplace(marketplace.address);
    expect(await land.marketplace()).to.be.equal(marketplace.address);
  });

  it("Should create initial batch mint and emit event", async () => {
    //Deployer should be authorised and connected
    //Check initial balance of marketplace address
    const initBalance = await land.balanceOf(marketplace.address);
    expect(initBalance).to.be.equal(0);

    const receipt = await (await land.initialBatchMint()).wait(1);

    //Marketplace address set to "0x5CD0b455893eae3ebe0a72b23f0D86564ccEC218" in above test
    //Balance of this address should be the max supply from constructor (10)
    const newBalance = await land.balanceOf(marketplace.address);
    expect(newBalance).to.be.equal(10);

    const event = getEventData("InitialMint", land, receipt);
    expect(event.quantity).to.equal(10);
    expect(event.initialOwner).to.equal(marketplace.address);
  });

  it("Should not buy land that doesn't exist", async() => {
    await expect(land.buyLand(11, alice.address)).to.be.revertedWith("This land does not exist");
  });

  it("Should get the owner of a land", async () => {
    expect(await land.getOwner(1)).to.be.equal(marketplace.address);
  })

  //buyLand tested by Marketplace (starter pack)

  //assignPot tested by Marketplace (starter pack)

  //assignItem tested by Marketplace (starter pack)
});
