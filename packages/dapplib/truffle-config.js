require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan release machine unfold include clinic army gentle'; 
let testAccounts = [
"0x801085b6d7f06be15b4aaf329a8b753c2187f020790479fe6079eb95664d3ac4",
"0x3e92b993d2593b76c798fdcf3c4c51357d7cde48801f310604060facff670e52",
"0x8e6af961e884efc6b93b3b3e98b8278aecc55fdba6d6014f4a4ad2b5f30a2514",
"0x62c1f1113aafca40363bc9730e8ccf01daabdc56801af5725ed9c87e03c56922",
"0x75ebd18f0d5c4ecab32a8da36bebf761d7e4c4a858c3c328b4299a854d83d993",
"0x5e7094b3b6ed47630b80867f2c4546b5f6049d2e555a7b7f4c89511ac324b95c",
"0x8ffe80f16d47d76dbb1129dbeb8a2dd7392f7b4afb9da3ff6b9a2d6e774be1cd",
"0x6e51e00f92acb6d5912541a1e197b285d914d95fa90f0141dcae8d83d751d904",
"0x771d57410bec313bff768fc4658ef95993043511b2d2a1a038291e5349fded11",
"0x86bea2b81202dc61160861e70728f0640f3622ed457be1b5dd717baf09a822c9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


