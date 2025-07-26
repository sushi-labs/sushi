export const wtrxAbi_transferFrom = {
  constant: false,
  inputs: [
    {
      name: '~tron/_common',
      type: 'address',
    },
    {
      name: 'dst',
      type: 'address',
    },
    {
      name: 'sad',
      type: 'uint256',
    },
  ],
  name: 'transferFrom',
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
