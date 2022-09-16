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

const setupEnvironment = async (deployer: SignerWithAddress, alice: SignerWithAddress) => {
  const tokenFactory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );

  const catsAndSoup = (await tokenFactory.deploy()) as unknown as CatsAndSoup;

  const landFactory: Land__factory = await ethers.getContractFactory("Land");

  //Max supply set to 10
  const land = (await landFactory.deploy("Land", "LND", 10, catsAndSoup.address)) as unknown as Land;

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
  it("Should not allow unauthorized user to set contract auths", async () => {
    await expect(
      marketplace.connect(alice).setContractAuths()
    ).to.be.revertedWith("Marketplace: Unauthorized");
  });

  it("Should revert transactions with less than price", async () => {
    await expect(marketplace.connect(alice).buyPot(1)).to.be.revertedWith(
      "Not enough currency sent"
    );
    await expect(marketplace.connect(alice).buyLand(1)).to.be.revertedWith(
      "Not enough currency sent"
    );
    await expect(marketplace.connect(alice).buyItem(0)).to.be.revertedWith(
      "Not enough currency sent"
    );
    await expect(marketplace.connect(alice).buyItem(1)).to.be.revertedWith(
      "Not enough currency sent"
    );
    await expect(
      marketplace.connect(alice).buyStarterPack(1)
    ).to.be.revertedWith("Not enough currency sent");
  });

  it("Should not mint invalid item ID", async () => {
    await expect(
      marketplace.connect(alice).buyItem(2, { value: catsAndSoupPrice })
    ).to.be.revertedWith("This item does not exist");
  });

  it("Should set contract auths and approvals", async () => {
    const deployerMp = marketplace.connect(deployer);
    await deployerMp.setContractAuths();
    expect(await marketplace.getAuth(pot.address)).to.be.equal(true);
    expect(await marketplace.getAuth(land.address)).to.be.equal(true);
    expect(await marketplace.getAuth(currency.address)).to.be.equal(true);
    expect(await marketplace.getAuth(catsAndSoup.address)).to.be.equal(true);
    expect(await land.getAuth(marketplace.address)).to.be.equal(true);
  });

  it("Should allow user to buy a starter pack", async () => {
    const initBalance = await currency.balanceOf(alice.address);
    await marketplace.connect(alice).buyStarterPack(0, { value: startPackPrice });

    //Check Alice's token balances
    expect(await land.balanceOf(alice.address)).to.be.equal(1);
    expect(await pot.balanceOf(alice.address)).to.be.equal(1);
    expect(await catsAndSoup.balanceOf(alice.address, 0)).to.be.equal(1);
    expect(await catsAndSoup.balanceOf(alice.address, 1)).to.be.equal(1);
    expect(await currency.balanceOf(alice.address)).to.be.equal(initBalance.sub(startPackPrice));
  });

  it("Should allow user to buy land", async () => {
    const initBalance = await currency.balanceOf(alice.address);

    //ID 1 bought in previous test
    await marketplace.connect(alice).buyLand(2, { value: landPrice });

    expect(await land.balanceOf(alice.address)).to.be.equal(2);
    expect(await currency.balanceOf(alice.address)).to.be.equal(initBalance.sub(landPrice));
  });

  it("Should allow user to buy pot", async () => {
    const initBalance = await currency.balanceOf(alice.address);

    //Buy pot to mint to land ID 2-- purchased in previous test
    await marketplace.connect(alice).buyPot(2, { value: potPrice });
    
    expect(await pot.balanceOf(alice.address)).to.be.equal(2);
    expect(await currency.balanceOf(alice.address)).to.be.equal(initBalance.sub(potPrice));
  });

  it("Should allow user to buy cat", async () => {
    const initBalance = await currency.balanceOf(alice.address);

    //Buy cat-- itemId 0
    await marketplace.connect(alice).buyItem(0, { value: catsAndSoupPrice });
    
    expect(await catsAndSoup.balanceOf(alice.address, 0)).to.be.equal(2);
    expect(await currency.balanceOf(alice.address)).to.be.equal(initBalance.sub(catsAndSoupPrice));
  });

  it("Should allow user to buy soup", async () => {
    const initBalance = await currency.balanceOf(alice.address);

    //Buy soup-- itemId 1
    await marketplace.connect(alice).buyItem(1, { value: catsAndSoupPrice });
    
    expect(await catsAndSoup.balanceOf(alice.address, 1)).to.be.equal(2);
    expect(await currency.balanceOf(alice.address)).to.be.equal(initBalance.sub(catsAndSoupPrice));
  });

  it("Should get existing user status", async() => {
    const user = await marketplace.getUser(alice.address);
    const notUser = await marketplace.getUser(deployer.address);
    expect(user).to.be.equal(true);
    expect(notUser).to.be.equal(false);
  })

  it("Should not allow user with land to buy a starter pack", async () => {
    await expect(
      marketplace.connect(alice).buyStarterPack(3, { value: startPackPrice })
    ).to.be.revertedWith("You cannot purchase a starter pack");
  });
});
