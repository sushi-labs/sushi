export const sushiLaunchpadAbi_launch = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
        ],
        internalType: 'struct ISushiLaunchpad.TokenConfig',
        name: 'tokenConfig',
        type: 'tuple',
      },
      {
        internalType: 'address',
        name: 'quoteToken',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'int24',
            name: 'startTick',
            type: 'int24',
          },
          {
            internalType: 'int24',
            name: 'endTick',
            type: 'int24',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct ISushiLaunchpad.SaleRange[]',
        name: 'ranges',
        type: 'tuple[]',
      },
      {
        internalType: 'uint64',
        name: 'deadline',
        type: 'uint64',
      },
    ],
    name: 'launch',
    outputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'positionIds',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const
