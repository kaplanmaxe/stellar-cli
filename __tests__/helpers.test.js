import {
  genKeypair,
  getKeypairFromPrivateKey,
  callFaucet,
  getBalance,
} from '../src/helpers';

test('Keypair should generate successfully', () => {
  const keypair = genKeypair();
  expect(keypair.publicKey().length).toBe(56);
  expect(keypair.secret().length).toBe(56);
});

test('Get public key from secret', () => {
  const keypair = getKeypairFromPrivateKey('SABRMBLU222ITHT22PEXDC434RYZWLD6TVXJ4ZPO4HNPJ3UBBO3BYE5U');
  expect(keypair.publicKey()).toBe('GBOUQQ3PZULFVMY7GQRXEGNABSWVWQ6PRM3TGVDEALSSFUH75NAJW4QU');
});

test('Generate wallet and call faucet', () => {
  const keypair = genKeypair();
  expect.assertions(1);
  return callFaucet(keypair.publicKey())
    .then((res) => expect(res.hash).not.toBe(undefined));
});

test('Check balance of wallet', () => {
  expect.assertions(1);
  return getBalance('GCNGOYIEGGF24TSHNMP5W62T3IURL4B7DLOMQYMPDEN5AGN6BLUQWY4I', true)
    .then((res) => expect(Number(res[0].balance)).toBeGreaterThanOrEqual(10000));
});
