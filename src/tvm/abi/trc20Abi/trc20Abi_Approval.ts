export const trc20Abi_Approval = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      name: 'owner',
      type: 'address',
    },
    {
      indexed: true,
      name: 'spender',
      type: 'address',
    },
    {
      indexed: false,
      name: 'value',
      type: 'uint256',
    },
  ],
  name: 'Approval',
  type: 'event',
} as const
