export const sushiSwapV4CLPositionManagerAbi_BurnNotificationReverted = [
  {
    type: 'error',
    name: 'BurnNotificationReverted',
    inputs: [
      {
        name: 'subscriber',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'reason',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
  },
] as const
