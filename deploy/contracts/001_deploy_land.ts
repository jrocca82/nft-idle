import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { CatsAndSoup } from "../../typechain-types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const catsAndSoup = await ethers.getContract("CatsAndSoup") as CatsAndSoup;

  const contract = await deploy("Land", {
    from: deployer,
    args:["Land", "LND", 10, catsAndSoup.address],
    log: true
  });
  console.log(`Land deployed to ${contract.address}`)
};

export default func;
func.tags = ["testbed", "_Land"];
