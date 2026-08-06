export const sushiSwapV4CLPositionManagerAbi_getPositionLiquidity = [
  {
    type: 'function',
    name: 'getPositionLiquidity',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'liquidity',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
    stateMutability: 'view',
  },
] as const
