export const sushiSwapV4CLPositionManagerAbi_subscriber = [
  {
    type: 'function',
    name: 'subscriber',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'subscriber',
        type: 'address',
        internalType: 'contract ICLSubscriber',
      },
    ],
    stateMutability: 'view',
  },
] as const
