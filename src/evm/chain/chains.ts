import { defineChain as defineViemChain } from 'viem'
import {
  apeChain as apeViem,
  arbitrumNova as arbitrumNovaViem,
  arbitrumSepolia as arbitrumSepoliaViem,
  arbitrum as arbitrumViem,
  avalanche as avalancheViem,
  base as baseViem,
  berachain as berachainViem,
  blast as blastViem,
  boba as bobaViem,
  bsc as bscViem,
  bitTorrent as bttcViem,
  celo as celoViem,
  coreDao as coreViem,
  cronos as cronosViem,
  mainnet as ethereumViem,
  fantom as fantomViem,
  filecoin as filecoinViem,
  gnosis as gnosisViem,
  haqqMainnet as haqqViem,
  harmonyOne as harmonyViem,
  hemi as hemiViem,
  kava as kavaViem,
  linea as lineaViem,
  manta as mantaViem,
  mantle as mantleViem,
  metis as metisViem,
  mode as modeViem,
  optimism as optimismViem,
  polygon as polygonViem,
  polygonZkEvm as polygonZkevmViem,
  rootstock as rootstockViem,
  scroll as scrollViem,
  sepolia as sepoliaViem,
  skaleEuropa as skaleEuropaViem,
  sonic as sonicViem,
  taiko as taikoViem,
  thunderCore as thundercoreViem,
  zetachain as zetachainViem,
  zkLinkNova as zklinkViem,
  zksync as zksyncViem,
} from 'viem/chains'
import type { Replace, UnionToIntersection } from '../../generic/types/index.js'
import { defineEvmChain } from './define-chain.js'

const ethereum = /* @__PURE__ */ defineEvmChain(ethereumViem, {
  key: 'ethereum',
  shortName: 'eth',
})

const polygon = /* @__PURE__ */ defineEvmChain(polygonViem, {
  key: 'polygon',
  shortName: 'pol',
})

const fantom = /* @__PURE__ */ defineEvmChain(fantomViem, {
  key: 'fantom',
  shortName: 'ftm',
})

const gnosis = /* @__PURE__ */ defineEvmChain(gnosisViem, {
  key: 'gnosis',
  shortName: 'gno',
})

const bsc = /* @__PURE__ */ defineEvmChain(bscViem, {
  key: 'bsc',
  shortName: 'bnb',
})

const bobaBnb = /* @__PURE__ */ defineEvmChain(
  /* @__PURE__ */ defineViemChain({
    id: 56288,
    name: 'Boba BNB',
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
  }),
  {
    key: 'boba-bnb',
    shortName: 'boba-bnb',
    netType: 'mainnet',
    contracts: {
      multicall3: {
        address: '0x67da5f2ffaddff067ab9d5f025f8810634d84287',
        blockCreated: 18871,
      },
    },
    parentChainId: bsc.chainId,
  },
)

const arbitrum = /* @__PURE__ */ defineEvmChain(arbitrumViem, {
  key: 'arbitrum',
  shortName: 'arb1',
  parentChainId: ethereum.chainId,
})

const arbitrumNova = /* @__PURE__ */ defineEvmChain(arbitrumNovaViem, {
  key: 'arbitrum-nova',
  shortName: 'arb-nova',
  parentChainId: ethereum.chainId,
})

const avalanche = /* @__PURE__ */ defineEvmChain(avalancheViem, {
  key: 'avalanche',
  shortName: 'avax',
})

const harmony = /* @__PURE__ */ defineEvmChain(harmonyViem, {
  key: 'harmony',
  shortName: 'hmy-s0',
})

const celo = /* @__PURE__ */ defineEvmChain(celoViem, {
  key: 'celo',
  shortName: 'celo',
})

const optimism = /* @__PURE__ */ defineEvmChain(optimismViem, {
  key: 'optimism',
  shortName: 'oeth',
  parentChainId: ethereum.chainId,
})

const kava = /* @__PURE__ */ defineEvmChain(kavaViem, {
  key: 'kava',
  shortName: 'kava',
})

const metis = /* @__PURE__ */ defineEvmChain(metisViem, {
  key: 'metis',
  shortName: 'metis-andromeda',
  parentChainId: ethereum.chainId,
})

const boba = /* @__PURE__ */ defineEvmChain(bobaViem, {
  key: 'boba',
  shortName: 'boba',
  parentChainId: ethereum.chainId,
})

const bttc = /* @__PURE__ */ defineEvmChain(bttcViem, {
  key: 'bttc',
  shortName: 'btt',
})

