export const wtrxAbi_DepositEvent = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: 'dst',
      type: 'address',
    },
    {
      indexed: false,
      name: 'sad',
      type: 'uint256',
    },
  ],
  name: 'Deposit',
  type: 'event',
} as const
