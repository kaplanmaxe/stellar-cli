#! /usr/bin/env node
import program from 'commander';
import {
  getBalance,
  genKeypair,
  sendTransaction,
  callFaucet,
} from './helpers';

program.version('0.0.3');

// Generate new wallet
program
  .command('getnewaddress')
  .action(() => {
    const keypair = genKeypair();
    console.log(`public key: ${keypair.publicKey()}`);
    console.log(`secret: ${keypair.secret()}`);
  });

  // Get balance
program
  .command('getbalance <address>')
  .option('-t --testnet [testnet]')
  .action((address, { testnet }) => {
    if (testnet && ['true', 'false'].indexOf(testnet) === -1) {
      throw new Error('Options for option testnet can either be true or false');
    }
    getBalance(address, !testnet ? true : testnet === 'true')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

// Send transaction
program
  .command('sendtransaction <privateKey> <destination> <amount>')
  .option('-t --testnet [testnet]')
  .action((privateKey, destination, amount, { testnet }) => {
    sendTransaction(privateKey, destination, amount, !testnet ? true : testnet === 'true')
      .then((res) => console.log(`Transaction sent! \n Hash: ${res.hash} \n Ledger: ${res.ledger}`))
      .catch((err) => console.log(err));
  });

// Call testnet faucet
program
  .command('callfaucet <address>')
  .action((address) => {
    callFaucet(address)
      .then((res) => console.log(`Account successfully funded!\n Hash: ${res.hash}\nLedger: ${res.ledger}`))
      .catch((err) => console.log(err.err));
  });

program.parse(process.argv);
