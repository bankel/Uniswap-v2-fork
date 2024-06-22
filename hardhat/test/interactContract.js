const { expect } = require("chai");
const hre = require("hardhat");

describe("ReadRemote", function () {
  it("read value from contract", async function () {
    const factoryAddress = "0x685ae0503a20AF99467300a5517A9a8484603783";
    const contract = await ethers.getContractFactory("UniswapV2Factory");
    const factoryContract = contract.attach(factoryAddress);

    const INIT_CODE_PAIR_HASH = await factoryContract.INIT_CODE_PAIR_HASH();

    console.log(INIT_CODE_PAIR_HASH);

    const [deployer] = await ethers.getSigners();

    console.log(await deployer.getBalance());
  });
});
