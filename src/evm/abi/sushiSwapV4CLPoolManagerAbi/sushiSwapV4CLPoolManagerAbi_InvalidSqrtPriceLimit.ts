export const sushiSwapV4CLPoolManagerAbi_InvalidSqrtPriceLimit = [
  {
    type: 'error',
    name: 'InvalidSqrtPriceLimit',
    inputs: [
      {
        name: 'sqrtPriceCurrentX96',
        type: 'uint160',
        internalType: 'uint160',
      },
      {
        name: 'sqrtPriceLimitX96',
        type: 'uint160',
        internalType: 'uint160',
      },
    ],
  },
] as const
