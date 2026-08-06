export const sushiSwapV4CLPoolManagerAbi_DynamicLPFeeUpdated = [
  {
    type: 'event',
    name: 'DynamicLPFeeUpdated',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        indexed: true,
        internalType: 'PoolId',
      },
      {
        name: 'dynamicLPFee',
        type: 'uint24',
        indexed: false,
        internalType: 'uint24',
      },
    ],
    anonymous: false,
  },
] as const
