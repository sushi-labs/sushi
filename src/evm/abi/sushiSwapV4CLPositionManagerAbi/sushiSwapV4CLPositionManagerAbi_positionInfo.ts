export const sushiSwapV4CLPositionManagerAbi_positionInfo = [
  {
    type: 'function',
    name: 'positionInfo',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'info',
        type: 'uint256',
        internalType: 'CLPositionInfo',
      },
    ],
    stateMutability: 'view',
  },
] as const
