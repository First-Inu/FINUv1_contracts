const FINU = artifacts.require("FINU");

module.exports = async function (deployer, network) {
  await deployer.deploy(FINU);
  return;
};