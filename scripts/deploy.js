


async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying box....");
    const box = await upgrades.deployProxy(Box, [42], {initializer: "store"});
    console.log("Box deployed to :", box.address); // 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
}


main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
});