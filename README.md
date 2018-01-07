# Stellar-CLI

[![Build Status](https://travis-ci.org/kaplanmaxe/stellar-cli.svg?branch=master)](https://travis-ci.org/kaplanmaxe/stellar-cli)
[![Known Vulnerabilities](https://snyk.io/test/github/kaplanmaxe/stellar-cli/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kaplanmaxe/stellar-cli?targetFile=package.json)
[![Coverage Status](https://coveralls.io/repos/github/kaplanmaxe/stellar-cli/badge.svg)](https://coveralls.io/github/kaplanmaxe/stellar-cli)

Liteweight, CLI Stellar Lumens Wallet.

**NOTE: This is still in beta and open source software. By using this software, you agree that the developer is not responsible for any lost funds.**

### Installation

Yarn:

```
yarn global add stellar-cli
```

NPM:

```
npm install -g stellar-cli
```

### Usage

See commands section below.

```
stellar-cli command...
```

**As of right now, `stellar-cli` will always default to the testnet unless `-t false` is passed to the command.**

### Commands

| Command | Options | Description |
|---------|------------|-------------|
| `getnewaddress` |      | Generates new wallet public key/secret |
| `getbalance <address>` | <ul><li>`-t` true/false to use testnet</li></ul> | Get balance of given address |
| `sendtransaction <privateKey> <destination> <amount>` | <ul><li>`-t` true/false to use testnet</li></ul> | Send transaction to wallet |
| `callfaucet <address>` | | Asks friendbot for lumens. Works on testnet only. |

### Authors

- [Max Kaplan](https://twitter.com/maxekaplan)

### Donations:

- XLM: GB7YO7J6MMDQMVCFFUGEIY4TCX67P6QZRJ46ZVHCO5MQ6V7YXPWB7WHQ
- BTC: 1MaxKapqcv8KVHw1mTzZd23uvntnLABvnB

Thanks!