import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CatsAndSoup, Currency, Land, Pot, Vault } from "../../typechain-types";
import { ethers } from "hardhat";
import savedConfig from "../../contracts.json";
import { updateContractConfig } from "../../scripts/updateContractConfig";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const pot = await ethers.getContract("Pot") as Pot;
  const land = await ethers.getContract("Land") as Land;
  const currency = await ethers.getContract("Currency") as Currency;
  const catsAndSoup = await ethers.getContract("CatsAndSoup") as CatsAndSoup;
  const vault = await ethers.getContract("Vault") as Vault;

  const contract = await deploy("Marketplace", {
    from: deployer,
    args: [
      pot.address,
      land.address,
      currency.address,
      catsAndSoup.address,
      vault.address
    ],
    log: true
  });

  console.log(`Marketplace deployed to ${contract.address}`);
};

export default func;
func.tags = ["testbed", "_Marketplace"];
