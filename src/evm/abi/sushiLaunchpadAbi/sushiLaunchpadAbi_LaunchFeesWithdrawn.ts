export const sushiLaunchpadAbi_LaunchFeesWithdrawn = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'LaunchFeesWithdrawn',
    type: 'event',
  },
] as const
