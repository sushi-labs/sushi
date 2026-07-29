export const sushiLaunchpadAbi_launchInfo = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'launchInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'quoteToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'pool',
            type: 'address',
          },
          {
            internalType: 'uint64',
            name: 'reserveUnlockAt',
            type: 'uint64',
          },
          {
            internalType: 'bool',
            name: 'reserveWithdrawn',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'reserveAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct ISushiLaunchpad.LaunchInfo',
        name: 'info',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
