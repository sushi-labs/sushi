export const sushiLaunchpadAbi_distributeFees = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'distributeFees',
    outputs: [
      {
        internalType: 'uint256',
        name: 'quoteCollected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenCollected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quoteToSushi',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenToSushi',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
