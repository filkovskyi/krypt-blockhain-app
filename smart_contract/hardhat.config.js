require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/bM4JAbtw6M9pxRZVAi0kOXQ-18cGhpwd',
      accounts: ['bdc4e7690325a3b1708b6731a9bda79bba577a5f1be818f2f07f382cf4b573b0'],
    },
  },
};