import { defineChain as defineViemChain } from 'viem'
import {
  apeChain as _ape,
  arbitrum as _arbitrum,
  arbitrumNova as _arbitrumNova,
  avalanche as _avalanche,
  base as _base,
  blast as _blast,
  boba as _boba,
  bsc as _bsc,
  bitTorrent as _bttc,
  celo as _celo,
  coreDao as _core,
  cronos as _cronos,
  curtis as _curtis,
  mainnet as _ethereum,
  fantom as _fantom,
  filecoin as _filecoin,
  fuse as _fuse,
  gnosis as _gnosis,
  haqqMainnet as _haqq,
  harmonyOne as _harmony,
  hemi as _hemi,
  kava as _kava,
  linea as _linea,
  manta as _manta,
  mantle as _mantle,
  metis as _metis,
  mode as _mode,
  moonbeam as _moonbeam,
  moonriver as _moonriver,
  okc as _okex,
  optimism as _optimism,
  polygon as _polygon,
  polygonZkEvm as _polygonZkevm,
  rootstock as _rootstock,
  scroll as _scroll,
  sepolia as _sepolia,
  skaleEuropa as _skaleEuropa,
  sonic as _sonic,
  taiko as _taiko,
  telos as _telos,
  thunderCore as _thundercore,
  zetachain as _zetachain,
  zkLinkNova as _zklink,
  zksync as _zksync,
} from 'viem/chains'
import { type EvmChainResult, defineChain } from '../define-chain.js'
import { EvmChainId } from './id.js'

export * from './id.js'
export * from './key.js'

const _bobaBnb = defineViemChain({
  id: EvmChainId.BOBA_BNB,
  name: 'Boba BNB',
  network: 'boba-bnb',
  nativeCurrency: { name: 'Boba', symbol: 'BOBA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://bnb.boba.network'],
    },
    public: {
      http: ['https://bnb.boba.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Boba BNB Mainnet Explorer',
      url: 'https://bnb.bobascan.com/',
    },
  },
  contracts: {
    multicall3: {
      address: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
      blockCreated: 18871,
    },
  },
})

const _bobaAvax = defineViemChain({
  id: EvmChainId.BOBA_AVAX,
  name: 'Boba Avax',
  network: 'boba-avax',
  nativeCurrency: { name: 'Boba', symbol: 'BOBA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://avax.boba.network'],
    },
    public: {
      http: ['https://avax.boba.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Boba Avax Mainnet Explorer',
      url: 'https://avax.bobascan.com/',
    },
  },
})

const _heco = defineViemChain({
  id: EvmChainId.HECO,
  name: 'Heco',
  network: 'heco',
  nativeCurrency: { name: 'Huobi Token', symbol: 'HT', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://http-mainnet.hecochain.com'],
    },
    public: {
      http: ['https://http-mainnet.hecochain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Heco Mainnet Explorer',
      url: 'https://hecoinfo.com/',
    },
  },
})

const _palm = defineViemChain({
  id: EvmChainId.PALM,
  name: 'Palm',
  network: 'palm',
  nativeCurrency: { name: 'Palm', symbol: 'PALM', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.palm.io'],
    },
    public: {
      http: ['https://rpc.palm.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Palm Mainnet Explorer',
      url: 'https://explorer.palm.io/',
    },
  },
})

const ethereum = defineChain({
  ..._ethereum,
  type: 'evm',
  id: EvmChainId.ETHEREUM,
  name: 'Ethereum',
})

const polygon = defineChain({
  ..._polygon,
  type: 'evm',
  id: EvmChainId.POLYGON,
  name: 'Polygon',
})

const fantom = defineChain({
  ..._fantom,
  type: 'evm',
  id: EvmChainId.FANTOM,
  name: 'Fantom',
})

const gnosis = defineChain({
  ..._gnosis,
  type: 'evm',
  id: EvmChainId.GNOSIS,
  name: 'Gnosis',
})

