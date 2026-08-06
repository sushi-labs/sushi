export const sushiSwapV4CLPositionDescriptorAbi_tokenURI = [
  {
    type: 'function',
    name: 'tokenURI',
    inputs: [
      {
        name: 'positionManager',
        type: 'address',
        internalType: 'contract ICLPositionManager',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
] as const
