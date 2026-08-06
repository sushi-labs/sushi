export const sushiSwapV4CLPoolManagerAbi_poolIdToPoolKey = [
  {
    type: 'function',
    name: 'poolIdToPoolKey',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'PoolId',
      },
    ],
    outputs: [
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
    stateMutability: 'view',
  },
] as const
