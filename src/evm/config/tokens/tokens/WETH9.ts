import { EvmChainId } from '../../../chain/index.js'
import { EvmToken } from '../../../currency/token.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'
import { axlETH_ADDRESS } from './axlETH.js'

export const WETH9_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  [EvmChainId.SEPOLIA]: '0xfff9976782d46cc05630d1f6ebab18b2324d6b14',
  [EvmChainId.ARBITRUM]: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  [EvmChainId.ARBITRUM_SEPOLIA]: '0x980b62da83eff3d4576c647993b0c1d7faf17c73',
  [EvmChainId.BSC]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  [EvmChainId.POLYGON]: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  [EvmChainId.HARMONY]: '0x6983d1e6def3690c4d616b13597a09e6193ea013',
  [EvmChainId.GNOSIS]: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
  [EvmChainId.AVALANCHE]: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
  [EvmChainId.CELO]: '0x122013fd7df1c6f636a5bb8f03108e876548b455',
  [EvmChainId.OPTIMISM]: '0x4200000000000000000000000000000000000006',
  [EvmChainId.METIS]: '0x420000000000000000000000000000000000000a',
  [EvmChainId.ARBITRUM_NOVA]: '0x722e8bdd2ce80a4422e880164f2079488e115365',
  [EvmChainId.BOBA]: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
  // [EvmChainId.SEPOLIA]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  [EvmChainId.BTTC]: '0x1249c65afb11d179ffb3ce7d4eedd1d9b98ad006',
  [EvmChainId.THUNDERCORE]: '0x6576bb918709906dcbfdceae4bb1e6df7c8a1077',
  [EvmChainId.POLYGON_ZKEVM]: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
  [EvmChainId.CORE]: '0xeab3ac417c4d6df6b143346a46fee1b847b50296',
  [EvmChainId.HAQQ]: axlETH_ADDRESS[EvmChainId.HAQQ],
  [EvmChainId.ZKSYNC_ERA]: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
  [EvmChainId.LINEA]: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
  [EvmChainId.BASE]: '0x4200000000000000000000000000000000000006',
  [EvmChainId.SCROLL]: '0x5300000000000000000000000000000000000004',
  [EvmChainId.ZETACHAIN]: '0xd97b1de3619ed2c6beb3860147e30ca8a7dc9891',
  [EvmChainId.CRONOS]: '0xe44fd7fcb2b1581822d0c862b68222998a0c299a',
  [EvmChainId.BLAST]: '0x4300000000000000000000000000000000000004',
  [EvmChainId.SKALE_EUROPA]: '0xd2aaa00700000000000000000000000000000000',
  [EvmChainId.ROOTSTOCK]: '0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590',
  [EvmChainId.MANTLE]: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111',
  [EvmChainId.MANTA]: '0x0dc808adce2099a9f62aa87d9670745aba741746',
  [EvmChainId.MODE]: '0x4200000000000000000000000000000000000006',
  [EvmChainId.TAIKO]: '0xa51894664a773981c6c112c43ce576f315d5b1b6',
  [EvmChainId.ZKLINK]: '0x8280a4e7d5b3b658ec4580d3bc30f5e50454f169',
  [EvmChainId.SONIC]: '0x50c42deacd8fc9773493ed674b675be577f2634b',
  [EvmChainId.HEMI]: '0x4200000000000000000000000000000000000006',
  [EvmChainId.TATARA]: '0x17b8ee96e3bcb3b04b3e8334de4524520c51cab4',
  [EvmChainId.KATANA]: '0xee7d8bcfb72bc1880d0cf19822eb0a2e6577ab62',
  [EvmChainId.HYPEREVM]: '0x5555555555555555555555555555555555555555',
  [EvmChainId.BERACHAIN]: '0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590',
  [EvmChainId.PLASMA]: '0x9895d81bb462a195b4922ed7de0e3acd007c32cb',
  [EvmChainId.FUSE]: '0xa722c13135930332eb3d749b2f0906559d2c5b99',
  [EvmChainId.BOKUTO]: '0x84b3493fa9b125a8eff1ccc1328bd84d0b4a2dbf',
  [EvmChainId.MONAD]: '0xee8c0e9f1bffb4eb878d8f15f368a02a35481242',
  [EvmChainId.MEGAETH]: '0x4200000000000000000000000000000000000006',
  [EvmChainId.XLAYER]: '0x5a77f1443d16ee5761d310e38b62f77f726bc71c'
} as const

export const WETH9 = {
  ...addressMapToTokenMap(
    {
      decimals: 18,
      symbol: 'WETH',
      name: 'Wrapped Ether',
    },
    WETH9_ADDRESS,
  ),
  [EvmChainId.SKALE_EUROPA]: new EvmToken({
    chainId: EvmChainId.SKALE_EUROPA,
    address: WETH9_ADDRESS[EvmChainId.SKALE_EUROPA],
    decimals: 18,
    symbol: 'ETH',
    name: 'Ether',
  }),
}
