export const wtrxAbi_allowance = {
  constant: true,
  inputs: [
    {
      name: '~tron/_common',
      type: 'address',
    },
    {
      name: 'guy',
      type: 'address',
    },
  ],
  name: 'allowance',
  outputs: [
    {
      name: '',
      type: 'uint256',
    },
  ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
} as const
