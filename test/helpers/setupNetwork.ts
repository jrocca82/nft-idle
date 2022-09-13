import { ethers, deployments } from "hardhat";

const setupNetwork = async () => {
  await deployments.fixture(["testbed"]);
  const catsAndSoup = await ethers.getContract("CatsAndSoup");
  const land = await ethers.getContract("Land");

  return [catsAndSoup, land];
};

export default setupNetwork;