export const sushiSwapV4CLPoolManagerAbi_updateDynamicLPFee = [
  {
    type: 'function',
    name: 'updateDynamicLPFee',
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
        name: 'newDynamicLPFee',
        type: 'uint24',
        internalType: 'uint24',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const
