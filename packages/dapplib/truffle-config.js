require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz enroll supply suggest name rescue pizza huge grace nature slot gasp'; 
let testAccounts = [
"0xa0b015f09cff00d7a3cd6a0451a465e2708ecc26b10cdc7aae2bc0cd762f7baf",
"0xed08144a5529f68657b58565a54f42033167f2b2d6539460a717517176128d04",
"0x8ca8ff90d3b27118ddeea38f6794ff6d1578c3461538baf4599f646ee0d1dc43",
"0x5d26e605b8922087df3cf18c3dd7562060d63001ac4b840c5d540fcdaf08e7a0",
"0x4b4f48c71df536d239a91baf38cd20d80abca6d925a9e73582a42644021acc2f",
"0xd666126de42e78baa767c4a9896b9bd1ff1858b43039d5639d4f42874152c427",
"0xbf7c505db60f2bdd484320bc54312120cea4e5586573c483c6a0cae03c79b8fa",
"0xd78ae473f15a335062d8527c5e152d0a7873105d39dbe5a1b2efc4894526fb18",
"0x3729ff761582601832dff6a4e687fc218d282ba876c5a3b9556bc0a49d8336ca",
"0x47834019f4d1650ddde580aa087a83496f1167737c2cf6f7e77a5ec35e89b622"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


