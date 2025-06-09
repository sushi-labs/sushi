export const multicallAbi_getCurrentBlockCoinbase = {
  inputs: [],
  name: 'getCurrentBlockCoinbase',
  outputs: [
    {
      internalType: 'address',
      name: 'coinbase',
      type: 'address',
    },
  ],
  stateMutability: 'view',
  type: 'function',
} as const
