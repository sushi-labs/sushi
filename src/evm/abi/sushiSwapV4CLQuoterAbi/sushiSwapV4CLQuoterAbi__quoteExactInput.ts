export const sushiSwapV4CLQuoterAbi__quoteExactInput = [
  {
    type: 'function',
    name: '_quoteExactInput',
    inputs: [
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct IQuoter.QuoteExactParams',
        components: [
          {
            name: 'exactCurrency',
            type: 'address',
            internalType: 'Currency',
          },
          {
            name: 'path',
            type: 'tuple[]',
            internalType: 'struct PathKey[]',
            components: [
              {
                name: 'intermediateCurrency',
                type: 'address',
                internalType: 'Currency',
              },
              {
                name: 'fee',
                type: 'uint24',
                internalType: 'uint24',
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
                name: 'hookData',
                type: 'bytes',
                internalType: 'bytes',
              },
              {
                name: 'parameters',
                type: 'bytes32',
                internalType: 'bytes32',
              },
            ],
          },
          {
            name: 'exactAmount',
            type: 'uint128',
            internalType: 'uint128',
          },
        ],
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const
