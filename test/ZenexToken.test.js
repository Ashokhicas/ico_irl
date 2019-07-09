const BigNumber = web3.BigNumber;

const ZenexToken = artifacts.require('ZenexToken');

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('ZenexToken', accounts => {
  const _name = 'Zenex Token';
  const _symbol = 'ZENT';
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await ZenexToken.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      await this.token.decimals().then( (v) => { decimals = v.toNumber() });
      //console.log(decimals)
      //decimals = decimals.toNumber();
      decimals.should.be.bignumber.equal(_decimals);
    });
  });
});