import { EvmChainId } from '../../../chain/index.js'
import { EvmToken } from '../../../currency/token.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'
import { axlUSDT_ADDRESS } from './axlUSDT.js'

export const USDT_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  [EvmChainId.POLYGON]: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  [EvmChainId.BASE]: '0xfde4c96c8593536e31f229ea8f37b2ada2699bb2',
  [EvmChainId.BSC]: '0x55d398326f99059ff775485246999027b3197955',
  [EvmChainId.HARMONY]: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
  [EvmChainId.GNOSIS]: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
  [EvmChainId.ARBITRUM]: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  [EvmChainId.AVALANCHE]: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
  [EvmChainId.CELO]: '0x88eec49252c8cbc039dcdb394c0c2ba2f1637ea0',
  [EvmChainId.OPTIMISM]: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
  [EvmChainId.KAVA]: '0x919c1c267bc06a7039e03fcc2ef738525769109c',
  [EvmChainId.METIS]: '0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc',
  [EvmChainId.ARBITRUM_NOVA]: '0xed9d63a96c27f87b07115b56b2e3572827f21646',
  [EvmChainId.BOBA]: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
  [EvmChainId.BOBA_BNB]: '0x1e633dcd0d3d349126983d58988051f7c62c543d',
  [EvmChainId.BTTC]: '0xe887512ab8bc60bcc9224e1c3b5be68e26048b8b', // USDT.e
  [EvmChainId.POLYGON_ZKEVM]: '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
  [EvmChainId.THUNDERCORE]: '0x4f3c8e20942461e2c3bdd8311ac57b0c222f2b82',
  [EvmChainId.CORE]: '0x900101d06a7426441ae63e9ab3b9b0f63be145f1',
  [EvmChainId.HAQQ]: axlUSDT_ADDRESS[EvmChainId.HAQQ],
  [EvmChainId.ZKSYNC_ERA]: '0x493257fd37edb34451f62edf8d2a0c418852ba4c',
  [EvmChainId.SCROLL]: '0xf55bec9cafdbe8730f096aa55dad6d22d44099df',
  [EvmChainId.ZETACHAIN]: '0x7c8dda80bbbe1254a7aacf3219ebe1481c6e01d7',
  [EvmChainId.SKALE_EUROPA]: '0x1c0491e3396ad6a35f061c62387a95d7218fc515',
  [EvmChainId.ROOTSTOCK]: '0xef213441a85df4d7acbdae0cf78004e1e486bb96',
  [EvmChainId.MANTA]: '0xf417f5a458ec102b90352f697d6e2ac3a3d2851f',
  [EvmChainId.MODE]: '0xf0f161fda2712db8b566946122a5af183995e2ed',
  [EvmChainId.TAIKO]: '0x2def195713cf4a606b49d07e520e22c17899a736',
  [EvmChainId.ZKLINK]: '0x2f8a25ac62179b31d62d7f80884ae57464699059',
  [EvmChainId.HEMI]: '0xbb0d083fb1be0a9f6157ec484b6c79e0a4e31c2e',
  [EvmChainId.LINEA]: '0xa219439258ca9da29e9cc4ce5596924745e12b93',
  [EvmChainId.MANTLE]: '0x201eba5cc46d216ce6dc03f6a759e8e766e956ae',
  [EvmChainId.KATANA]: '0x2dca96907fde857dd3d816880a0df407eeb2d2f2',
  [EvmChainId.HYPEREVM]: '0xb8ce59fc3717ada4c02eadf9682a9e934f625ebb',
} as const

export const USDT = {
  ...addressMapToTokenMap(
    {
      decimals: 6,
      symbol: 'USDT',
      name: 'Tether USD',
    },
    USDT_ADDRESS,
  ),
  [EvmChainId.BSC]: new EvmToken({
    chainId: EvmChainId.BSC,
    address: USDT_ADDRESS[EvmChainId.BSC],
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  }),
  [EvmChainId.BOBA_BNB]: new EvmToken({
    chainId: EvmChainId.BOBA_BNB,
    address: USDT_ADDRESS[EvmChainId.BOBA_BNB],
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  }),
  [EvmChainId.ROOTSTOCK]: new EvmToken({
    chainId: EvmChainId.ROOTSTOCK,
    address: USDT_ADDRESS[EvmChainId.ROOTSTOCK],
    decimals: 18,
    symbol: 'rUSDT',
    name: 'rUSDT',
  }),
}

export const STARGATE_USDT_ADDRESS = {
  [EvmChainId.FANTOM]: '0xcc1b99ddac1a33c201a742a1851662e87bc7f22c',
  [EvmChainId.KAVA]: '0xaad094f6a75a14417d39f04e690fc216f080a41a',
} as const

export const STARGATE_USDT = {
  [EvmChainId.FANTOM]: new EvmToken({
    chainId: EvmChainId.FANTOM,
    address: STARGATE_USDT_ADDRESS[EvmChainId.FANTOM],
    decimals: 6,
    symbol: 'stgUSDT',
    name: 'Stargate USDT',
    origin: 'stargate',
  }),
  [EvmChainId.KAVA]: new EvmToken({
    chainId: EvmChainId.KAVA,
    address: STARGATE_USDT_ADDRESS[EvmChainId.KAVA],
    decimals: 6,
    symbol: 'stgUSDT',
    name: 'Stargate USDT',
    origin: 'stargate',
  }),
} as const
