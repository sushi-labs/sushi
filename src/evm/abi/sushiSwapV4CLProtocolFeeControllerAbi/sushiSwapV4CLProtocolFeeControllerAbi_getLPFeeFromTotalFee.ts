export const sushiSwapV4CLProtocolFeeControllerAbi_getLPFeeFromTotalFee = [
  {
    type: 'function',
    name: 'getLPFeeFromTotalFee',
    inputs: [
      {
        name: 'totalFee',
        type: 'uint24',
        internalType: 'uint24',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint24',
        internalType: 'uint24',
      },
    ],
    stateMutability: 'view',
  },
] as const
