const ZenexToken = artifacts.require("ZenexToken");

module.exports = function(deployer) {
  const _name = 'Zenex Token';
  const _symbol = 'ZENT';
  const _decimals = 17;

  deployer.deploy(ZenexToken, _name, _symbol, _decimals);
};
