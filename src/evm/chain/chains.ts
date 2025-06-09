import { defineChain as defineViemChain } from 'viem'
import {
  apeChain as apeViem,
  arbitrumNova as arbitrumNovaViem,
  arbitrumSepolia as arbitrumSepoliaViem,
  arbitrum as arbitrumViem,
  avalanche as avalancheViem,
  base as baseViem,
  blast as blastViem,
  boba as bobaViem,
  bscTestnet as bscTestnetViem,
  bsc as bscViem,
  bitTorrent as bttcViem,
  celo as celoViem,
  coreDao as coreViem,
  cronos as cronosViem,
  curtis as curtisViem,
  mainnet as ethereumViem,
  fantomTestnet as fantomTestnetViem,
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
import { defineEvmChain } from './define-chain.js'

import type { Replace, UnionToIntersection } from '~generic/types/index.js'

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
    netType: 'mainnet',
    contracts: {
      multicall3: {
        address: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
        blockCreated: 18871,
      },
    },
  },
)

const ethereum = /* @__PURE__ */ defineEvmChain(ethereumViem, {
  key: 'ethereum',
})

const polygon = /* @__PURE__ */ defineEvmChain(polygonViem, {
  key: 'polygon',
})

const fantom = /* @__PURE__ */ defineEvmChain(fantomViem, {
  key: 'fantom',
})

const gnosis = /* @__PURE__ */ defineEvmChain(gnosisViem, {
  key: 'gnosis',
})

const bsc = /* @__PURE__ */ defineEvmChain(bscViem, {
  key: 'bsc',
})

const arbitrum = /* @__PURE__ */ defineEvmChain(arbitrumViem, {
  key: 'arbitrum',
})

const arbitrumNova = /* @__PURE__ */ defineEvmChain(arbitrumNovaViem, {
  key: 'arbitrum-nova',
})

const avalanche = /* @__PURE__ */ defineEvmChain(avalancheViem, {
  key: 'avalanche',
})

const harmony = /* @__PURE__ */ defineEvmChain(harmonyViem, {
  key: 'harmony',
})

const celo = /* @__PURE__ */ defineEvmChain(celoViem, {
  key: 'celo',
})

const optimism = /* @__PURE__ */ defineEvmChain(optimismViem, {
  key: 'optimism',
})

const kava = /* @__PURE__ */ defineEvmChain(kavaViem, {
  key: 'kava',
})

const metis = /* @__PURE__ */ defineEvmChain(metisViem, {
  key: 'metis',
})

const boba = /* @__PURE__ */ defineEvmChain(bobaViem, {
  key: 'boba',
})

const bttc = /* @__PURE__ */ defineEvmChain(bttcViem, {
  key: 'bttc',
})

const polygonZkevm = /* @__PURE__ */ defineEvmChain(polygonZkevmViem, {
  key: 'polygon-zkevm',
})

const thundercore = /* @__PURE__ */ defineEvmChain(thundercoreViem, {
  key: 'thundercore',
})

const filecoin = /* @__PURE__ */ defineEvmChain(filecoinViem, {
  key: 'filecoin',
})

const haqq = /* @__PURE__ */ defineEvmChain(haqqViem, {
  key: 'haqq',
  contracts: {
    multicall3: {
      address: '0xfe2D04A5018AC1B366F599A13BF4e0C760b2aE6b',
      blockCreated: 6589598,
    },
  },
})

const core = /* @__PURE__ */ defineEvmChain(coreViem, {
  key: 'core',
})

const zksync = /* @__PURE__ */ defineEvmChain(zksyncViem, {
  key: 'zksync-era',
})

const linea = /* @__PURE__ */ defineEvmChain(lineaViem, {
  key: 'linea',
})

const base = /* @__PURE__ */ defineEvmChain(baseViem, {
  key: 'base',
})

const scroll = /* @__PURE__ */ defineEvmChain(scrollViem, {
  key: 'scroll',
})

const zetachain = /* @__PURE__ */ defineEvmChain(zetachainViem, {
  key: 'zetachain',
})