const polygonZkevm = /* @__PURE__ */ defineEvmChain(polygonZkevmViem, {
  key: 'polygon-zkevm',
  shortName: 'pol-zkevm',
  parentChainId: ethereum.chainId,
})

const thundercore = /* @__PURE__ */ defineEvmChain(thundercoreViem, {
  key: 'thundercore',
  shortName: 'tt',
})

const filecoin = /* @__PURE__ */ defineEvmChain(filecoinViem, {
  key: 'filecoin',
  shortName: 'fil',
})

const haqq = /* @__PURE__ */ defineEvmChain(haqqViem, {
  key: 'haqq',
  contracts: {
    multicall3: {
      address: '0xfe2d04a5018ac1b366f599a13bf4e0c760b2ae6b',
      blockCreated: 6589598,
    },
  },
  shortName: 'haqq',
})

const core = /* @__PURE__ */ defineEvmChain(coreViem, {
  key: 'core',
  shortName: 'core',
})

const zksync = /* @__PURE__ */ defineEvmChain(zksyncViem, {
  key: 'zksync-era',
  shortName: 'zksync-era',
  parentChainId: ethereum.chainId,
})

const linea = /* @__PURE__ */ defineEvmChain(lineaViem, {
  key: 'linea',
  shortName: 'linea',
  parentChainId: ethereum.chainId,
})

const base = /* @__PURE__ */ defineEvmChain(baseViem, {
  key: 'base',
  shortName: 'base',
  parentChainId: ethereum.chainId,
})

const scroll = /* @__PURE__ */ defineEvmChain(scrollViem, {
  key: 'scroll',
  shortName: 'scr',
  parentChainId: ethereum.chainId,
})

const zetachain = /* @__PURE__ */ defineEvmChain(zetachainViem, {
  key: 'zetachain',
  shortName: 'zetachain',
})

const cronos = /* @__PURE__ */ defineEvmChain(cronosViem, {
  key: 'cronos',
  shortName: 'cro',
})

const blast = /* @__PURE__ */ defineEvmChain(blastViem, {
  key: 'blast',
  shortName: 'blast',
  parentChainId: ethereum.chainId,
})

const skaleEuropa = /* @__PURE__ */ defineEvmChain(skaleEuropaViem, {
  key: 'skale-europa',
  shortName: 'europa',
})

const rootstock = /* @__PURE__ */ defineEvmChain(rootstockViem, {
  key: 'rootstock',
  shortName: 'rsk',
})

const mantle = /* @__PURE__ */ defineEvmChain(mantleViem, {
  key: 'mantle',
  shortName: 'mantle',
  parentChainId: ethereum.chainId,
})

const manta = /* @__PURE__ */ defineEvmChain(mantaViem, {
  key: 'manta',
  shortName: 'manta',
  parentChainId: ethereum.chainId,
})

const mode = /* @__PURE__ */ defineEvmChain(modeViem, {
  key: 'mode',
  shortName: 'mode',
  parentChainId: ethereum.chainId,
})

const taiko = /* @__PURE__ */ defineEvmChain(taikoViem, {
  key: 'taiko',
  shortName: 'tko',
  parentChainId: ethereum.chainId,
})

const zklink = /* @__PURE__ */ defineEvmChain(zklinkViem, {
  key: 'zklink',
  contracts: {
    multicall3: {
      address: '0x825267e0fa5cae92f98540828a54198dcb3eaeb5',
      blockCreated: 146055,
    },
  },
  shortName: 'zklink',
})

const ape = /* @__PURE__ */ defineEvmChain(apeViem, {
  key: 'ape',
  shortName: 'ape',
  parentChainId: arbitrum.chainId,
})

const sonic = /* @__PURE__ */ defineEvmChain(sonicViem, {
  key: 'sonic',
  shortName: 'sonic',
  //parentChainId: SOLANA
})

const hemi = /* @__PURE__ */ defineEvmChain(hemiViem, {
  key: 'hemi',
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 484490,
    },
  },
  shortName: 'hemi',
  parentChainId: ethereum.chainId,
})

const katana = /* @__PURE__ */ defineEvmChain(
  /* @__PURE__ */ defineViemChain({
    id: 747474,
    name: 'Katana',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.katanarpc.com'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Katana Explorer',
        url: 'https://katanascan.com',
        apiUrl: 'https://api.katanascan.com/api',
      },
    },
    testnet: false,
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 0,
      },
    },
  }),
  {
    key: 'katana',
    shortName: 'katana',
    parentChainId: ethereum.chainId,
  },
)

