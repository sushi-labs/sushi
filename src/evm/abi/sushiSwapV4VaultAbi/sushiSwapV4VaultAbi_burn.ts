export const sushiSwapV4VaultAbi_burn = [
  {
    type: 'function',
    name: 'burn',
    inputs: [
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
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
