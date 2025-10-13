import { EvmChainId } from '../../../chain/index.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'
import { axlDAI_ADDRESS } from './axlDAI.js'

export const DAI_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0x6b175474e89094c44da98b954eedeac495271d0f',
  [EvmChainId.POLYGON]: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  [EvmChainId.BSC]: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  [EvmChainId.HARMONY]: '0xef977d2f931c1978db5f6747666fa1eacb0d0339',
  [EvmChainId.GNOSIS]: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  [EvmChainId.ARBITRUM]: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  [EvmChainId.AVALANCHE]: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
  [EvmChainId.CELO]: '0x90ca507a5d4458a4c6c6249d186b6dcb02a5bccd',
  [EvmChainId.OPTIMISM]: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  [EvmChainId.METIS]: '0x4c078361fc9bbb78df910800a991c7c3dd2f6ce0',
  [EvmChainId.ARBITRUM_NOVA]: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
  [EvmChainId.BOBA]: '0xf74195bb8a5cf652411867c5c2c5b8c2a402be35',
  [EvmChainId.POLYGON_ZKEVM]: '0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4',
  [EvmChainId.HAQQ]: axlDAI_ADDRESS[EvmChainId.HAQQ],
  [EvmChainId.LINEA]: axlDAI_ADDRESS[EvmChainId.LINEA],
  [EvmChainId.BASE]: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
  [EvmChainId.SCROLL]: '0xca77eb3fefe3725dc33bccb54edefc3d9f764f97',
  [EvmChainId.FILECOIN]: axlDAI_ADDRESS[EvmChainId.FILECOIN],
  [EvmChainId.SKALE_EUROPA]: '0xd05c4be5f3be302d376518c9492ec0147fa5a718',
  [EvmChainId.ROOTSTOCK]: '0x6b1a73d547f4009a26b8485b63d7015d248ad406',
  [EvmChainId.TAIKO]: '0x7d02a3e0180451b17e5d7f29ef78d06f8117106c',
  [EvmChainId.ZKLINK]: '0xf573fa04a73d5ac442f3dea8741317feaa3cdeab',
  [EvmChainId.FUSE]: '0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba'
} as const

export const DAI = addressMapToTokenMap(
  {
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  DAI_ADDRESS,
)
