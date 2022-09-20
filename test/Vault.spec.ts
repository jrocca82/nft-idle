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
import { time } from "@nomicfoundation/hardhat-network-helpers";

chai.use(solidity);
chai.use(chaiAsPromised);
const startAmount = ethers.utils.parseEther("10000");

const setupEnvironment = async (alice: SignerWithAddress) => {
  const tokenFactory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );

  const catsAndSoup = (await tokenFactory.deploy()) as unknown as CatsAndSoup;

  const landFactory: Land__factory = await ethers.getContractFactory("Land");

  //Max supply set to 10
  const land = (await landFactory.deploy("Land", "LND", 10, catsAndSoup.address)) as unknown as Land;



  const potFactory: Pot__factory = await ethers.getContractFactory("Pot");

  const pot = (await potFactory.deploy(
    "SoupPot",
    "SPT",
    land.address
  )) as unknown as Pot;

  const vaultFactory: Vault__factory = await ethers.getContractFactory("Vault");

  const vault = (await vaultFactory.deploy(
    land.address
  )) as unknown as Vault;

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

  return { pot, catsAndSoup, land, currency, marketplace, vault };
};

describe("Vault", () => {
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
    vault = env.vault;
    currency = env.currency;
    marketplace = env.marketplace;

    //Set marketplaces and batch mint initial lands
    await land.setMarketplace(marketplace.address);
    await pot.setMarketplace(marketplace.address);
    await catsAndSoup.setMarketplace(marketplace.address);
    await land.setPotContract(pot.address);
    await land.initialBatchMint();
  });

  it("Should set the marketplace address", async () => {
    await expect(
      vault.connect(alice).setMarketplace(marketplace.address)
    ).to.be.revertedWith("Ownable: caller is not the owner");
    await expect(vault.setMarketplace(ethers.constants.AddressZero)).to.be.revertedWith("Cannot set address to 0");
    await vault.setMarketplace(marketplace.address);
    const mpAddress = await vault.marketplace();
    expect(mpAddress).to.be.equal(marketplace.address);
  });

  it("Should set the currency address", async () => {
    await expect(
        vault.connect(alice).setCurrency(currency.address)
      ).to.be.revertedWith("Ownable: caller is not the owner");
      await expect(vault.setCurrency(ethers.constants.AddressZero)).to.be.revertedWith("Cannot set address to 0");
      await vault.setCurrency(currency.address);
      const currencyAddress = await vault.currency();
      expect(currencyAddress).to.be.equal(currency.address);
  });

  it("Should only let land or marketplace contracts call setOwnerAndStartEarn", async () =>{
    await expect(vault.connect(alice).setOwnerAndStartEarn(0, alice.address)).to.be.revertedWith("Vault: Unauthorized");
  });

  it("Should not allow someone to claim if they do not own the land", async () => {
      //Alice buys a starter pack --> starts earning
      await marketplace.connect(alice).buyStarterPack(0);
      await expect(vault.connect(deployer).claim(0)).to.be.revertedWith("You cannot claim for someone else");
  });

  it("Should not allow claim if no tokens earned", async () => {
      //Alice buys a land but it is not productive
      await marketplace.connect(alice).buyLand(1, {value: ethers.utils.parseEther("1")});
      await expect(vault.connect(alice).claim(1)).to.be.revertedWith("This land is not producing");
      await land.setVaultContract(vault.address);
      await currency.getAuth(vault.address);
      await land.connect(alice).assignItem(0, 0);
      await land.connect(alice).assignItem(0, 1);
      await expect(vault.connect(alice).claim(0)).to.be.revertedWith("No tokens to claim!");
  });

  it("Should get the balance of how much currency a land has earned", async () => {
    //Check initial balance is 0
    const initBalance = await vault.getBalance(0);
    expect(initBalance).to.be.equal(0);


    //Artificially increase time 5 minutes
    await time.increase(300);
    await vault.setBalance(0);
    
    //Check balance-- earning 1 coin per minute
    const newBalance = await vault.getBalance(0);
    expect(newBalance).to.equal(ethers.utils.parseEther("5"));
  });

  it("Should allow a user to claim the currency from their land", async () => {
    const initBalance = await currency.balanceOf(alice.address);
    const initEarnings = await vault.getBalance(0);
    const initLastClaimTime = await (await vault.landDetails(0)).lastClaimTime;
    await vault.connect(alice).claim(0);

    //Check alice's balance of currency
    expect(await currency.balanceOf(alice.address)).to.be.equal(initBalance.add(initEarnings));

    //Land balance has been reset
    const newBalance = await vault.getBalance(0);
    expect(newBalance).to.be.equal(0);

    //Claim time has been reset
    const newLastClaimTime = await (await vault.landDetails(0)).lastClaimTime;
    expect(initLastClaimTime).is.not.equal(newLastClaimTime);
  });

  it("Should continue earning after a claim", async () => {
    //Artificially increase time 10 minutes
    await time.increase(600);
    await vault.setBalance(0);
    
    //Check balance-- earning 1 coin per minute
    const newBalance = await vault.getBalance(0);
    expect(newBalance).to.equal(ethers.utils.parseEther("10"));
  });

  it("Should allow a user to claim a second time", async () => {
    const initBalance = await currency.balanceOf(alice.address);
    const initEarnings = await vault.getBalance(0);
    const initLastClaimTime = await (await vault.landDetails(0)).lastClaimTime;
    await vault.connect(alice).claim(0);

    //Check alice's balance of currency
    expect(await currency.balanceOf(alice.address)).to.be.equal(initBalance.add(initEarnings));

    //Land balance has been reset
    const newBalance = await vault.getBalance(0);
    expect(newBalance).to.be.equal(0);

    //Claim time has been reset
    const newLastClaimTime = await (await vault.landDetails(0)).lastClaimTime;
    expect(initLastClaimTime).is.not.equal(newLastClaimTime);
  });
});
