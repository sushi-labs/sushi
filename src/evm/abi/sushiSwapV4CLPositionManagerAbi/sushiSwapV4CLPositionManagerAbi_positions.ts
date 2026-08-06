export const sushiSwapV4CLPositionManagerAbi_positions = [
  {
    type: 'function',
    name: 'positions',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'poolKey',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          {
            name: 'currency0',
            type: 'address',
            internalType: 'Currency',
          },
          {
            name: 'currency1',
            type: 'address',
            internalType: 'Currency',
          },
          {
            name: 'hooks',
            type: 'address',
            internalType: 'contract IHooks',
          },
          {
            name: 'poolManager',
            type: 'address',
            internalType: 'contract IPoolManager',
          },
          {
            name: 'fee',
            type: 'uint24',
            internalType: 'uint24',
          },
          {
            name: 'parameters',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
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
      {
        name: '_subscriber',
        type: 'address',
        internalType: 'contract ICLSubscriber',
      },
    ],
    stateMutability: 'view',
  },
] as const