const hyperevm = /* @__PURE__ */ defineEvmChain(
  /* @__PURE__ */ defineViemChain({
    id: 999,
    name: 'HyperEVM',
    nativeCurrency: {
      decimals: 18,
      name: 'Hyperliquid',
      symbol: 'HYPE',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.hyperliquid.xyz/evm'],
      },
    },
    blockExplorers: {
      default: {
        name: 'HyperEVM Explorer',
        url: 'https://hyperevmscan.io',
        apiUrl: 'https://api.hyperevmscan.io/api',
      },
    },
    testnet: false,
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 13051,
      },
    },
  }),
  {
    key: 'hyperevm',
    shortName: 'hyperevm',
  },
)

const berachain = /* @__PURE__ */ defineEvmChain(berachainViem, {
  key: 'berachain',
  shortName: 'bera',
})

// Testnets
const sepolia = /* @__PURE__ */ defineEvmChain(sepoliaViem, {
  key: 'sepolia',
  shortName: 'sep',
})

const arbitrumSepolia = /* @__PURE__ */ defineEvmChain(arbitrumSepoliaViem, {
  key: 'arbitrum-sepolia',
  shortName: 'arb-sep',
  parentChainId: sepolia.chainId,
})

const tatara = /* @__PURE__ */ defineEvmChain(
  /* @__PURE__ */ defineViemChain({
    id: 129399,
    name: 'Tatara',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.tatara.katanarpc.com'],
      },
    },
    blockExplorers: {
      default: {
        name: 'Tatara Explorer',
        url: 'https://explorer.tatara.katana.network',
        apiUrl: 'https://explorer.tatara.katana.network/api',
      },
    },
    testnet: true,
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 0,
      },
    },
  }),
  {
    key: 'tatara',
    shortName: 'tatara',
    parentChainId: sepolia.chainId,
  },
)

export const evmChains = [
  ethereum,
  bobaBnb,
  polygon,
  fantom,
  gnosis,
  bsc,
  arbitrum,
  arbitrumNova,
  avalanche,
  harmony,
  celo,
  optimism,
  kava,
  metis,
  boba,
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
  manta,
  mode,
  taiko,
  zklink,
  ape,
  sonic,
  hemi,
  katana,
  hyperevm,
  berachain,

  sepolia,
  arbitrumSepolia,
  tatara,
] as const

// EvmChainId

export const evmChainIds = /* @__PURE__ */ evmChains.map(
  (chain) => chain.chainId,
)

export type EvmChainId = (typeof evmChainIds)[number]

type EvmChainIdMap = UnionToIntersection<
  (typeof evmChains)[number] extends infer I
    ? I extends { key: infer K; chainId: infer C }
      ? K extends string
        ? { [key in K as Uppercase<Replace<key, '-', '_'>>]: C }
        : never
      : never
    : never
>

const chainIdByKey = Object.freeze(
  evmChains.reduce(
    (acc, { key, chainId }) => {
      acc[key.toUpperCase().replace(/-/g, '_') as keyof EvmChainIdMap] = chainId
      return acc
    },
    {} as Record<keyof EvmChainIdMap, EvmChainId>,
  ),
) as EvmChainIdMap

export const EvmChainId = chainIdByKey

const chainById = Object.freeze(
  Object.fromEntries(evmChains.map((c) => [c.chainId, c])),
)

export function isEvmChainId(chainId: number): chainId is EvmChainId {
  return Object.hasOwn(chainById, chainId)
}

export function getEvmChainById<C extends EvmChainId>(chainId: C) {
  return chainById[chainId]! as Extract<
    (typeof evmChains)[number],
    { chainId: C }
  >
}

// EvmMainnetChainId

export type EvmMainnetChainId = Extract<
  (typeof evmChains)[number],
  { netType: 'mainnet' }
>['chainId']

export function isEvmMainnetChainId(
  chainId: number,
): chainId is EvmMainnetChainId {
  return chainById[chainId]?.netType === 'mainnet'
}

// EvmTestnetChainId

export type EvmTestnetChainId = Extract<
  (typeof evmChains)[number],
  { netType: 'testnet' }
>['chainId']

export function isEvmTestnetChainId(
  chainId: number,
): chainId is EvmTestnetChainId {
  return chainById[chainId]?.netType === 'testnet'
}

// EvmChainKey

export type EvmChainKey = (typeof evmChains)[number]['key']

export function isEvmChainKey(key: string): key is EvmChainKey {
  return evmChains.some((chain) => chain.key === key)
}

export function getEvmChainByKey<C extends EvmChainKey>(key: C) {
  return evmChains.find((chain) => chain.key === key)! as Extract<
    (typeof evmChains)[number],
    { key: C }
  >
}
