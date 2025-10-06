export const sushiSwapV3PositionHelperAbi_getPosition = [
  {
    name: 'getPosition',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { name: 'positionManager', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    outputs: [
      {
        components: [
          { name: 'tokenId', type: 'uint256' },
          { name: 'nonce', type: 'uint96' },
          { name: 'operator', type: 'address' },
          { name: 'token0', type: 'address' },
          { name: 'token1', type: 'address' },
          { name: 'fee', type: 'uint24' },
          { name: 'tickLower', type: 'int24' },
          { name: 'tickUpper', type: 'int24' },
          { name: 'liquidity', type: 'uint128' },
          { name: 'feeGrowthInside0LastX128', type: 'uint256' },
          { name: 'feeGrowthInside1LastX128', type: 'uint256' },
          { name: 'tokensOwed0', type: 'uint128' },
          { name: 'tokensOwed1', type: 'uint128' },
        ],
        type: 'tuple',
      },
    ],
  },
] as const
