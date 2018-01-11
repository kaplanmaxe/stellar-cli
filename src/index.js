#! /usr/bin/env node
import program from 'commander';
import {
  getBalance,
  genKeypair,
  sendTransaction,
  callFaucet,
  voteForInflationLumens,
} from './helpers';

program.version('1.0.0');

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
  .action(async (address, { testnet = false }) => {
    if (testnet && ['true', 'false'].indexOf(testnet) === -1) {
      throw new Error('Options for option testnet can either be true or false');
    }
    try {
      const balance = await getBalance(address, testnet === 'true');
      console.log(balance);
    } catch (e) {
      console.error(`An error occurred: ${e}`);
    }
  });

// Send transaction
program
  .command('sendtransaction <privateKey> <destination> <amount>')
  .option('-t --testnet [testnet]')
  .action(async (privateKey, destination, amount, { testnet = false }) => {
    try {
      const { hash, ledger } = await sendTransaction(privateKey, destination, amount, testnet === 'true');
      console.log(`Transaction sent!\n Hash: ${hash}\n Ledger: ${ledger}`);
    } catch (e) {
      console.error(`An error occurred: ${e}`);
    }
  });

// Call testnet faucet
program
  .command('callfaucet <address>')
  .action(async (address) => {
    try {
      const { hash, ledger } = await callFaucet(address);
      console.log(`Account successfully funded!\nHash: ${hash}\nLedger: ${ledger}`);
    } catch (e) {
      console.log(`An error occurred: ${e.err}`);
    }
  });

program
  .command('voteforinflation <secret> <inflationDestination>')
  .action(async (secret, inflationDestination) => {
    try {
      const { hash, ledger } = await voteForInflationLumens(secret, inflationDestination);
      console.log(`Voted Successfully!\nHash: ${hash}\nLedger: ${ledger}`);
    } catch (e) {
      console.error(`An error occured: ${e}`);
    }
  });

program.parse(process.argv);
