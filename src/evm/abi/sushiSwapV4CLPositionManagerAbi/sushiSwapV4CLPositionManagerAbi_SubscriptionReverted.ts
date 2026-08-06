export const sushiSwapV4CLPositionManagerAbi_SubscriptionReverted = [
  {
    type: 'error',
    name: 'SubscriptionReverted',
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
