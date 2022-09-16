import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { updateContractConfig } from "../../scripts/updateContractConfig";
import savedConfig from "../../contracts.json";
import { CatsAndSoup } from "../../typechain-types";
import { ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deployments.fixture(["_CatsAndSoup"]);

  const catsAndSoup: CatsAndSoup = await ethers.getContract("CatsAndSoup");

  const contract = await deploy("Land", {
    from: deployer,
    args:["Land", "LND", 10, catsAndSoup.address],
    log: true
  });
  const network = process.env.HARDHAT_NETWORK?.toLowerCase();
  let addresses;

  const setAddresses = (deltaConfig) => {
    addresses = { ...addresses, ...deltaConfig };
    updateContractConfig(network, addresses);
  };

  addresses = savedConfig[network];
  setAddresses({...addresses, "Land": contract.address})
  return addresses;
};

export default func;
func.tags = ["testbed", "_Land"];
