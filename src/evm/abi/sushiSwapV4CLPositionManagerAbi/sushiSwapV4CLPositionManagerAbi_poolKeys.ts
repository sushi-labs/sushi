export const sushiSwapV4CLPositionManagerAbi_poolKeys = [
  {
    type: 'function',
    name: 'poolKeys',
    inputs: [
      {
        name: 'poolId',
        type: 'bytes25',
        internalType: 'bytes25',
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
