const fs = require('fs')
const AdditionGame = artifacts.require('./AdditionGame.sol')

//배포할 때마다 에러나면 에러를 던지고, 성공하면 해당 파일에 기록.
module.exports = function (deployer) {
  deployer.deploy(AdditionGame)
    .then(() => {
        if(AdditionGame._json){
            fs.writeFile('deployedABI',JSON.stringify(AdditionGame._json.abi),
                (err) => {
                    if(err) throw err;
                    console.log("파일에 ABI 입력 성공");
                }
            )
            fs.writeFile('deployedAddress',AdditionGame.address,
                (err) => {
                    if (err) throw err;
                    console.log("파일에 주소 입력 성공");
                }
            )
        }   
    })
}
