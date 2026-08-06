export const sushiSwapV4CLPositionManagerAbi_MinimumAmountInsufficient = [
  {
    type: 'error',
    name: 'MinimumAmountInsufficient',
    inputs: [
      {
        name: 'minimumAmount',
        type: 'uint128',
        internalType: 'uint128',
      },
      {
        name: 'amountReceived',
        type: 'uint128',
        internalType: 'uint128',
      },
    ],
  },
] as const
