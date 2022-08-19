// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();


const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_RPC_URL= process.env.GOERLI_RPC_URL;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    // Connect hardhat with infura endpoint
    goerli: {
      url: GOERLI_RPC_URL, 
      accounts: [PRIVATE_KEY]
    }
  }
};

// Testing have always to be on hardhat network default.