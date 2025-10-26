import type { Address } from 'viem'
import { EvmChainId } from '../../chain/index.js'

export const SUSHISWAP_V2_SUPPORTED_CHAIN_IDS = [
  EvmChainId.ARBITRUM,
  EvmChainId.ARBITRUM_NOVA,
  EvmChainId.AVALANCHE,
  EvmChainId.BASE,
  EvmChainId.BOBA,
  EvmChainId.BOBA_BNB,
  EvmChainId.BSC,
  EvmChainId.CELO,
  EvmChainId.ETHEREUM,
  EvmChainId.FANTOM,
  EvmChainId.GNOSIS,
  EvmChainId.HAQQ,
  EvmChainId.POLYGON,
  EvmChainId.SCROLL,
  EvmChainId.KAVA,
  EvmChainId.METIS,
  EvmChainId.BTTC,
  EvmChainId.FILECOIN,
  EvmChainId.ZETACHAIN,
  EvmChainId.CORE,
  EvmChainId.THUNDERCORE,
  EvmChainId.HAQQ,
  EvmChainId.OPTIMISM,
  EvmChainId.LINEA,
  EvmChainId.BLAST,
  EvmChainId.SKALE_EUROPA,
  EvmChainId.ROOTSTOCK,
  EvmChainId.SONIC,
  EvmChainId.HEMI,
  EvmChainId.KATANA,

  // Eth testnets
  EvmChainId.SEPOLIA,
  EvmChainId.TATARA,
  EvmChainId.BOKUTO,
] as const

export const SushiSwapV2ChainIds = SUSHISWAP_V2_SUPPORTED_CHAIN_IDS

export type SushiSwapV2ChainId =
  (typeof SUSHISWAP_V2_SUPPORTED_CHAIN_IDS)[number]

export const isSushiSwapV2ChainId = (
  chainId: number,
): chainId is SushiSwapV2ChainId =>
  SUSHISWAP_V2_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapV2ChainId)

export const DEPRECATED_SUSHISWAP_V2_SUPPORTED_CHAIN_IDS = [
  EvmChainId.POLYGON_ZKEVM,
  EvmChainId.HARMONY,
  EvmChainId.FUSE,
] as const

export const DeprecatedSushiSwapV2ChainIds =
  DEPRECATED_SUSHISWAP_V2_SUPPORTED_CHAIN_IDS

export type DeprecatedSushiSwapV2ChainId =
  (typeof DEPRECATED_SUSHISWAP_V2_SUPPORTED_CHAIN_IDS)[number]

export const isDeprecatedSushiSwapV2ChainId = (
  chainId: number,
): chainId is DeprecatedSushiSwapV2ChainId =>
  DEPRECATED_SUSHISWAP_V2_SUPPORTED_CHAIN_IDS.includes(
    chainId as DeprecatedSushiSwapV2ChainId,
  )

export const SUSHISWAP_V2_INIT_CODE_HASH: Record<
  SushiSwapV2ChainId | DeprecatedSushiSwapV2ChainId,
  Address
> = {
  [EvmChainId.ETHEREUM]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.FANTOM]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.POLYGON]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.GNOSIS]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.BSC]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.ARBITRUM]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.AVALANCHE]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.HARMONY]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.CELO]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.ARBITRUM_NOVA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.BOBA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.BOBA_BNB]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.BASE]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.SCROLL]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.KAVA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.METIS]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.BTTC]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.FILECOIN]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.ZETACHAIN]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.HAQQ]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.CORE]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.THUNDERCORE]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.OPTIMISM]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.LINEA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.POLYGON_ZKEVM]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.BLAST]:
    '0x0871b2842bc5ad89183710ec5587b7e7e285f1212e8960a4941335bab95cf6af',
  [EvmChainId.SKALE_EUROPA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.ROOTSTOCK]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.SONIC]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.HEMI]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.KATANA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.FUSE]:
    '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5',
  // testnets
  [EvmChainId.SEPOLIA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.TATARA]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [EvmChainId.BOKUTO]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
}

export const SUSHISWAP_V2_FACTORY_ADDRESS: Record<
  SushiSwapV2ChainId | DeprecatedSushiSwapV2ChainId,
  Address
