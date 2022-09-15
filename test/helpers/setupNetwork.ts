import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, deployments } from "hardhat";
import { Marketplace__factory } from "../../typechain-types";

const setupNetwork = async (deployer: SignerWithAddress) => {
  await deployments.fixture(["testbed"]);
  const catsAndSoup: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );
  const CSInstance = await catsAndSoup.deploy();
  const land: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );
  const landInstance = await land.deploy();
  const pot: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );
  const potInstance = await pot.deploy();
  const currency: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );
  const currencyInstance = await currency.deploy();
  const marketplace: Marketplace__factory = await ethers.getContractFactory(
    "Marketplace"
  );
  const marketplaceInstance = await marketplace.deploy();
  await marketplaceInstance.connect(deployer).setContractAuths();
};

export default setupNetwork;