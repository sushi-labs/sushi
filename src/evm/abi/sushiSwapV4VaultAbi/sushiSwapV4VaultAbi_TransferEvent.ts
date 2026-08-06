export const sushiSwapV4VaultAbi_TransferEvent = [
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        name: 'caller',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'from',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'currency',
        type: 'address',
        indexed: true,
        internalType: 'Currency',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
] as const
