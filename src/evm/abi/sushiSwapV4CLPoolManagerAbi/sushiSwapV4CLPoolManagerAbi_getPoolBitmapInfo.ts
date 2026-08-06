export const sushiSwapV4CLPoolManagerAbi_getPoolBitmapInfo = [
  {
    type: 'function',
    name: 'getPoolBitmapInfo',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'PoolId',
      },
      {
        name: 'word',
        type: 'int16',
        internalType: 'int16',
      },
    ],
    outputs: [
      {
        name: 'tickBitmap',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
] as const
