const Migrations = artifacts.require('./Migrations.sol')

//Migration.sol 을 불러와서 deploy 
module.exports = function (deployer) {
  deployer.deploy(Migrations)
}
