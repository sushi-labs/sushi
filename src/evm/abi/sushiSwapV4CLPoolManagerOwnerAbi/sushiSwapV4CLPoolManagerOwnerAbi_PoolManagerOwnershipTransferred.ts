export const sushiSwapV4CLPoolManagerOwnerAbi_PoolManagerOwnershipTransferred =
  [
    {
      type: 'event',
      name: 'PoolManagerOwnershipTransferred',
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
