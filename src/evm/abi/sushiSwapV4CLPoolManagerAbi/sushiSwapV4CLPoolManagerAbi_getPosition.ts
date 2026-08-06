export const sushiSwapV4CLPoolManagerAbi_getPosition = [
  {
    type: 'function',
    name: 'getPosition',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'PoolId',
      },
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tickLower',
        type: 'int24',
        internalType: 'int24',
      },
      {
        name: 'tickUpper',
        type: 'int24',
        internalType: 'int24',
      },
      {
        name: 'salt',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: 'position',
        type: 'tuple',
        internalType: 'struct CLPosition.Info',
        components: [
          {
            name: 'liquidity',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'feeGrowthInside0LastX128',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'feeGrowthInside1LastX128',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const
