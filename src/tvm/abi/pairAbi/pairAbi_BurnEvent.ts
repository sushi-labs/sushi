export const pairAbi_BurnEvent = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      internalType: 'address',
      name: 'sender',
      type: 'address',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'amount0',
      type: 'uint256',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'amount1',
      type: 'uint256',
    },
    {
      indexed: true,
      internalType: 'address',
      name: 'to',
      type: 'address',
    },
  ],
  name: 'Burn',
  type: 'event',
} as const
