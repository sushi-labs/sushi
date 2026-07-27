export const sushiLaunchpadAbi_setSushiFeeBps = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: 'newSushiFeeBps',
        type: 'uint16',
      },
    ],
    name: 'setSushiFeeBps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
