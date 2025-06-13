export const wtrxAbi_TransferEvent = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: '~tron/_common',
      type: 'address',
    },
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
  name: 'Transfer',
  type: 'event',
} as const
