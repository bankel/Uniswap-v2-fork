// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log("Deploying the contracts with the account:", await deployer.getAddress());

//   console.log("Account balance:", (await deployer.getBalance()).toString());

  //solidity version：0.6.6
  await uniswapV2Router02();
}

//solidity version：0.6.6
async function uniswapV2Router02() {
  const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router02 = await UniswapV2Router02.deploy(
    "0x873f4896A5A9d05453a28e6f93B4D39C440fac21",
    "0x37d151Ab156a1D3bBC844b0A8d6BD2dfCC441021"
  );
  await uniswapV2Router02.deployed();

  console.log("UniswapV2Router02 address:", uniswapV2Router02.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
