require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/67T-rRwggzCIjtV0DudOu4bULz96ZUdp",
       accounts: ["c2319ab2ccee34a0aacd83fa95f64a57c89f0c13db31a0bfc430dee3d61c86ba"]
    }
  }

};
