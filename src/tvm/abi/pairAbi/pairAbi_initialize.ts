export const pairAbi_initialize = {
  inputs: [
    {
      internalType: 'address',
      name: '_token0',
      type: 'address',
    },
    {
      internalType: 'address',
      name: '_token1',
      type: 'address',
    },
  ],
  name: 'initialize',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
} as const
