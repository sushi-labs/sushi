import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'
import { axlWBTC_ADDRESS } from './axlWBTC.js'

export const WBTC_ADDRESS = {
  [EvmChainId.AVALANCHE]: '0x50b7545627a5162f82a992c33b87adc75187b218',
  [EvmChainId.ARBITRUM]: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  [EvmChainId.ETHEREUM]: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  [EvmChainId.POLYGON]: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  [EvmChainId.OPTIMISM]: '0x68f180fcce6836688e9084f035309e29bf0a2095',
  [EvmChainId.ARBITRUM_NOVA]: '0x1d05e4e72cd994cdf976181cfb0707345763564d',
  [EvmChainId.BOBA]: '0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b',
  [EvmChainId.METIS]: '0xa5b55ab1daf0f8e1efc0eb1931a957fd89b918f4',
  [EvmChainId.POLYGON_ZKEVM]: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1',
  [EvmChainId.THUNDERCORE]: '0x18fb0a62f207a2a082ca60aa78f47a1af4985190',
  [EvmChainId.HAQQ]: axlWBTC_ADDRESS[EvmChainId.HAQQ],
  [EvmChainId.ZKSYNC_ERA]: '0xbbeb516fb02a01611cbbe0453fe3c580d7281011',
  [EvmChainId.SCROLL]: '0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1',
  [EvmChainId.CELO]: '0xd629eb00deced2a080b7ec630ef6ac117e614f1b',
  [EvmChainId.ZETACHAIN]: '0x13a0c5930c028511dc02665e7285134b6d11a5f4',
  [EvmChainId.CRONOS]: '0x062e66477faf219f25d27dced647bf57c3107d52',
  [EvmChainId.SKALE_EUROPA]: '0xcb011e86df014a46f4e3ac3f3cbb114a4eb80870',
  [EvmChainId.MANTA]: '0x305e88d809c9dc03179554bfbf85ac05ce8f18d6',
  [EvmChainId.MODE]: '0xcdd475325d6f564d27247d1dddbb0dac6fa0a5cf',
  [EvmChainId.TAIKO]: '0xc4c410459fbaf8f7f86b6cee52b4fa1282ff9704',
  [EvmChainId.ZKLINK]: '0xda4aaed3a53962c83b35697cd138cc6df43af71f',
  [EvmChainId.LINEA]: '0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4',
  [EvmChainId.KATANA]: '0x0913da6da4b42f538b445599b46bb4622342cf52',
} as const

export const WBTC = addressMapToTokenMap(
  {
    decimals: 8,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
  },
  WBTC_ADDRESS,
)
