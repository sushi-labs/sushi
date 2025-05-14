export const sushiswapV4LBPoolManagerAbi_mint = [
  {
    type: 'function',
    name: 'mint',
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
        internalType: 'struct IBinPoolManager.MintParams',
        components: [
          {
            name: 'liquidityConfigs',
            type: 'bytes32[]',
            internalType: 'bytes32[]',
          },
          { name: 'amountIn', type: 'bytes32', internalType: 'bytes32' },
          { name: 'salt', type: 'bytes32', internalType: 'bytes32' },
        ],
      },
      { name: 'hookData', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [
      { name: 'delta', type: 'int256', internalType: 'BalanceDelta' },
      {
        name: 'mintArray',
        type: 'tuple',
        internalType: 'struct BinPool.MintArrays',
        components: [
          { name: 'ids', type: 'uint256[]', internalType: 'uint256[]' },
          { name: 'amounts', type: 'bytes32[]', internalType: 'bytes32[]' },
          {
            name: 'liquidityMinted',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const
