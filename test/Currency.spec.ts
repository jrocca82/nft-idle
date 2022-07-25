import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { getEventData } from "./utils";
import { Currency, Currency__factory } from "../build/typechain";

let token: Currency;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;

describe("Currency Token", () => {
  before(async () => {
    deployer = (await ethers.getSigners())[0];
    token = await new Currency__factory(deployer).deploy("Currency", "CNY", 18);
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

  it("Should return the correct decimal count", async () => {
    expect(await token.decimals()).to.equal(18);
  });

  it("Should mint tokens to deployer", async () => {
    const amount = ethers.BigNumber.from("10");
    const address = await deployer.getAddress();
    await token.mint(address, amount);
    const balance = await token.balanceOf(address);
    expect(balance).to.equal(amount);
  });

  it("Should emit a Token Earned event", async () => {
    const deployerAddress = await deployer.getAddress();
    const receipt = await (await token.mint(deployerAddress, "1")).wait(1);
    const event = getEventData("TokenEarned", token, receipt);
    expect(event.amount).to.equal("1");
    expect(event.account).to.equal(deployerAddress);
  });
});