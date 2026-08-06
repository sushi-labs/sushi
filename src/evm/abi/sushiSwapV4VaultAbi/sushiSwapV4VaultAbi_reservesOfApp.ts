export const sushiSwapV4VaultAbi_reservesOfApp = [
  {
    type: 'function',
    name: 'reservesOfApp',
    inputs: [
      {
        name: 'app',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
      },
    ],
    outputs: [
      {
        name: 'reserve',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
] as const
