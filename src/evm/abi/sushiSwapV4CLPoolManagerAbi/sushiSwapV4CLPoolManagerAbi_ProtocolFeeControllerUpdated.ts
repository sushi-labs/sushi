export const sushiSwapV4CLPoolManagerAbi_ProtocolFeeControllerUpdated = [
  {
    type: 'event',
    name: 'ProtocolFeeControllerUpdated',
    inputs: [
      {
        name: 'protocolFeeController',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
] as const
