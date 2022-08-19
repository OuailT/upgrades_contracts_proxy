const { expect } = require('chai');

    describe("boxV2(proxy)", function(){
         // "Before" to get the contracts
        before(async function() {
            this.Box = await ethers.getContractFactory("Box");
            this.BoxV2 = await ethers.getContractFactory("BoxV2");
        });

        // Before each test case this block will be running
        beforeEach(async function(){
            // Get the address of the proxy contract
            this.box = await upgrades.deployProxy(this.Box, [42], {initializer: "store"});
            // Upgrades the proxy to a new implementation
            // @dev parameter 
            // this.box.address : the address of the proxy with the old implementation
            // this.BoxV2 : the address the contract of the new contract implementation
            this.boxV2 = await upgrades.upgradeProxy(this.box.address, this.BoxV2);
        });

        // Test block
        it("it should retrieve the increment value", async function(){
            await this.boxV2.increment();
            expect((await this.boxV2.retrieve()).toString()).to.equal("43");
        });

    });