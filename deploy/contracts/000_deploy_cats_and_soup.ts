import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { updateContractConfig } from "../../scripts/updateContractConfig";
import savedConfig from "../../contracts.json";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const contract = await deploy("CatsAndSoup", {
    from: deployer,
    log: true
  });
  const network = process.env.HARDHAT_NETWORK?.toLowerCase();
  let addresses;

  const setAddresses = (deltaConfig) => {
    addresses = { ...addresses, ...deltaConfig };
    updateContractConfig(network, addresses);
  };

  addresses = savedConfig[network];
  setAddresses({...addresses, "CatsAndSoup": contract.address})
  return addresses;
};

export default func;
func.tags = ["testbed", "_CatsAndSoup"];
