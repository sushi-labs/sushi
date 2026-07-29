export const sushiLaunchpadAbi_SushiFeeBpsUpdated = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'previousSushiFeeBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'newSushiFeeBps',
        type: 'uint16',
      },
    ],
    name: 'SushiFeeBpsUpdated',
    type: 'event',
  },
] as const
