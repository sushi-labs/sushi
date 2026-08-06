export const sushiSwapV4CLPoolManagerAbi_getSlot0 = [
  {
    type: 'function',
    name: 'getSlot0',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'PoolId',
      },
    ],
    outputs: [
      {
        name: 'sqrtPriceX96',
        type: 'uint160',
        internalType: 'uint160',
      },
      {
        name: 'tick',
        type: 'int24',
        internalType: 'int24',
      },
      {
        name: 'protocolFee',
        type: 'uint24',
        internalType: 'uint24',
      },
      {
        name: 'lpFee',
        type: 'uint24',
        internalType: 'uint24',
      },
    ],
    stateMutability: 'view',
  },
] as const