const bsc = defineChain({
  ..._bsc,
  type: 'evm',
  id: EvmChainId.BSC,
  name: 'BNB Smart Chain',
})

const arbitrum = defineChain({
  ..._arbitrum,
  type: 'evm',
  id: EvmChainId.ARBITRUM,
  name: 'Arbitrum One',
})

const arbitrumNova = defineChain({
  ..._arbitrumNova,
  type: 'evm',
  id: EvmChainId.ARBITRUM_NOVA,
  name: 'Arbitrum Nova',
})

const avalanche = defineChain({
  ..._avalanche,
  type: 'evm',
  id: EvmChainId.AVALANCHE,
  name: 'Avalanche C-Chain',
})

const harmony = defineChain({
  ..._harmony,
  type: 'evm',
  id: EvmChainId.HARMONY,
  name: 'Harmony',
})

const celo = defineChain({
  ..._celo,
  type: 'evm',
  id: EvmChainId.CELO,
  name: 'CELO',
})

const moonriver = defineChain({
  ..._moonriver,
  type: 'evm',
  id: EvmChainId.MOONRIVER,
  name: 'Moonriver',
})

const fuse = defineChain({
  ..._fuse,
  type: 'evm',
  id: EvmChainId.FUSE,
  name: 'Moonbeam',
})

const telos = defineChain({
  ..._telos,
  type: 'evm',
  id: EvmChainId.TELOS,
  name: 'Telos',
})

const moonbeam = defineChain({
  ..._moonbeam,
  type: 'evm',
  id: EvmChainId.MOONBEAM,
  name: 'Moonbeam',
})

const optimism = defineChain({
  ..._optimism,
  type: 'evm',
  id: EvmChainId.OPTIMISM,
  name: 'OP',
})

const kava = defineChain({
  ..._kava,
  type: 'evm',
  id: EvmChainId.KAVA,
  name: 'Kava',
})

const metis = defineChain({
  ..._metis,
  type: 'evm',
  id: EvmChainId.METIS,
  name: 'Metis',
})

const boba = defineChain({
  ..._boba,
  type: 'evm',
  id: EvmChainId.BOBA,
  name: 'Boba',
})

const bobaBnb = defineChain({
  ..._bobaBnb,
  type: 'evm',
  id: EvmChainId.BOBA_BNB,
  name: 'Boba BNB',
})

const bttc = defineChain({
  ..._bttc,
  type: 'evm',
  id: EvmChainId.BTTC,
  name: 'BitTorrent Chain',
})

const polygonZkevm = defineChain({
  ..._polygonZkevm,
  type: 'evm',
  id: EvmChainId.POLYGON_ZKEVM,
  name: 'Polygon zkEVM',
})

const thundercore = defineChain({
  ..._thundercore,
  type: 'evm',
  id: EvmChainId.THUNDERCORE,
  name: 'ThunderCore',
})

const filecoin = defineChain({
  ..._filecoin,
  type: 'evm',
  id: EvmChainId.FILECOIN,
  name: 'Filecoin',
})

const haqq = defineChain({
  ..._haqq,
  type: 'evm',
  id: EvmChainId.HAQQ,
  name: 'Haqq',
})

const core = defineChain({
  ..._core,
  type: 'evm',
  id: EvmChainId.CORE,
  name: 'Core',
})

const zksync = defineChain({
  ..._zksync,
  type: 'evm',
  id: EvmChainId.ZKSYNC_ERA,
  name: 'zkSync',
})

const linea = defineChain({
  ..._linea,
  type: 'evm',
  id: EvmChainId.LINEA,
  name: 'Liena',
})

const base = defineChain({
  ..._base,
  type: 'evm',
  id: EvmChainId.BASE,
  name: 'Base',
})

const scroll = defineChain({
  ..._scroll,
  type: 'evm',
  id: EvmChainId.SCROLL,
  name: 'Scroll',
})

const zetachain = defineChain({
  ..._zetachain,
  type: 'evm',
  id: EvmChainId.ZETACHAIN,
  name: 'ZetaChain',
})

