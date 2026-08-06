export const sushiSwapV4CLPoolManagerAbi_getFeeGrowthGlobals = [
  {
    type: 'function',
    name: 'getFeeGrowthGlobals',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'PoolId',
      },
    ],
    outputs: [
      {
        name: 'feeGrowthGlobal0x128',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'feeGrowthGlobal1x128',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
] as const
