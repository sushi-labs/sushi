import { EvmChainId } from '~evm/chain/index.js'
import { EvmToken } from '~evm/currency/token.js'
import { addressMapToTokenMap } from '../address-map-to-token-map.js'
import { axlUSDT_ADDRESS } from './axlUSDT.js'

export const USDT_ADDRESS = {
  [EvmChainId.ETHEREUM]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  // [EvmChainId.ROPSTEN]: '0x110a13FC3efE6A245B50102D2d79B3E76125Ae83',
  // [EvmChainId.KOVAN]: '0x07de306FF27a2B630B1141956844eB1552B956B5',
  [EvmChainId.POLYGON]: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  [EvmChainId.BASE]: '0xfde4c96c8593536e31f229ea8f37b2ada2699bb2',
  [EvmChainId.BSC]: '0x55d398326f99059fF775485246999027B3197955',
  [EvmChainId.BSC_TESTNET]: '0xF49E250aEB5abDf660d643583AdFd0be41464EfD',
  [EvmChainId.HARMONY]: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
  [EvmChainId.GNOSIS]: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
  [EvmChainId.ARBITRUM]: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  [EvmChainId.AVALANCHE]: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
  [EvmChainId.CELO]: '0x88eeC49252c8cbc039DCdB394c0c2BA2f1637EA0',
  [EvmChainId.OPTIMISM]: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
  [EvmChainId.KAVA]: '0x919C1c267BC06a7039e03fcc2eF738525769109c',
  [EvmChainId.METIS]: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
  [EvmChainId.ARBITRUM_NOVA]: '0xeD9d63a96c27f87B07115b56b2e3572827f21646',
  [EvmChainId.BOBA]: '0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d',
  [EvmChainId.BOBA_BNB]: '0x1E633Dcd0d3D349126983D58988051F7c62c543D',
  [EvmChainId.BTTC]: '0xE887512ab8BC60BcC9224e1c3b5Be68E26048B8B', // USDT.e
  [EvmChainId.POLYGON_ZKEVM]: '0x1E4a5963aBFD975d8c9021ce480b42188849D41d',
  [EvmChainId.THUNDERCORE]: '0x4f3C8E20942461e2c3Bdd8311AC57B0c222f2b82',
  [EvmChainId.CORE]: '0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1',
  [EvmChainId.HAQQ]: axlUSDT_ADDRESS[EvmChainId.HAQQ],
  [EvmChainId.ZKSYNC_ERA]: '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C',
  [EvmChainId.SCROLL]: '0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df',
  [EvmChainId.ZETACHAIN]: '0x7c8dDa80bbBE1254a7aACf3219EBe1481c6E01d7',
  [EvmChainId.SKALE_EUROPA]: '0x1c0491E3396AD6a35f061c62387a95d7218FC515',
  [EvmChainId.ROOTSTOCK]: '0xef213441A85dF4d7ACbDaE0Cf78004e1E486bB96',
  [EvmChainId.CURTIS]: '0x6e7812D8E37bfd3453Ca73D1B3fDA10F430E875f',
  [EvmChainId.MANTA]: '0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f',
  [EvmChainId.MODE]: '0xf0F161fDA2712DB8b566946122a5af183995e2eD',
  [EvmChainId.TAIKO]: '0x2DEF195713CF4a606B49D07E520e22C17899a736',
  [EvmChainId.ZKLINK]: '0x2F8A25ac62179B31D62D7F80884AE57464699059',
  [EvmChainId.HEMI]: '0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e',
  [EvmChainId.LINEA]: '0xa219439258ca9da29e9cc4ce5596924745e12b93',
  [EvmChainId.MANTLE]: '0x201eba5cc46d216ce6dc03f6a759e8e766e956ae',
  [EvmChainId.KATANA]: '0x2DCa96907fde857dd3D816880A0df407eeB2D2F2',
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
  [EvmChainId.BSC_TESTNET]: new EvmToken({
    chainId: EvmChainId.BSC_TESTNET,
    address: USDT_ADDRESS[EvmChainId.BSC_TESTNET],
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
  [EvmChainId.FANTOM]: '0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C',
  [EvmChainId.KAVA]: '0xAad094F6A75A14417d39f04E690fC216f080A41a',
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
