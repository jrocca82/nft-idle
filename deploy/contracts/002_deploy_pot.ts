import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { Land } from "../../typechain-types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const land = await ethers.getContract("Land") as Land;

  const contract = await deploy("Pot", {
    from: deployer,
    args:["Pot", "POT", land.address],
    log: true
  });
  console.log(`Pot deployed to ${contract.address}`)
};

export default func;
func.tags = ["testbed", "_Pot"];
