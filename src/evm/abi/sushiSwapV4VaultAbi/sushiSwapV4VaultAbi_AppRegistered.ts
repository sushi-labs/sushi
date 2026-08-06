export const sushiSwapV4VaultAbi_AppRegistered = [
  {
    type: 'event',
    name: 'AppRegistered',
    inputs: [
      {
        name: 'app',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
] as const
