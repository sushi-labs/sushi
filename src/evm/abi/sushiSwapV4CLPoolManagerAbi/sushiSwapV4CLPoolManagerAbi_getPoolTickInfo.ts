export const sushiSwapV4CLPoolManagerAbi_getPoolTickInfo = [
  {
    type: 'function',
    name: 'getPoolTickInfo',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'PoolId',
      },
      {
        name: 'tick',
        type: 'int24',
        internalType: 'int24',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct Tick.Info',
        components: [
          {
            name: 'liquidityGross',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'liquidityNet',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'feeGrowthOutside0X128',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'feeGrowthOutside1X128',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const
