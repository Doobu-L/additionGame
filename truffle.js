// truffle.js config for klaytn.
// 스마트 계약을 배포할 수 있는 환경설정.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0xe284133ab620107d2a11252d81a0d87e2186a5e585fa57a58fb146d367186b75'

module.exports = {
    networks:{
        klaytn:{
            provider: new PrivateKeyConnector(PRIVATE_KEY,URL),
            network_id: NETWORK_ID,
            gass: GASLIMIT,
            gasPrice: null, //바오밥 테스트넷에서 자동으로 잡아주기 때문에 null
        }
    },
}