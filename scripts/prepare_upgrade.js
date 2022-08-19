

async function main() {
    // The proxy address 
    const proxyAddress = "0xc6bdf718Bd939C0e5B347Dda6df5647EBF7D9157";
    const Boxv2 = await ethers.getContractFactory("BoxV2");
    console.log("preparing upgrades....");
    // @notice BoxV2 the address of the new implementation
    const BoxV2Address = await upgrades.prepareUpgrade(proxyAddress, Boxv2);
    console.log("BoxV2 at:", BoxV2Address); // 0xF3D55dC0B121151cefC9C42280fbe134799ab6E3
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });