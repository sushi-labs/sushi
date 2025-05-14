export const sushiswapV4CLPositionManagerAbi_initializePool = [
  {
    type: 'function',
    name: 'initializePool',
    inputs: [
      {
        name: 'key',
        type: 'tuple',
        internalType: 'struct PoolKey',
        components: [
          { name: 'currency0', type: 'address', internalType: 'Currency' },
          { name: 'currency1', type: 'address', internalType: 'Currency' },
          { name: 'hooks', type: 'address', internalType: 'contract IHooks' },
          {
            name: 'poolManager',
            type: 'address',
            internalType: 'contract IPoolManager',
          },
          { name: 'fee', type: 'uint24', internalType: 'uint24' },
          { name: 'parameters', type: 'bytes32', internalType: 'bytes32' },
        ],
      },
      { name: 'sqrtPriceX96', type: 'uint160', internalType: 'uint160' },
    ],
    outputs: [{ name: '', type: 'int24', internalType: 'int24' }],
    stateMutability: 'payable',
  },
] as const
