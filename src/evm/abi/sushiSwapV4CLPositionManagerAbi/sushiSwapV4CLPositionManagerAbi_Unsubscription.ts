export const sushiSwapV4CLPositionManagerAbi_Unsubscription = [
  {
    type: 'event',
    name: 'Unsubscription',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'subscriber',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
] as const
