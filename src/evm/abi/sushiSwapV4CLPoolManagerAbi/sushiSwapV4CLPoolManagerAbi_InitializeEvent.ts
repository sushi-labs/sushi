export const sushiSwapV4CLPoolManagerAbi_InitializeEvent = [
  {
    type: 'event',
    name: 'Initialize',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        indexed: true,
        internalType: 'PoolId',
      },
      {
        name: 'currency0',
        type: 'address',
        indexed: true,
        internalType: 'Currency',
      },
      {
        name: 'currency1',
        type: 'address',
        indexed: true,
        internalType: 'Currency',
      },
      {
        name: 'hooks',
        type: 'address',
        indexed: false,
        internalType: 'contract IHooks',
      },
      {
        name: 'fee',
        type: 'uint24',
        indexed: false,
        internalType: 'uint24',
      },
      {
        name: 'parameters',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'sqrtPriceX96',
        type: 'uint160',
        indexed: false,
        internalType: 'uint160',
      },
      {
        name: 'tick',
        type: 'int24',
        indexed: false,
        internalType: 'int24',
      },
    ],
    anonymous: false,
  },
] as const
