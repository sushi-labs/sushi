export const sushiSwapV4VaultAbi_take = [
  {
    type: 'function',
    name: 'take',
    inputs: [
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const
