export const sushiSwapV4CLPoolManagerAbi_ProtocolFeeUpdated = [
  {
    type: 'event',
    name: 'ProtocolFeeUpdated',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        indexed: true,
        internalType: 'PoolId',
      },
      {
        name: 'protocolFee',
        type: 'uint24',
        indexed: false,
        internalType: 'uint24',
      },
    ],
    anonymous: false,
  },
] as const
