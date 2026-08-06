export const sushiSwapV4VaultAbi_settleFor = [
  {
    type: 'function',
    name: 'settleFor',
    inputs: [
      {
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'payable',
  },
] as const
