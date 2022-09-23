import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { Vault } from "../../typechain-types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const vault = await ethers.getContract("Vault") as Vault;

  const contract = await deploy("Currency", {
    from: deployer,
    args:["Currency", "CNY", vault.address],
    log: true
  });
  console.log(`Currency deployed to ${contract.address}`)
};

export default func;
func.tags = ["testbed", "_Currency"];
