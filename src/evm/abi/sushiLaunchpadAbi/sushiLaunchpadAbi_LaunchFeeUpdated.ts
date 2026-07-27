export const sushiLaunchpadAbi_LaunchFeeUpdated = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newFee',
        type: 'uint256',
      },
    ],
    name: 'LaunchFeeUpdated',
    type: 'event',
  },
] as const
