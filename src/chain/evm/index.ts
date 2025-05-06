import { defineChain } from '../define-chain.js'
import { EvmChainId } from './id.js'
import { defineChain as defineViemChain } from 'viem'
import {
  mainnet as _ethereum,
  polygon as _polygon,
  fantom as _fantom,
  gnosis as _gnosis,
  bsc as _bsc,
  arbitrum as _arbitrum,
  arbitrumNova as _arbitrumNova,
  avalanche as _avalanche,
  harmonyOne as _harmony,
  celo as _celo,
  moonriver as _moonriver,
  fuse as _fuse,
  telos as _telos,
  moonbeam as _moonbeam,
  optimism as _optimism,
  kava as _kava,
  metis as _metis,
  boba as _boba,
  bitTorrent as _bttc,
  thunderCore as _thundercore,
  polygonZkEvm as _polygonZkevm,
  filecoin as _filecoin,
  haqqMainnet as _haqq,
  coreDao as _core,
  zksync as _zksync,
  linea as _linea,
  base as _base,
  scroll as _scroll,
  zetachain as _zetachain,
  cronos as _cronos,
  blast as _blast,
  skaleEuropa as _skaleEuropa,
  rootstock as _rootstock,
  mantle as _mantle,
  curtis as _curtis,
  manta as _manta,
  mode as _mode,
  taiko as _taiko,
  zkLinkNova as _zklink,
  apeChain as _ape,
  sonic as _sonic,
  hemi as _hemi
} from 'viem/chains'

export * from './id.js'
export * from './key.js'
export * from './native.js'

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
  }
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
  name: 'Polygon'
})

const fantom = defineChain({
  ..._fantom,
  type: 'evm',
  id: EvmChainId.FANTOM,
  name: 'Fantom'
})

const gnosis = defineChain({
  ..._gnosis,
  type: 'evm',
  id: EvmChainId.GNOSIS,
  name: 'Gnosis'
})

const bsc = defineChain({
  ..._bsc,
  type: 'evm',
  id: EvmChainId.BSC,
  name: 'BNB Smart Chain'
})

const arbitrum = defineChain({
  ..._arbitrum,
  type: 'evm',
  id: EvmChainId.ARBITRUM,
  name: 'Arbitrum One'
})

const arbitrumNova = defineChain({
  ..._arbitrumNova,
  type: 'evm',
  id: EvmChainId.ARBITRUM_NOVA,
  name: 'Arbitrum Nova'
})

const avalanche = defineChain({
  ..._avalanche,
  type: 'evm',
  id: EvmChainId.AVALANCHE,
  name: 'Avalanche C-Chain'
})

const harmony = defineChain({
  ..._harmony,
  type: 'evm',
  id: EvmChainId.HARMONY,
  name: 'Harmony'
})

const celo = defineChain({
  ..._celo,
  type: 'evm',
  id: EvmChainId.CELO,
  name: 'CELO'
})

const moonriver = defineChain({
  ..._moonriver,
  type: 'evm',
  id: EvmChainId.MOONRIVER,
  name: 'Moonriver'
})

const fuse = defineChain({
  ..._fuse,
  type: 'evm',
  id: EvmChainId.MOONBEAM,
  name: 'Moonbeam'
})

const telos = defineChain({
  ..._telos,
  type: 'evm',
  id: EvmChainId.TELOS,
  name: 'Telos'
})

const moonbeam = defineChain({
  ..._moonbeam,
  type: 'evm',
  id: EvmChainId.MOONBEAM,
  name: 'Moonbeam'
})

const optimism = defineChain({
  ..._optimism,
  type: 'evm',
  id: EvmChainId.OPTIMISM,
  name: 'OP'
})

const kava = defineChain({
  ..._kava,
  type: 'evm',
  id: EvmChainId.KAVA,
  name: 'Kava'
})

const metis = defineChain({
  ..._metis,
  type: 'evm',
  id: EvmChainId.METIS,
  name: 'Metis'
})

const boba = defineChain({
  ..._boba,
  type: 'evm',
  id: EvmChainId.BOBA,
  name: 'Boba'
})

