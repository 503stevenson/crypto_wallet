const express = require('express');
const ethers = require('ethers'); 
const bodyparser = require('body-parser');
const provider = ethers.getDefaultProvider('goerli');

var app = express();
app.use(bodyparser.json());
const port = 4000;

async function sendETH(amount, wallet, to) {
    const transaction = {
        to: to,
        value: ethers.BigNumber.from(ethers.utils.parseEther(amount)),
        gasLimit: 21000,
    };
    try {
        const signed = await wallet.signTransaction(transaction);
        const transactionResponse = await provider.sendTransaction(signed);
        return "Transaction complete" + transactionResponse.hash;
    } catch (e) {
        console.log(e);
        return "An error occured"
    }
}

const generateKeys = () => {
    const wallet = ethers.Wallet.createRandom();
    return wallet;
};

console.log(generateKeys().address);

const recoverKeysWithMnemonic = (seed) => {
    const wallet = ethers.Wallet.fromMnemonic(seed);
    return wallet;
};

async function checkBalance(address) {
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
}

app.post('/get-balance', (req, res) => {
    const address = req.body.address;
    (async () => {
        const balance = await checkBalance(address);
        res.json({'balance': balance});
    })();
})

app.get('/generate-keys', (req, res) => {
    const wallet = generateKeys();
    res.json({"public": wallet.address, "private": wallet.privateKey});
})

app.post('/recover-keys', (req, res) => {
    const mnemonic = req.body.mnemonic;
    const wallet = recoverKeysWithMnemonic(mnemonic);
    res.json({"public": wallet.address, "private": wallet.privateKey});
})

app.post('/send-eth', (req, res) => {
    const private = req.body.private;
    const value = req.body.value;
    const to = req.body.to;
    (async () => {
        const response = await sendETH(amount=value, new ethers.Wallet(private), to);
        res.json({'response': response});
    })();
})
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})