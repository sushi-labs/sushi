export const sushiswapV4LBPoolManagerAbi_swap = [
  {
    type: 'function',
    name: 'swap',
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
      { name: 'swapForY', type: 'bool', internalType: 'bool' },
      { name: 'amountSpecified', type: 'int128', internalType: 'int128' },
      { name: 'hookData', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [{ name: 'delta', type: 'int256', internalType: 'BalanceDelta' }],
    stateMutability: 'nonpayable',
  },
] as const
