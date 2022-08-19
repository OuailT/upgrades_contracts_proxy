


async function main() {
    const gnosisSafe = "0x7D55b1Bfe61c9bd9c4910676c508468cF4996174";
    console.log("Transferring ownership of ProxyAdmin....");
    // Transfer the ownership of the proxyAdmin to GnosisSafe multisignwallet;
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    console.log("transferred ownership of ProxyAdmin to:", gnosisSafe);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });