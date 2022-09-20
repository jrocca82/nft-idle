import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { CatsAndSoup, CatsAndSoup__factory, Currency, Currency__factory, Land, Land__factory, Vault, Vault__factory } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  const catsFactory: CatsAndSoup__factory = await ethers.getContractFactory(
    "CatsAndSoup"
  );
  const catsAndSoup = (await catsFactory.deploy(
  )) as unknown as CatsAndSoup;

  const landFactory: Land__factory = await ethers.getContractFactory(
    "Land"
  );
  const land = (await landFactory.deploy(
    "Currency",
    "CNY",
    10,
    catsAndSoup.address
  )) as unknown as Land;

  const vaultFactory: Vault__factory = await ethers.getContractFactory(
    "Vault"
  );
  const vault = (await vaultFactory.deploy(
    land.address
  )) as unknown as Vault;

  const factory: Currency__factory = await ethers.getContractFactory(
    "Currency"
  );
  const currency = (await factory.deploy(
    "Currency",
    "CNY",
    vault.address
  )) as unknown as Currency;

  return { currency, vault };
};

describe("Currency", () => {
  let currency: Currency;
  let vault: Vault;
  let deployer: SignerWithAddress, alice: SignerWithAddress;
  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment();
    currency = env.currency;
    vault = env.vault;
  });

  it("Should return decimals", async () => {
    const decimals = await currency.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should allow authorized account to mint currency", async () => {
    //Alice tries to mint
    await expect(
      currency.connect(alice).mintCurrency(alice.address, 30)
    ).to.be.revertedWith("Currency: Unauthorized");

    //Check Alice's initial balance
    const initBalance = await currency.balanceOf(alice.address);

    expect(initBalance).to.equal(0);

    //Mint to Alice-- connected to deployer (authorized)
    await currency.mintCurrency(alice.address, 30);

    const newBalance = await currency.balanceOf(alice.address);

    expect(newBalance).to.equal(30);
  });
});
