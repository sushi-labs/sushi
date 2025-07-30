export const wtrxAbi_approve = {
  constant: false,
  inputs: [
    {
      name: 'guy',
      type: 'address',
    },
  ],
  name: 'approve',
  outputs: [
    {
      name: '',
      type: 'bool',
    },
  ],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
} as const
