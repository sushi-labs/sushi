export const sushiSwapV4CLPoolManagerOwnerAbi_setProtocolFeeController = [
  {
    type: 'function',
    name: 'setProtocolFeeController',
    inputs: [
      {
        name: 'protocolFeeController',
        type: 'address',
        internalType: 'contract IProtocolFeeController',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const
