export const sushiSwapV4CLTickLensAbi_getPopulatedTicksInWord = [
  {
    type: 'function',
    name: 'getPopulatedTicksInWord',
    inputs: [
      {
        name: 'key',
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
        name: 'tickBitmapIndex',
        type: 'int16',
        internalType: 'int16',
      },
    ],
    outputs: [
      {
        name: 'populatedTicks',
        type: 'tuple[]',
        internalType: 'struct ITickLens.PopulatedTick[]',
        components: [
          {
            name: 'tick',
            type: 'int24',
            internalType: 'int24',
          },
          {
            name: 'liquidityNet',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'liquidityGross',
            type: 'uint128',
            internalType: 'uint128',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getPopulatedTicksInWord',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'PoolId',
      },
      {
        name: 'tickBitmapIndex',
        type: 'int16',
        internalType: 'int16',
      },
    ],
    outputs: [
      {
        name: 'populatedTicks',
        type: 'tuple[]',
        internalType: 'struct ITickLens.PopulatedTick[]',
        components: [
          {
            name: 'tick',
            type: 'int24',
            internalType: 'int24',
          },
          {
            name: 'liquidityNet',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'liquidityGross',
            type: 'uint128',
            internalType: 'uint128',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const
