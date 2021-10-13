// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require("fs");

const { bytecode } = require('../artifacts/contracts/forbitspacePool.sol/forbitspacePool.json');
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  
  
  
  const Factory = await hre.ethers.getContractFactory("forbitspaceFactory");
  const factory = await Factory.deploy();

  await factory.deployed();


  const INIT = hre.ethers.utils.keccak256(bytecode);
  // const init_pair = await factory.INIT_CODE_PAIR_HASH();

  const data = {
    address: factory.address,
    abi: JSON.parse(factory.interface.format("json")),
    init: INIT
  };
  console.log({
    address: data.address,
    init: data.init,
    // INIT_CODE: init_pair
  });
  fs.writeFileSync("abi.json", JSON.stringify(data));

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
