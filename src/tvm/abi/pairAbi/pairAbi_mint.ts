export const pairAbi_mint = {
  inputs: [
    {
      internalType: 'address',
      name: 'to',
      type: 'address',
    },
  ],
  name: 'mint',
  outputs: [
    {
      internalType: 'uint256',
      name: 'liquidity',
      type: 'uint256',
    },
  ],
  stateMutability: 'nonpayable',
  type: 'function',
} as const
