export const pairAbi_burn = {
  inputs: [
    {
      internalType: 'address',
      name: 'to',
      type: 'address',
    },
  ],
  name: 'burn',
  outputs: [
    {
      internalType: 'uint256',
      name: 'amount0',
      type: 'uint256',
    },
    {
      internalType: 'uint256',
      name: 'amount1',
      type: 'uint256',
    },
  ],
  stateMutability: 'nonpayable',
  type: 'function',
} as const
