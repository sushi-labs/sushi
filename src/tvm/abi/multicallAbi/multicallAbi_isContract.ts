export const multicallAbi_isContract = {
  inputs: [
    {
      internalType: 'address',
      name: 'addr',
      type: 'address',
    },
  ],
  name: 'isContract',
  outputs: [
    {
      internalType: 'bool',
      name: 'result',
      type: 'bool',
    },
  ],
  stateMutability: 'view',
  type: 'function',
} as const
