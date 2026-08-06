export const sushiSwapV4CLPoolManagerAbi_collectProtocolFees = [
  {
    type: 'function',
    name: 'collectProtocolFees',
    inputs: [
      {
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'amountCollected',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const
