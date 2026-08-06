export const sushiSwapV4CLProtocolFeeControllerAbi_ProtocolFeeCollected = [
  {
    type: 'event',
    name: 'ProtocolFeeCollected',
    inputs: [
      {
        name: 'currency',
        type: 'address',
        indexed: true,
        internalType: 'Currency',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
] as const
