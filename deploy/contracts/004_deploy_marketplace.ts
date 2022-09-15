import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { CatsAndSoup, Currency, Land, Pot } from "../../typechain-types";
import { ethers } from "hardhat";
import savedConfig from "../../contracts.json";
import { updateContractConfig } from "../../scripts/updateContractConfig";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deployments.fixture(["_CatsAndSoup", "_Land", "_Pot", "_Currency"]);

  const catsAndSoup: CatsAndSoup = await ethers.getContract("CatsAndSoup");

  const landContract: Land = await ethers.getContract("Land");

  const pot: Pot = await ethers.getContract("Pot");

  const currency: Currency = await ethers.getContract("Currency");

  const contract = await deploy("Marketplace", {
    from: deployer,
    args: [pot.address, landContract.address, currency.address, catsAndSoup.address],
    log: true
  });

  const network = process.env.HARDHAT_NETWORK?.toLowerCase();
  let addresses;
  addresses = savedConfig[network];

  const setAddresses = (deltaConfig) => {
    addresses = { ...addresses, ...deltaConfig };
    updateContractConfig(network, addresses);
  };

  setAddresses({...addresses, "Marketplace": contract.address})
  return addresses;
};

export default func;
func.tags = ["testbed", "_Marketplace"];
