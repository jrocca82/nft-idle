import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { parseEther } from "ethers/lib/utils";
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
import { BigNumberish } from "ethers";

chai.use(solidity);
chai.use(chaiAsPromised);
const startAmount = ethers.utils.parseEther("10000");
const startPackPrice = ethers.utils.parseEther("1.5");
const landPrice = ethers.utils.parseEther("1");
const potPrice = ethers.utils.parseEther("0.1");
const catsAndSoupPrice = ethers.utils.parseEther("0.5");

const setupEnvironment = async (
  deployer: SignerWithAddress,
  alice: SignerWithAddress
) => {
  const tokenFactory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );

  const catsAndSoup = (await tokenFactory.deploy()) as unknown as CatsAndSoup;

  const landFactory: Land__factory = await ethers.getContractFactory("Land");

  //Max supply set to 10
  const land = (await landFactory.deploy(
    "Land",
    "LND",
    10,
    catsAndSoup.address
  )) as unknown as Land;

  const currencyFactory: Currency__factory = await ethers.getContractFactory(
    "Currency"
  );

  const currency = (await currencyFactory.deploy(
    "Currency",
    "CNY"
  )) as unknown as Currency;

  const potFactory: Pot__factory = await ethers.getContractFactory("Pot");

  const pot = (await potFactory.deploy(
    "SoupPot",
    "SPT",
    land.address
  )) as unknown as Pot;

  const mFactory: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );

  const marketplace = (await mFactory.deploy(
    pot.address,
    land.address,
    currency.address,
    catsAndSoup.address
  )) as unknown as Marketplace;
  await currency.connect(alice).approve(marketplace.address, startAmount);
  await currency.connect(alice).mintCurrency(alice.address, startAmount);

  return { pot, catsAndSoup, land, currency, marketplace };
};

describe("Marketplace", () => {
  let land: Land;
  let currency: Currency;
  let catsAndSoup: CatsAndSoup;
  let marketplace: Marketplace;
  let pot: Pot;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment(deployer, alice);
    pot = env.pot;
    catsAndSoup = env.catsAndSoup;
    land = env.land;
    currency = env.currency;
    marketplace = env.marketplace;

    //Set marketplaces and batch mint initial lands
    await land.setMarketplace(marketplace.address);
    await pot.setMarketplace(marketplace.address);
    await catsAndSoup.setMarketplace(marketplace.address);
    await land.setPotContract(pot.address);
    await land.initialBatchMint();
  });

  //Marketplace
});
