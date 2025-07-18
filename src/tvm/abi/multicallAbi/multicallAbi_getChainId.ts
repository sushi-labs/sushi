export const multicallAbi_getChainId = {
  inputs: [],
  name: 'getChainId',
  outputs: [
    {
      internalType: 'uint256',
      name: 'chainid',
      type: 'uint256',
    },
  ],
  stateMutability: 'view',
  type: 'function',
} as const
