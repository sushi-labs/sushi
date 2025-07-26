export const multicallAbi_getBlockNumber = {
  inputs: [],
  name: 'getBlockNumber',
  outputs: [
    {
      internalType: 'uint256',
      name: 'blockNumber',
      type: 'uint256',
    },
  ],
  stateMutability: 'view',
  type: 'function',
} as const
