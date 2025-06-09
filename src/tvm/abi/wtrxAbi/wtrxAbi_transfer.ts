export const wtrxAbi_transfer = {
  constant: false,
  inputs: [
    {
      name: 'dst',
      type: 'address',
    },
    {
      name: 'sad',
      type: 'uint256',
    },
  ],
  name: 'transfer',
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
