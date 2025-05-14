export const sushiswapV4LBPositionManagerAbi_modifyLiquidities = [
  {
    type: 'function',
    name: 'modifyLiquidities',
    inputs: [
      { name: 'payload', type: 'bytes', internalType: 'bytes' },
      { name: 'deadline', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
] as const
