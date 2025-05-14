export const sushiswapV4CLPoolManagerAbi_modifyLiquidity = [
  {
    type: 'function',
    name: 'modifyLiquidity',
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
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct ICLPoolManager.ModifyLiquidityParams',
        components: [
          { name: 'tickLower', type: 'int24', internalType: 'int24' },
          { name: 'tickUpper', type: 'int24', internalType: 'int24' },
          { name: 'liquidityDelta', type: 'int256', internalType: 'int256' },
          { name: 'salt', type: 'bytes32', internalType: 'bytes32' },
        ],
      },
      { name: 'hookData', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [
      { name: 'delta', type: 'int256', internalType: 'BalanceDelta' },
      { name: 'feeDelta', type: 'int256', internalType: 'BalanceDelta' },
    ],
    stateMutability: 'nonpayable',
  },
] as const