const cronos = defineChain({
  ..._cronos,
  type: 'evm',
  id: EvmChainId.CRONOS,
  name: 'Cronos',
})

const blast = defineChain({
  ..._blast,
  type: 'evm',
  id: EvmChainId.BLAST,
  name: 'Blast',
})

const skaleEuropa = defineChain({
  ..._skaleEuropa,
  type: 'evm',
  id: EvmChainId.SKALE_EUROPA,
  name: 'SKALE Europa',
})

const rootstock = defineChain({
  ..._rootstock,
  type: 'evm',
  id: EvmChainId.ROOTSTOCK,
  name: 'Rootstock',
})

const mantle = defineChain({
  ..._mantle,
  type: 'evm',
  id: EvmChainId.MANTLE,
  name: 'Mantle',
})

const curtis = defineChain({
  ..._curtis,
  type: 'evm',
  id: EvmChainId.CURTIS,
  name: 'Curtis',
})

const manta = defineChain({
  ..._manta,
  type: 'evm',
  id: EvmChainId.MANTA,
  name: 'Manta Pacific',
})

const mode = defineChain({
  ..._mode,
  type: 'evm',
  id: EvmChainId.MODE,
  name: 'Mode',
})

const taiko = defineChain({
  ..._taiko,
  type: 'evm',
  id: EvmChainId.TAIKO,
  name: 'Taiko',
})

const zklink = defineChain({
  ..._zklink,
  type: 'evm',
  id: EvmChainId.ZKLINK,
  name: 'zkLink',
})

const ape = defineChain({
  ..._ape,
  type: 'evm',
  id: EvmChainId.APE,
  name: 'ApeChain',
})

const sonic = defineChain({
  ..._sonic,
  type: 'evm',
  id: EvmChainId.SONIC,
  name: 'Sonic',
})

const hemi = defineChain({
  ..._hemi,
  type: 'evm',
  id: EvmChainId.HEMI,
  name: 'Hemi',
})

const sepolia = defineChain({
  ..._sepolia,
  type: 'evm',
  id: EvmChainId.SEPOLIA,
  name: 'Sepolia',
})

const bobaAvax = defineChain({
  ..._bobaAvax,
  type: 'evm',
  id: EvmChainId.BOBA_AVAX,
  name: 'Boba AVAX',
})

const heco = defineChain({
  ..._heco,
  type: 'evm',
  id: EvmChainId.HECO,
  name: 'HECO',
})

const palm = defineChain({
  ..._palm,
  type: 'evm',
  id: EvmChainId.PALM,
  name: 'Palm',
})

const okex = defineChain({
  ..._okex,
  type: 'evm',
  id: EvmChainId.OKEX,
  name: 'OKEX',
})

const chains: EvmChainResult[] = [
  ethereum,
  polygon,
  fantom,
  gnosis,
  bsc,
  arbitrum,
  arbitrumNova,
  avalanche,
  harmony,
  celo,
  moonriver,
  fuse,
  telos,
  moonbeam,
  optimism,
  kava,
  metis,
  boba,
  bobaBnb,
  bttc,
  polygonZkevm,
  thundercore,
  filecoin,
  haqq,
  core,
  zksync,
  linea,
  base,
  scroll,
  zetachain,
  cronos,
  blast,
  skaleEuropa,
  rootstock,
  mantle,
  curtis,
  manta,
  mode,
  taiko,
  zklink,
  ape,
  sonic,
  hemi,
  sepolia,
  bobaAvax,
  heco,
  palm,
  okex,
]

export const EvmNativeCurrencies = Object.fromEntries(
  chains.map((chain) => [chain.id, chain.nativeCurrency]),
) as Record<EvmChainId, (typeof chains)[number]['nativeCurrency']>

export const EvmChain = Object.fromEntries(
  chains.map((chain) => [chain.id, chain]),
) as Record<EvmChainId, EvmChainResult>
