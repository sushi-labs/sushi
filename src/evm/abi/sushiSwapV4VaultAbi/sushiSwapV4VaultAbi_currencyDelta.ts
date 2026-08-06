export const sushiSwapV4VaultAbi_currencyDelta = [
  {
    type: 'function',
    name: 'currencyDelta',
    inputs: [
      {
        name: 'settler',
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
        name: '',
        type: 'int256',
        internalType: 'int256',
      },
    ],
    stateMutability: 'view',
  },
] as const
