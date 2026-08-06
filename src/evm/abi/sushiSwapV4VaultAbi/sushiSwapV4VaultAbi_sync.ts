export const sushiSwapV4VaultAbi_sync = [
  {
    type: 'function',
    name: 'sync',
    inputs: [
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const
