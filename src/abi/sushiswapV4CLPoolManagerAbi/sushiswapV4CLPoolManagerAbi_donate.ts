export const sushiswapV4CLPoolManagerAbi_donate = [
  {
    type: 'function',
    name: 'donate',
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
      { name: 'amount0', type: 'uint256', internalType: 'uint256' },
      { name: 'amount1', type: 'uint256', internalType: 'uint256' },
      { name: 'hookData', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [{ name: 'delta', type: 'int256', internalType: 'BalanceDelta' }],
    stateMutability: 'nonpayable',
  },
] as const
