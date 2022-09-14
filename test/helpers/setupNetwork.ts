import { ethers, deployments } from "hardhat";

const setupNetwork = async () => {
  await deployments.fixture(["testbed"]);
  const catsAndSoup = await ethers.getContract("CatsAndSoup");
  const land = await ethers.getContract("Land");
  const pot = await ethers.getContract("Pot");
  const currency = await ethers.getContract("Currency");
  const marketplace = await ethers.getContract("Marketplace");

  return [catsAndSoup, land, pot, currency, marketplace];
};

export default setupNetwork;