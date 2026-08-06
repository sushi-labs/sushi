export const sushiSwapV4CLPoolManagerOwnerAbi_hasPausableRole = [
  {
    type: 'function',
    name: 'hasPausableRole',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'hasPausableRole',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
] as const
