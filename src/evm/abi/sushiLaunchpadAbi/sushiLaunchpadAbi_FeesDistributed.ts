export const sushiLaunchpadAbi_FeesDistributed = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
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
        name: 'creator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'protocolRecipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'sushiFeeBps',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteCollected',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenCollected',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteToSushi',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenToSushi',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'quoteToCreator',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenToCreator',
        type: 'uint256',
      },
    ],
    name: 'FeesDistributed',
    type: 'event',
  },
] as const
