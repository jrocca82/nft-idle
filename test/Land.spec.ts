import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { fakeAddress, getEventData } from "./helpers/utils";
import {
  CatsAndSoup,
  CatsAndSoup__factory,
  Land,
  Land__factory
} from "../build/typechain";

let land: Land;
let catsAndSoup: CatsAndSoup;
let deployer: tsEthers.Signer;
let user: tsEthers.Wallet;

describe("Land Contract", () => {
  before(async () => {
    deployer = (await ethers.getSigners())[0];
    catsAndSoup = await new CatsAndSoup__factory(deployer).deploy();
    land = await new Land__factory(deployer).deploy(
      "Land",
      "LND",
      10,
      catsAndSoup.address
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

  it("Should need to set marketplace before can mint initial batch", async () => {
    //Set marketplace address to non-zero address
    land.connect(deployer);
    expect(land.initialBatchMint()).to.be.revertedWith(
      "Marketplace address has not been set"
    );
  });

  it("Should only allow owner can call initial batch mint", async () => {
    //Set marketplace address to non-zero address
    await land.setMarketplace(fakeAddress);
    land.connect(user);
    expect(land.initialBatchMint()).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("Should start landIds at 0", async () => {
    const firstLand = await land.landData(0);
    expect(firstLand.landType).to.equal("Empty");
    expect(firstLand.owner).to.equal(fakeAddress);
  });

  it("Should mint max supply", async () => {
    const lastLand = await land.landData(10);
    expect(lastLand.landType).to.equal("Empty");
    expect(lastLand.owner).to.equal(fakeAddress);
    //If does not exist in mapping, will have address 0
    expect((await land.landData(11)).owner).to.equal(tsEthers.constants.AddressZero);
  });

  it("Should emit initial batch mint event", async () => {
    const receipt = await (await land.initialBatchMint()).wait(1);
    const event = getEventData("InitialMint", land, receipt);
    const maxSupply = await land.maxSupply();
    expect(event.quantity).to.equal(maxSupply);
    expect(event.initialOwner).to.equal(fakeAddress);
  });

  //TODO: Continue assignItem functions
});
