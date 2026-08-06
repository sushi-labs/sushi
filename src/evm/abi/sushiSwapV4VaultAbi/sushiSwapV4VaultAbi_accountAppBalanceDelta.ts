export const sushiSwapV4VaultAbi_accountAppBalanceDelta = [
  {
    type: 'function',
    name: 'accountAppBalanceDelta',
    inputs: [
      {
        name: 'currency0',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'currency1',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'delta',
        type: 'int256',
        internalType: 'BalanceDelta',
      },
      {
        name: 'settler',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'hookDelta',
        type: 'int256',
        internalType: 'BalanceDelta',
      },
      {
        name: 'hook',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'accountAppBalanceDelta',
    inputs: [
      {
        name: 'currency',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'delta',
        type: 'int128',
        internalType: 'int128',
      },
      {
        name: 'settler',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'accountAppBalanceDelta',
    inputs: [
      {
        name: 'currency0',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'currency1',
        type: 'address',
        internalType: 'Currency',
      },
      {
        name: 'delta',
        type: 'int256',
        internalType: 'BalanceDelta',
      },
      {
        name: 'settler',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const
