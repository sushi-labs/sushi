export const sushiLaunchpadAbi_DefaultSushiFeeBpsUpdated = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'previousBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'newBps',
        type: 'uint16',
      },
    ],
    name: 'DefaultSushiFeeBpsUpdated',
    type: 'event',
  },
] as const
