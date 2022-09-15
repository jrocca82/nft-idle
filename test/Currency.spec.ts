import { expect } from "chai";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";
import { Currency, Currency__factory } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
chai.use(chaiAsPromised);

const setupEnvironment = async () => {
  const factory: Currency__factory = await ethers.getContractFactory(
    "Currency"
  );
  const currency = (await factory.deploy(
    "Currency",
    "CNY"
  )) as unknown as Currency;

  return { currency };
};

describe("Currency", () => {
  let currency: Currency;
  let deployer: SignerWithAddress, alice: SignerWithAddress;
  before(async () => {
    [deployer, alice] = await ethers.getSigners();
    const env = await setupEnvironment();
    currency = env.currency;
  });
  
  it("Should return decimals", async () => {
    const decimals = await currency.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should allow authorized account to mint currency", async () => {
    //Deployer is authorized
    currency.connect(deployer);

    //Check Alice's initial balance
    const initBalance = await currency.balanceOf(alice.address);

    expect(initBalance).to.equal(0);
  
    //Mint to Alice
    await currency.mintCurrency(alice.address, 30);

    const newBalance = await currency.balanceOf(alice.address);

    expect(newBalance).to.equal(30);
  })
});
