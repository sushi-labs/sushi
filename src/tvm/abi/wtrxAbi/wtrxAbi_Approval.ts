export const wtrxAbi_Approval = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: '~tron/_common',
      type: 'address',
    },
    {
      indexed: true,
      name: 'guy',
      type: 'address',
    },
    {
      indexed: false,
      name: 'sad',
      type: 'uint256',
    },
  ],
  name: 'Approval',
  type: 'event',
} as const
