import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { getEventData } from "./utils";
import { Currency, Currency__factory } from "../build/typechain";

let currency: Currency;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;

describe("Land Contract", () => {
  before(async () => {
    deployer = (await ethers.getSigners())[0];
    currency = await new Currency__factory(deployer).deploy(
      "Currency",
      "CNY"
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
  });

  it("Should return the correct decimals", async () => {
    const decimals = await currency.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should mint currency", async () => {
    
  });
});
