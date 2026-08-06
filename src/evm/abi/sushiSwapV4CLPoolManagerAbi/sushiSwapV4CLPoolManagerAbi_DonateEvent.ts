export const sushiSwapV4CLPoolManagerAbi_DonateEvent = [
  {
    type: 'event',
    name: 'Donate',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        indexed: true,
        internalType: 'PoolId',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount0',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'amount1',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'tick',
        type: 'int24',
        indexed: false,
        internalType: 'int24',
      },
    ],
    anonymous: false,
  },
] as const
