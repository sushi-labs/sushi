import evmChains from './index.js'

export const evmNatives = Object.fromEntries(
  Object.entries(evmChains).map(([id, chain]) => [id, chain.nativeCurrency]),
)