const cronos = /* @__PURE__ */ defineEvmChain(cronosViem, {
  key: 'cronos',
})

const blast = /* @__PURE__ */ defineEvmChain(blastViem, {
  key: 'blast',
})

const skaleEuropa = /* @__PURE__ */ defineEvmChain(skaleEuropaViem, {
  key: 'skale-europa',
})

const rootstock = /* @__PURE__ */ defineEvmChain(rootstockViem, {
  key: 'rootstock',
})

const mantle = /* @__PURE__ */ defineEvmChain(mantleViem, {
  key: 'mantle',
})

const curtis = /* @__PURE__ */ defineEvmChain(curtisViem, {
  key: 'curtis',
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 7290821,
    },
  },
})

const manta = /* @__PURE__ */ defineEvmChain(mantaViem, {
  key: 'manta',
})

const mode = /* @__PURE__ */ defineEvmChain(modeViem, {
  key: 'mode',
})

const taiko = /* @__PURE__ */ defineEvmChain(taikoViem, {
  key: 'taiko',
})

const zklink = /* @__PURE__ */ defineEvmChain(zklinkViem, {
  key: 'zklink',
  contracts: {
    multicall3: {
      address: '0x825267E0fA5CAe92F98540828a54198dcB3Eaeb5',
      blockCreated: 146055,
    },
  },
})

const ape = /* @__PURE__ */ defineEvmChain(apeViem, {
  key: 'ape',
})

const sonic = /* @__PURE__ */ defineEvmChain(sonicViem, {
  key: 'sonic',
})

const hemi = /* @__PURE__ */ defineEvmChain(hemiViem, {
  key: 'hemi',
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 484490,
    },
  },
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
        url: 'https://explorer.katanarpc.com',
        apiUrl: 'https://explorer.katanarpc.com/api',
      },
    },
    testnet: false,
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 0,
      },
    },
  }),
  {
    key: 'katana',
  },
)

// Testnets
const bscTestnet = /* @__PURE__ */ defineEvmChain(bscTestnetViem, {
  key: 'bsc-testnet',
})

const sepolia = /* @__PURE__ */ defineEvmChain(sepoliaViem, {
  key: 'sepolia',
})

const fantomTestnet = /* @__PURE__ */ defineEvmChain(fantomTestnetViem, {
  key: 'fantom-testnet',
})

const arbitrumSepolia = /* @__PURE__ */ defineEvmChain(arbitrumSepoliaViem, {
  key: 'arbitrum-sepolia',
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
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 0,
      },
    },
  }),
  {
    key: 'tatara',
  },
)

export const evmChains = [
  bobaBnb,
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
  curtis,
  manta,
  mode,
  taiko,
  zklink,
  ape,
  sonic,
  hemi,
  katana,

  bscTestnet,
  sepolia,
  fantomTestnet,
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

export const EvmChainId = /* @__PURE__ */ new Proxy<EvmChainIdMap>(
  {} as EvmChainIdMap,
  {
    get: (_: unknown, key: keyof EvmChainIdMap) => {
      const _key = key.toLowerCase().replace(/_/g, '-') as EvmChainKey
      const chain = evmChains.find((chain) => chain.key === _key)

      if (!chain) return undefined

      return chain.chainId
    },
  },
)

export function isEvmChainId(chainId: number): chainId is EvmChainId {
  return evmChains.some((chain) => chain.chainId === chainId)
}

export function getEvmChainById<C extends EvmChainId>(chainId: C) {
  return evmChains.find((chain) => chain.chainId === chainId)! as Extract<
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
  return evmChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'mainnet',
  )
}

// EvmTestnetChainId

export type EvmTestnetChainId = Extract<
  (typeof evmChains)[number],
  { netType: 'testnet' }
>['chainId']

export function isEvmTestnetChainId(
  chainId: number,
): chainId is EvmTestnetChainId {
  return evmChains.some(
    (chain) => chain.chainId === chainId && chain.netType === 'testnet',
  )
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
