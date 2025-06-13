export const multicallAbi_getTokenBalance = {
  inputs: [
    {
      internalType: 'address',
      name: 'accountAddress',
      type: 'address',
    },
    {
      internalType: 'trcToken',
      name: 'id',
      type: 'trcToken',
    },
  ],
  name: 'getTokenBalance',
  outputs: [
    {
      internalType: 'uint256',
      name: 'balance',
      type: 'uint256',
    },
  ],
  stateMutability: 'view',
  type: 'function',
} as const
