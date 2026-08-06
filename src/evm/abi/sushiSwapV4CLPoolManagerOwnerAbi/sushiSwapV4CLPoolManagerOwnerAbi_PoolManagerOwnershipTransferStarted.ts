export const sushiSwapV4CLPoolManagerOwnerAbi_PoolManagerOwnershipTransferStarted =
  [
    {
      type: 'event',
      name: 'PoolManagerOwnershipTransferStarted',
      inputs: [
        {
          name: 'previousOwner',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'newOwner',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
  ] as const
