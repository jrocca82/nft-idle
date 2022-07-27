import { ethers } from "hardhat";
import { ethers as tsEthers } from "ethers";
import { expect } from "chai";
import { getEventData } from "./utils";
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

const fakeAddress = "0x5CD0b455893eae3ebe0a72b23f0D86564ccEC218";

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

  //Test buyLand in marketplace tests and assignPot in pot tests

  it("Only allow land owner to assign item", async () => {
    //Owner is set to marketplace(fakeAddress), so testing user trying to assign land
    land.connect(user);
    await expect(land.assignItem(0, 0)).to.be.revertedWith("You do not own this land");
  });

  //rest of assignItem function tested in marketplace tests

  xit("Should not allow item to be assigned if the user has no item", async () => {
    //send land 0 to user addresss 
    await land.transferFrom(fakeAddress, user.address, 0);
  });

  xit("Should not allow item to be assigned if land doesn't have a pot", async () => {

  });

  xit("Should not mint item that does not exist", async () => {

  });

  xit("Should not assign cat item to land that has cat", async () => {
    
  });
  
  xit("Should not assign soup item to land that has soup", async () => {
    
  });

  xit("Should assign soup by updating land type", async () => {

  });

  xit("Should assign cat by updating land type", async () => {

  });

  xit("Should update land type if land is full", async () => {

  });

  xit("Should not allow item to be assigned if land is full", async () => {

  });


});
