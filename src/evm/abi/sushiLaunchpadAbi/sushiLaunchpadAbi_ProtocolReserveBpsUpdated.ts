export const sushiLaunchpadAbi_ProtocolReserveBpsUpdated = [
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
    name: 'ProtocolReserveBpsUpdated',
    type: 'event',
  },
] as const
