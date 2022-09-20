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
  Pot__factory,
  Vault__factory,
  Vault
} from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { getEventData } from "./helpers/utils";

chai.use(solidity);
chai.use(chaiAsPromised);
const startAmount = ethers.utils.parseEther("10000");
const landPrice = ethers.utils.parseEther("1");
const potPrice = ethers.utils.parseEther("0.1");
const catsAndSoupPrice = ethers.utils.parseEther("0.5");

const setupEnvironment = async (alice: SignerWithAddress) => {
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

  const potFactory: Pot__factory = await ethers.getContractFactory("Pot");

  const pot = (await potFactory.deploy(
    "SoupPot",
    "SPT",
    land.address
  )) as unknown as Pot;

  const vaultFactory: Vault__factory = await ethers.getContractFactory("Vault");

  const vault = (await vaultFactory.deploy(land.address)) as unknown as Vault;
  
  const currencyFactory: Currency__factory = await ethers.getContractFactory(
    "Currency"
  );

  const currency = (await currencyFactory.deploy(
    "Currency",
    "CNY",
    vault.address
  )) as unknown as Currency;

  const mFactory: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );

  const marketplace = (await mFactory.deploy(
    pot.address,
    land.address,
    currency.address,
    catsAndSoup.address,
    vault.address
  )) as unknown as Marketplace;
  await currency.connect(alice).approve(marketplace.address, startAmount);

  //Deployer mints currency to alice for testing purposes
  await currency.mintCurrency(alice.address, startAmount);
  await marketplace.setContractAuths();

  return { pot, catsAndSoup, land, currency, marketplace, vault };
};

