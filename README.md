# Stellar-CLI

Liteweight, CLI Stellar Lumens Wallet.

**NOTE: This is still in beta and open source software. By using this software, you agree that the developer is not responsible for any lost funds.**

### Commands

| Command | Options | Description |
|---------|------------|-------------|
| `getnewaddress` |      | Generates new wallet public key/secret |
| `getbalance <address>` | <ul><li>`-t` true/false to use testnet</li></ul> | Get balance of given address |
| `sendtransaction <privateKey> <destination> <amount>` | <ul><li>`-t` true/false to use testnet</li></ul> | Send transaction to wallet |