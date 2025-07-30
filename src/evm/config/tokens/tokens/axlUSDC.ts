import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'

export const axlUSDC_ADDRESS = {
  [EvmChainId.ARBITRUM]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.AVALANCHE]: '0xfab550568c688d5d8a52c7d794cb93edc26ec0ec',
  [EvmChainId.BASE]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.BSC]: '0x4268b8f0b87b6eae5d897996e6b845ddbd99adf3',
  [EvmChainId.CELO]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.ETHEREUM]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [EvmChainId.FANTOM]: '0x1b6382dbdea11d97f24495c9a90b7c88469134a4',
  [EvmChainId.FILECOIN]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.KAVA]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.LINEA]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.OPTIMISM]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.POLYGON]: '0x750e4c4984a9e0f12978ea6742bc1c5d248f40ed',
  [EvmChainId.SCROLL]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
  [EvmChainId.HAQQ]: '0x80b5a32e4f032b2a058b4f29ec95eefeeb87adcd',
  [EvmChainId.BLAST]: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
} as const

export const axlUSDC = addressMapToTokenMap(
  {
    decimals: 6,
    symbol: 'axlUSDC',
    name: 'Axelar Wrapped USDC',
  },
  axlUSDC_ADDRESS,
)
