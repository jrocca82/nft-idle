import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import {
  CatsAndSoup,
  CatsAndSoup__factory,
  Currency,
  Currency__factory,
  Land,
  Land__factory,
  Marketplace__factory,
  Marketplace,
  Pot,
  Pot__factory
} from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { getEventData } from "./helpers/utils";
import { BigNumberish } from "ethers";

chai.use(solidity);
chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  const tokenFactory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );

  const catsAndSoup = (await tokenFactory.deploy()) as unknown as CatsAndSoup;

  const landFactory: Land__factory = await ethers.getContractFactory("Land");

  //Max supply set to 10
  const land = (await landFactory.deploy("Land", "LND", 10)) as unknown as Land;

  const currencyFactory: Currency__factory = await ethers.getContractFactory(
    "Currency"
  );

  const currency = (await currencyFactory.deploy(
    "Currency",
    "CNY"
  )) as unknown as Currency;

  const potFactory: Pot__factory = await ethers.getContractFactory("Pot");

  const pot = (await potFactory.deploy("SoupPot", "SPT")) as unknown as Pot;

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

describe("Marketplace", () => {
  let land: Land;
  let currency: Currency;
  let catsAndSoup: CatsAndSoup;
  let marketplace: Marketplace;
  let pot: Pot;
  let deployer: SignerWithAddress, alice: SignerWithAddress;
  let landprice: BigNumberish;
  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment();
    pot = env.pot;
    catsAndSoup = env.catsAndSoup;
    land = env.land;
    currency = env.currency;
    marketplace = env.marketplace;

    //Send alice currency
    const startAmount = ethers.utils.parseEther("100000");
    await currency.mintCurrency(alice.address, startAmount);

    landprice = ethers.utils.parseEther("1");

    //Connect land to marketplace and initial mint
    land.connect(deployer.address);
    await land.setMarketplace(marketplace.address);
    await land.initialBatchMint();
  });
  
  it("Should set contract auths", async () => {
    marketplace.connect(deployer.address);
    await marketplace.setContractAuths();
    expect(await marketplace.getAuth(pot.address)).to.be.equal(true);
    expect(await marketplace.getAuth(land.address)).to.be.equal(true);
    expect(await marketplace.getAuth(currency.address)).to.be.equal(true);
    expect(await marketplace.getAuth(catsAndSoup.address)).to.be.equal(true);
    expect(await land.getAuth(marketplace.address)).to.be.equal(true);
  });
  
  it("Should allow user to buy a starter pack", async () => {
    const auth = await land.getAuth(land.address);
    const tx = await marketplace.buyStarterPack(1, { value: landprice});
    console.log(tx.from);
    //Actual: 0
    expect(await land.balanceOf(alice.address)).to.be.equal(1);
  });

  //Not finished
});
