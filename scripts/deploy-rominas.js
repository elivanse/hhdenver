async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ROMINAS = await ethers.getContractFactory("ROMINAS");
  const deployedContract = await ROMINAS.deploy(100000000);
  console.log("Deployed ERC-20 ROMINAS contract address:", deployedContract.address);




}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

