export const sushiSwapV4CLPoolManagerAbi_setProtocolFeeController = [
  {
    type: 'function',
    name: 'setProtocolFeeController',
    inputs: [
      {
        name: 'controller',
        type: 'address',
        internalType: 'contract IProtocolFeeController',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const
