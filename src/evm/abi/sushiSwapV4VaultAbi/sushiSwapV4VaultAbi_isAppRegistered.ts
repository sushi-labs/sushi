export const sushiSwapV4VaultAbi_isAppRegistered = [
  {
    type: 'function',
    name: 'isAppRegistered',
    inputs: [
      {
        name: 'app',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'isRegistered',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
] as const
