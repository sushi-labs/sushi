export const sushiLaunchpadAbi_TokenLaunched = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'quoteToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'decimals',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalSupply',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'reserveBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reserveAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'reserveUnlockAt',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'initialSushiFeeBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionCount',
        type: 'uint256',
      },
    ],
    name: 'TokenLaunched',
    type: 'event',
  },
] as const
