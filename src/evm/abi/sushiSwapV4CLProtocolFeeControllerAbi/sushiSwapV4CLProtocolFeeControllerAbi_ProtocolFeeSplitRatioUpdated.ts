export const sushiSwapV4CLProtocolFeeControllerAbi_ProtocolFeeSplitRatioUpdated =
  [
    {
      type: 'event',
      name: 'ProtocolFeeSplitRatioUpdated',
      inputs: [
        {
          name: 'oldProtocolFeeSplitRatio',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'newProtocolFeeSplitRatio',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
  ] as const
