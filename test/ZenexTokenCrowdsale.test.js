const BigNumber = web3.BigNumber;

const ZenexToken = artifacts.require('ZenexToken');
const ZenexTokenCrowdsale = artifacts.require('ZenexTokenCrowdsale');

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();


contract('ZenexTokenCrowdsale', function ([_ , wallet ]) {

    beforeEach(async function () {
        //Token configuration
        this.name = "Zenex Token";
        this.symbol = "ZENT";
        this.decimals = 18;

        //Deploy token
        this.token = await ZenexToken.new(
            this.name, 
            this.symbol, 
            this.decimals
            );

        //Crowdsale config
        this.rate = 500;
        this.wallet = wallet;

        this.crowdsale = await ZenexTokenCrowdsale.new(
          this.rate, 
          this.wallet, 
          this.token.address
          );
      });

      describe('crowdsale', function() {
        it('tracks the rate', async function() {
          const rate = (await this.crowdsale.rate()).toNumber();
          rate.should.be.bignumber.equal(this.rate);
        });
    
        it('tracks the wallet', async function() {
          const wallet = await this.crowdsale.wallet();
          wallet.should.equal(this.wallet);
        });
    
        it('tracks the token', async function() {
          const token = await this.crowdsale.token();
          token.should.equal(this.token.address);
        });
      });
});