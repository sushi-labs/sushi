export const sushiLaunchpadAbi_ProtocolRecipientUpdated = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousRecipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newRecipient',
        type: 'address',
      },
    ],
    name: 'ProtocolRecipientUpdated',
    type: 'event',
  },
] as const
