export const sushiSwapV4CLProtocolFeeControllerAbi_DefaultProtocolFeeForDynamicFeePoolUpdated =
  [
    {
      type: 'event',
      name: 'DefaultProtocolFeeForDynamicFeePoolUpdated',
      inputs: [
        {
          name: 'oldDefaultProtocolFeeForDynamicFeePool',
          type: 'uint24',
          indexed: false,
          internalType: 'uint24',
        },
        {
          name: 'newDefaultProtocolFeeForDynamicFeePool',
          type: 'uint24',
          indexed: false,
          internalType: 'uint24',
        },
      ],
      anonymous: false,
    },
  ] as const
