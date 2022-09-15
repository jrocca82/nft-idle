import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { updateContractConfig } from "../../scripts/updateContractConfig";
import savedConfig from "../../contracts.json";
import { Land } from "../../typechain-types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deployments.fixture(["_Land"]);

  const land: Land = await ethers.getContract("Land");

  const contract = await deploy("Pot", {
    from: deployer,
    args:["Pot", "POT", land.address],
    log: true
  });
  const network = process.env.HARDHAT_NETWORK?.toLowerCase();
  let addresses;
  addresses = savedConfig[network];

  const setAddresses = (deltaConfig) => {
    addresses = { ...addresses, ...deltaConfig };
    updateContractConfig(network, addresses);
  };
  setAddresses({...addresses, "Pot": contract.address})
  return addresses;
};

export default func;
func.tags = ["testbed", "_Pot"];