const bobaBnb = defineChain({
  ..._bobaBnb,
  type: 'evm',
  id: EvmChainId.BOBA_BNB,
  name: 'Boba BNB'
})

const bttc = defineChain({
  ..._bttc,
  type: 'evm',
  id: EvmChainId.BTTC,
  name: 'BitTorrent Chain'
})

const polygonZkevm = defineChain({
  ..._polygonZkevm,
  type: 'evm',
  id: EvmChainId.POLYGON_ZKEVM,
  name: 'Polygon zkEVM'
})

const thundercore = defineChain({
  ..._thundercore,
  type: 'evm',
  id: EvmChainId.THUNDERCORE,
  name: 'ThunderCore'
})

const filecoin = defineChain({
  ..._filecoin,
  type: 'evm',
  id: EvmChainId.FILECOIN,
  name: 'Filecoin'
})

const haqq = defineChain({
  ..._haqq,
  type: 'evm',
  id: EvmChainId.HAQQ,
  name: 'Haqq'
})

const core = defineChain({
  ..._core,
  type: 'evm',
  id: EvmChainId.CORE,
  name: 'Core'
})

const zksync = defineChain({
  ..._zksync,
  type: 'evm',
  id: EvmChainId.ZKSYNC_ERA,
  name: 'zkSync'
})

const linea = defineChain({
  ..._linea,
  type: 'evm',
  id: EvmChainId.LINEA,
  name: 'Liena'
})

const base = defineChain({
  ..._base,
  type: 'evm',
  id: EvmChainId.BASE,
  name: 'Base'
})

const scroll = defineChain({
  ..._scroll,
  type: 'evm',
  id: EvmChainId.SCROLL,
  name: 'Scroll'
})

const zetachain = defineChain({
  ..._zetachain,
  type: 'evm',
  id: EvmChainId.ZETACHAIN,
  name: 'ZetaChain'
})

const cronos = defineChain({
  ..._cronos,
  type: 'evm',
  id: EvmChainId.CRONOS,
  name: 'Cronos'
})

const blast = defineChain({
  ..._blast,
  type: 'evm',
  id: EvmChainId.BLAST,
  name: 'Blast'
})

const skaleEuropa = defineChain({
  ..._skaleEuropa,
  type: 'evm',
  id: EvmChainId.SKALE_EUROPA,
  name: 'SKALE Europa'
})

const rootstock = defineChain({
  ..._rootstock,
  type: 'evm',
  id: EvmChainId.ROOTSTOCK,
  name: 'Rootstock'
})

const mantle = defineChain({
  ..._mantle,
  type: 'evm',
  id: EvmChainId.MANTLE,
  name: 'Mantle'
})

const curtis = defineChain({
  ..._curtis,
  type: 'evm',
  id: EvmChainId.CURTIS,
  name: 'Curtis'
})

const manta = defineChain({
  ..._manta,
  type: 'evm',
  id: EvmChainId.MANTA,
  name: 'Manta Pacific'
})

const mode = defineChain({
  ..._mode,
  type: 'evm',
  id: EvmChainId.MODE,
  name: 'Mode'
})

const taiko = defineChain({
  ..._taiko,
  type: 'evm',
  id: EvmChainId.TAIKO,
  name: 'Taiko'
})

const zklink = defineChain({
  ..._zklink,
  type: 'evm',
  id: EvmChainId.ZKLINK,
  name: 'zkLink'
})

const ape = defineChain({
  ..._ape,
  type: 'evm',
  id: EvmChainId.APE,
  name: 'ApeChain'
})

const sonic = defineChain({
  ..._sonic,
  type: 'evm',
  id: EvmChainId.SONIC,
  name: 'Sonic'
})

const hemi = defineChain({
  ..._hemi,
  type: 'evm',
  id: EvmChainId.HEMI,
  name: 'Hemi'
})

const chains = [
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
  hemi
]

export const evmChains = Object.fromEntries(
  chains.map((chain) => [chain.id, chain]),
) as Record<EvmChainId, typeof chains[number]>

export default evmChains
