export const sushiSwapV4CLPositionManagerAbi_ModifyLiquidityNotificationReverted =
  [
    {
      type: 'error',
      name: 'ModifyLiquidityNotificationReverted',
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
