import "dotenv/config";
import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "@typechain/hardhat";
import "solidity-coverage";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-tracer";

const config: HardhatUserConfig = {
  solidity: "0.8.13",
  paths: {                         
    artifacts: './artifacts',
 },
  networks: {
    hardhat: {
      chainId: 31337,
      // forking: {
      //   url: process.env.MAINNET_URL || "",
      //   blockNumber: Number(process.env.BLOCK_NUMBER) || 14452169,
      // },
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    // rinkeby: {
    //   url: process.env.RINKEBY_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
    // mainnet : {
    //   url: process.env.MAINNET_URL || "",
    //   accounts: 
    //   process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // }
  },
  namedAccounts: {
    deployer: 0,
    alice: 1,
    bob: 2,
    carol: 3,
    ted: 4,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : undefined,
    currency: "AUD",
    coinmarketcap: process.env.COINMARKETCAP_KEY || "",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;