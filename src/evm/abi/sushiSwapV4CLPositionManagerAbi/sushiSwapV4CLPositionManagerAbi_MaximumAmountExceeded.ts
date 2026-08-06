export const sushiSwapV4CLPositionManagerAbi_MaximumAmountExceeded = [
  {
    type: 'error',
    name: 'MaximumAmountExceeded',
    inputs: [
      {
        name: 'maximumAmount',
        type: 'uint128',
        internalType: 'uint128',
      },
      {
        name: 'amountRequested',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
  },
] as const