describe("Land", () => {
  let land: Land;
  let currency: Currency;
  let catsAndSoup: CatsAndSoup;
  let marketplace: Marketplace;
  let pot: Pot;
  let vault: Vault;
  let deployer: SignerWithAddress, alice: SignerWithAddress;

  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment(alice);
    pot = env.pot;
    catsAndSoup = env.catsAndSoup;
    land = env.land;
    currency = env.currency;
    vault = env.vault;
    marketplace = env.marketplace;

    //Set marketplaces and batch mint initial lands
    await pot.setMarketplace(marketplace.address);
    await catsAndSoup.setMarketplace(marketplace.address);
  });

  it("Should not allow unauthorized user to batch mint", async () => {
    await expect(land.connect(alice).initialBatchMint()).to.be.revertedWith(
      "Land Contract: Unauthorized"
    );
  });

  it("Should not allow unauthorized user to buy land", async () => {
    await expect(
      land.connect(alice).buyLand(1, alice.address)
    ).to.be.revertedWith("Land Contract: Unauthorized");
  });

  it("Should set the max supply to 10", async () => {
    const supply = await land.maxSupply();
    expect(supply).to.equal(10);
  });

  it("Should allow only owner to set contract addresses to non-zero address", async () => {
    await expect(
      land.setMarketplace(ethers.constants.AddressZero)
    ).to.be.revertedWith("Cannot set marketplace to 0 address");
    await land.setMarketplace(marketplace.address);
    expect(await land.marketplace()).to.be.equal(marketplace.address);
  });

  it("Should create initial batch mint and emit event", async () => {
    //Deployer should be authorised and connected
    //Check initial balance of marketplace address
    const initBalance = await land.balanceOf(marketplace.address);
    expect(initBalance).to.be.equal(0);

    const receipt = await (await land.initialBatchMint()).wait(1);

    //Balance of this address should be the max supply from constructor (10)
    const newBalance = await land.balanceOf(marketplace.address);
    expect(newBalance).to.be.equal(10);

    const event = getEventData("InitialMint", land, receipt);
    expect(event.quantity).to.equal(10);
    expect(event.initialOwner).to.equal(marketplace.address);
  });

  it("Should get the owner of a land", async () => {
    expect(await land.getOwner(1)).to.be.equal(marketplace.address);
  });

  it("Should set pot address", async () => {
    await land.setPotContract(pot.address);
    expect(await land.pot()).to.be.equal(pot.address);
  });

  it("Should set vault address", async () => {
    await land.setVaultContract(vault.address);
    expect(await land.pot()).to.be.equal(pot.address);
  });

  it("Should not buy land that doesn't exist", async () => {
    await expect(land.buyLand(11, alice.address)).to.be.revertedWith(
      "This land does not exist"
    );
  });

  it("Should not allow user to buy a land that has been bought", async () => {
    await marketplace.connect(alice).buyLand(0, { value: landPrice });
    await expect(
      land.connect(alice).buyLand(0, alice.address)
    ).to.be.revertedWith("This land has already been bought");
  });

  it("Should not allow user to assign a pot to a land they do not own", async () => {
    await expect(
      land.connect(alice).assignPot(1, alice.address)
    ).to.be.revertedWith("User does not own this land");
  });

  it("Should not allow user to assign a pot if they have no pots", async () => {
    await expect(
      land.connect(alice).assignPot(0, alice.address)
    ).to.be.revertedWith("User has no pots to assign");
  });

  it("Should not allow user to assign a pot to a land that already has one", async () => {
    await marketplace.connect(alice).buyPot(0, { value: potPrice });
    await expect(
      land.connect(alice).assignPot(0, alice.address)
    ).to.be.revertedWith("This land already has a pot");
  });

  it("Should not allow user to assign an item to a land they do not own", async () => {
    await expect(land.connect(alice).assignItem(1, 0)).to.be.revertedWith(
      "You do not own this land"
    );
  });

  it("Should not allow user to assign an item if they have no items", async () => {
    await expect(land.connect(alice).assignItem(0, 0)).to.be.revertedWith(
      "You do not have any of this item type"
    );
    await expect(land.connect(alice).assignItem(0, 1)).to.be.revertedWith(
      "You do not have any of this item type"
    );
  });

  it("Should require user to place a pot on the land before assigning an item", async () => {
    await marketplace.connect(alice).buyLand(1, { value: landPrice });
    await marketplace.connect(alice).buyItem(0, { value: catsAndSoupPrice });
    await expect(land.connect(alice).assignItem(1, 0)).to.be.revertedWith(
      "Please place a pot first"
    );
  });

  it("Should allow user to assign items", async () => {
    //Try invalid ID
    await expect(land.connect(alice).assignItem(0, 2)).to.be.revertedWith(
      "This item does not exist"
    );

    //Assign cat
    await land.connect(alice).assignItem(0, 0);

    //Check land type
    expect((await land.landData(0)).landType).to.be.equal("hasCat");

    await marketplace.connect(alice).buyItem(1, { value: catsAndSoupPrice });

    //Assign soup
    await marketplace.connect(alice).buyPot(1, { value: potPrice });
    await land.connect(alice).assignItem(1, 1);
    expect((await land.landData(1)).landType).to.be.equal("hasSoup");

    //Try assigning another soup
    await expect(land.connect(alice).assignItem(1, 1)).to.be.revertedWith(
      "This land already has soup"
    );

    //Assign all
    await land.connect(alice).assignItem(0, 1);

    //Check land type
    expect((await land.landData(0)).landType).to.be.equal("Productive");

    //Try assigning something else when land is productive
    await expect(land.connect(alice).assignItem(0, 0)).to.be.revertedWith(
      "This land is full"
    );
  });

  it("Should not assign cat if land already has cat", async () => {
    await marketplace.connect(alice).buyLand(3, { value: landPrice });
    await marketplace.connect(alice).buyPot(3, { value: potPrice });
    await land.connect(alice).assignItem(3, 0);
    await expect(land.connect(alice).assignItem(3, 0)).to.be.revertedWith(
      "This land already has a cat"
    );
  });
});