> = {
  [EvmChainId.ETHEREUM]: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
  [EvmChainId.FANTOM]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.POLYGON]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.GNOSIS]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.BSC]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.ARBITRUM]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.AVALANCHE]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.HAQQ]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.HARMONY]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.CELO]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.ARBITRUM_NOVA]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.BOBA]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.BOBA_BNB]: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
  [EvmChainId.BASE]: '0x71524b4f93c58fcbf659783284e38825f0622859',
  [EvmChainId.SCROLL]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.KAVA]: '0xd408a20f1213286fb3158a2bfbf5bffaca8bf269',
  [EvmChainId.METIS]: '0x580ed43f3bba06555785c81c2957efcca71f7483',
  [EvmChainId.BTTC]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.FILECOIN]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.ZETACHAIN]: '0x33d91116e0370970444b0281ab117e161febfcdd',
  [EvmChainId.CORE]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.THUNDERCORE]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.OPTIMISM]: '0xfbc12984689e5f15626bad03ad60160fe98b303c',
  [EvmChainId.LINEA]: '0xfbc12984689e5f15626bad03ad60160fe98b303c',
  [EvmChainId.POLYGON_ZKEVM]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.BLAST]: '0x42fa929fc636e657ac568c0b5cf38e203b67ac2b',
  [EvmChainId.SKALE_EUROPA]: '0x1aaf6eb4f85f8775400c1b10e6bbbd98b2ff8483',
  [EvmChainId.ROOTSTOCK]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.SONIC]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.HEMI]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.KATANA]: '0x72d111b4d6f31b38919ae39779f570b747d6acd9',
  [EvmChainId.FUSE]: '0x43ea90e2b786728520e4f930d2a71a477bf2737c',
  // testnets
  [EvmChainId.SEPOLIA]: '0x734583f62bb6ace3c9ba9bd5a53143ca2ce8c55a',
  [EvmChainId.TATARA]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.BOKUTO]: '0x0389879e0156033202c44bf784ac18fc02edee4f',
}

export const SUSHISWAP_V2_ROUTER_ADDRESS: Record<
  SushiSwapV2ChainId | DeprecatedSushiSwapV2ChainId,
  Address
> = {
  [EvmChainId.ETHEREUM]: '0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f',
  [EvmChainId.FANTOM]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.POLYGON]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.GNOSIS]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.BSC]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.ARBITRUM]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.AVALANCHE]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.HARMONY]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.CELO]: '0xb45e53277a7e0f1d35f2a77160e91e25507f1763',
  [EvmChainId.ARBITRUM_NOVA]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.BOBA]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.BOBA_BNB]: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
  [EvmChainId.BASE]: '0x6bded42c6da8fbf0d2ba55b2fa120c5e0c8d7891',
  [EvmChainId.SCROLL]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.KAVA]: '0x1719def1bf8422a777f2442bce704ac4fb20c7f0',
  [EvmChainId.METIS]: '0xbf3b71decbcefabb3210b9d8f18ec22e0556f5f0',
  [EvmChainId.BTTC]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.FILECOIN]: '0x46b3fdf7b5cde91ac049936bf0bdb12c5d22202e',
  [EvmChainId.HAQQ]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.ZETACHAIN]: '0x1f2fcf1d036b375b384012e61d3aa33f8c256bbe',
  [EvmChainId.CORE]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.THUNDERCORE]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.OPTIMISM]: '0x2abf469074dc0b54d793850807e6eb5faf2625b1',
  [EvmChainId.LINEA]: '0x2abf469074dc0b54d793850807e6eb5faf2625b1',
  [EvmChainId.POLYGON_ZKEVM]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.BLAST]: '0x54cf3d259a06601b5bc45f61a16443ed5404dd64',
  [EvmChainId.SKALE_EUROPA]: '0x4cddf8d1473df386b926ec14b23bfbd566ce827a',
  [EvmChainId.ROOTSTOCK]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.SONIC]: '0x9b3336186a38e1b6c21955d112dbb0343ee061ee',
  [EvmChainId.HEMI]: '0x46b3fdf7b5cde91ac049936bf0bdb12c5d22202e',
  [EvmChainId.KATANA]: '0x69cc349932ae18ed406eeb917d79b9b3033fb68e',
  [EvmChainId.FUSE]: '0xf4d73326c13a4fc5fd7a064217e12780e9bd62c3',
  // testnets
  [EvmChainId.SEPOLIA]: '0xeabce3e74ef41fb40024a21cc2ee2f5ddc615791',
  [EvmChainId.TATARA]: '0x57bffa72db682f7eb6c132dae03ff36bbeb0c459',
  [EvmChainId.BOKUTO]: '0xe43ca1dee3f0fc1e2df73a0745674545f11a59f5',
}
