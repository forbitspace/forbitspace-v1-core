require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const RINKEBY_URL = process.env.RINKEBY_URL;
const MAINNET_URL = process.env.MAINNET_URL;
const ARBITRUM_URL = process.env.ARBITRUM_URL;
const BSC_URL = process.env.BSC_URL;
const POLYGON_URL = process.env.POLYGON_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const COIN_MARKETCAP_API = process.env.COIN_MARKETCAP_API;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }, 
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      gas: 5500000,
      blockGasLimit: 5500000
    },
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      url: MAINNET_URL,
      accounts: [PRIVATE_KEY]
    },
    bscs: {
      url: BSC_URL,
      accounts: [PRIVATE_KEY]
    },
    arbitrum: {
      url: ARBITRUM_URL,
      accounts: [PRIVATE_KEY]
    },
    polygon: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY],
      gasPrice: 8000000000
    }
  },
  gasReporter: {
    enabled: true,
    coinmarketcap: COIN_MARKETCAP_API,
    currency: "USD",
    showTimeSpent: true
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY 
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 50000
  }
};
