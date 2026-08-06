export const sushiSwapV4CLPoolManagerAbi_protocolFeesAccrued = [
  {
    type: 'function',
    name: 'protocolFeesAccrued',
    inputs: [
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
      },
    ],
    outputs: [
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
] as const
