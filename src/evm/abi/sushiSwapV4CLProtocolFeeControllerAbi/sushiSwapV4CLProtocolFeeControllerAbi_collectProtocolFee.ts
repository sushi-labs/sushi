export const sushiSwapV4CLProtocolFeeControllerAbi_collectProtocolFee = [
  {
    type: 'function',
    name: 'collectProtocolFee',
    inputs: [
      {
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const
