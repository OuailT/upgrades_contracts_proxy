const { expect } = require('chai');
const { ethers } = require('ethers');
const { isCallTrace } = require('hardhat/internal/hardhat-network/stack-traces/message-trace');

    let Box; 
    let box;

    describe("Box(proxy)", async ()=> {

        forEach(async()=> {
            Box = await ethers.getContractFactory("Box");
            // We Intilize 42 inside the implementation BOX contract inside the proxy 
            box = await upgrades.deployProxy(Box, [42], {initializer : "store"});
        });

        // Test case 
        it("retrieve returns value previously initialized", async ()=> {
            expect((box.retrieve()).toString()).to.equal("42");
        });

    });

    // NOTE : we don't implement the constructor inside the implementations, instead we use initializer;
    