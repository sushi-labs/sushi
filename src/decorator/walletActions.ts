import type { Account, Chain, Client, Transport } from 'viem'

// PLACEHOLDER
export const walletActionSushi = <
  TChain extends Chain = Chain,
  TAccount extends Account | undefined = Account | undefined,
>(
  _client: Client<Transport, TChain, TAccount>,
) => ({})
