export const sushiSwapV4CLPositionManagerAbi_ModifyLiquidity = [
  {
    type: 'event',
    name: 'ModifyLiquidity',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'liquidityChange',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
      {
        name: 'feesAccrued',
        type: 'int256',
        indexed: false,
        internalType: 'BalanceDelta',
      },
    ],
    anonymous: false,
  },
] as const
