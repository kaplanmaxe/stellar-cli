#! /usr/bin/env node
import program from 'commander';
import {
  getBalance,
  genKeypair,
  sendTransaction,
} from './helpers';

program.version('0.0.1');

program
  .command('getnewaddress')
  .action(() => {
    const keypair = genKeypair();
    console.log(`public key: ${keypair.publicKey()}`);
    console.log(`secret: ${keypair.secret()}`);
  });

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

program
  .command('sendtransaction <privateKey> <destination> <amount>')
  .option('-t --testnet [testnet]')
  .action((privateKey, destination, amount, { testnet }) => {
    sendTransaction(privateKey, destination, amount, !testnet ? true : testnet === 'true')
      .then((res) => console.log(`Transaction sent! \n Hash: ${res.hash} \n Ledger: ${res.ledger}`))
      .catch((err) => console.log(err));
  });

program.parse(process.argv);
