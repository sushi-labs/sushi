export const wtrxAbi_balanceOf = {
  constant: true,
  inputs: [
    {
      name: 'guy',
      type: 'address',
    },
  ],
  name: 'balanceOf',
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
