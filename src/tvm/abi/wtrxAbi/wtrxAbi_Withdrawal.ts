export const wtrxAbi_Withdrawal = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: '~tron/_common',
      type: 'address',
    },
    {
      indexed: false,
      name: 'sad',
      type: 'uint256',
    },
  ],
  name: 'Withdrawal',
  type: 'event',
} as const
