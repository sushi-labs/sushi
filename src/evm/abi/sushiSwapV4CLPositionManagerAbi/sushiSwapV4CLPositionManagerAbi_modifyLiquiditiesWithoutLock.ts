export const sushiSwapV4CLPositionManagerAbi_modifyLiquiditiesWithoutLock = [
  {
    type: 'function',
    name: 'modifyLiquiditiesWithoutLock',
    inputs: [
      {
        name: 'actions',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'params',
        type: 'bytes[]',
        internalType: 'bytes[]',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
] as const
