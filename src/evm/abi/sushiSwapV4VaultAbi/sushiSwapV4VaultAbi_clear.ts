export const sushiSwapV4VaultAbi_clear = [
  {
    type: 'function',
    name: 'clear',
    inputs: [
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
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
