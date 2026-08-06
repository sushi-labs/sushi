export const sushiSwapV4CLQuoterAbi_quoteExactInputSingleList = [
  {
    type: 'function',
    name: 'quoteExactInputSingleList',
    inputs: [
      {
        name: 'params',
        type: 'tuple[]',
        internalType: 'struct IQuoter.QuoteExactSingleParams[]',
        components: [
          {
            name: 'poolKey',
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
            name: 'zeroForOne',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'exactAmount',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'hookData',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    outputs: [
      {
        name: 'amountIn',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'gasEstimate',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const
