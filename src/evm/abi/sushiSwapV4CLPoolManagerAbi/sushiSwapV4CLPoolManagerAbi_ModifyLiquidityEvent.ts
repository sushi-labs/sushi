export const sushiSwapV4CLPoolManagerAbi_ModifyLiquidityEvent = [
  {
    type: 'event',
    name: 'ModifyLiquidity',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        indexed: true,
        internalType: 'PoolId',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'tickLower',
        type: 'int24',
        indexed: false,
        internalType: 'int24',
      },
      {
        name: 'tickUpper',
        type: 'int24',
        indexed: false,
        internalType: 'int24',
      },
      {
        name: 'liquidityDelta',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
      {
        name: 'salt',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
] as const
