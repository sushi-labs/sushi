import raw from './generated-chain-data.js'
import { ChainId } from './id.js'

export * from './id.js'

const additional = [] as const

const RAW = [...raw, ...additional] as const

const EIP3091_OVERRIDE = [
  ChainId.OPTIMISM,
  ChainId.BOBA,
  ChainId.BASE,
  ChainId.FILECOIN,
] as number[]

type Data = (typeof RAW)[number]

export interface Chain {
  name: string
  nativeCurrency: NativeCurrency
  shortName: string
  chainId: number
  explorers?: Explorer[]
  parent?: Parent
}

interface Explorer {
  name: string
  url: string
  standard: Standard
  icon?: string
}

const Standard = {
  Eip3091: 'EIP3091',
  None: 'none',
} as const

type Standard = (typeof Standard)[keyof typeof Standard]

interface NativeCurrency {
  name: string
  symbol: string
  decimals: number
}

interface Parent {
  type: Type
  chain: string
  bridges?: Bridge[]
}

interface Bridge {
  url: string
}

const Type = {
  L2: 'L2',
  Shard: 'shard',
} as const
type Type = (typeof Type)[keyof typeof Type]

// biome-ignore lint/suspicious/noUnsafeDeclarationMerging: explaination
export class Chain implements Chain {
  public static fromRaw(data: Data) {
    return new Chain(data)
  }
  public static from(chainId: number) {
    return chains[chainId]
  }
  public static fromShortName(shortName: string) {
    const chainId = chainShortNameToChainId[shortName]
    if (!chainId) throw new Error(`Unknown chain short name: ${shortName}`)
    return Chain.from(chainId)
  }
  public static fromChainId(chainId: number) {
    return Chain.from(chainId)
  }
  public static txUrl(chainId: number, txHash: string): string {
    return Chain.fromChainId(chainId)?.getTxUrl(txHash) ?? ''
  }
  public static blockUrl(chainId: number, blockHashOrHeight: string): string {
    return Chain.fromChainId(chainId)?.getBlockUrl(blockHashOrHeight) ?? ''
  }
  public static tokenUrl(chainId: number, tokenAddress: string): string {
    return Chain.fromChainId(chainId)?.getTokenUrl(tokenAddress) ?? ''
  }
  public static accountUrl(chainId: number, accountAddress: string): string {
    return Chain.fromChainId(chainId)?.getAccountUrl(accountAddress) ?? ''
  }
  constructor(data: Data) {
    Object.assign(this, data)

    // process name overrides
    const targets = ['Mainnet', 'Opera', 'Mainnet Shard 0']
    for (const target of targets) {
      if (data.name.includes(target)) {
        this.name = data.name.replace(target, '').trim()
      }
    }

    if (data.name === 'Boba Network') {
      this.name = 'Boba Eth'
    }

    // process explorer overrides etc...
    if (data.chainId === ChainId.SCROLL) {
      this.explorers?.sort((explorer) =>
        explorer.name === 'Scrollscan' ? -1 : 1,
      )
    } else if (data.chainId === ChainId.ARBITRUM_NOVA) {
      this.explorers = [
        {
          name: 'Arbitrum Nova Explorer',
          url: 'https://nova.arbiscan.io',
          standard: 'EIP3091',
        },
        ...(this.explorers ?? []),
      ]
    } else if (data.chainId === ChainId.FILECOIN) {
      this.name = 'Filecoin'
      this.explorers?.sort((explorer) => (explorer.name === 'Filfox' ? -1 : 1))
    } else if (data.chainId === ChainId.ZETACHAIN) {
      this.name = 'ZetaChain'
      this.explorers = [
        {
          name: 'ZetaChain Mainnet Explorer',
          url: 'https://zetachain.blockscout.com',
          standard: 'EIP3091',
        },
      ]
    } else if (data.chainId === ChainId.BLAST) {
      this.explorers = [
        {
          name: 'Blast Explorer',
          url: 'https://blastscan.io',
          standard: 'EIP3091',
        },
      ]
    } else if (data.chainId === ChainId.SKALE_EUROPA) {
      this.name = 'SKALE Europa'
    } else if (data.chainId === ChainId.ROOTSTOCK) {
      this.explorers?.sort((explorer) =>
        explorer.name === 'blockscout' ? -1 : 1,
      )
    } else if (data.chainId === ChainId.MOONBEAM) {
      this.explorers = [
        {
          name: 'Moonscan',
          url: 'https://moonscan.io',
          standard: 'EIP3091',
        },
      ]
    }
  }
  getTxUrl(txHash: string): string {
    if (!this.explorers) return ''
    for (const explorer of this.explorers) {
      if (
        explorer.standard === Standard.Eip3091 ||
        EIP3091_OVERRIDE.includes(this.chainId)
      ) {
        return `${explorer.url}/tx/${txHash}`
      }
    }
    return ''
  }
  getBlockUrl(blockHashOrHeight: string): string {
    if (!this.explorers) return ''
    for (const explorer of this.explorers) {
      if (explorer.standard === Standard.Eip3091) {
        return `${explorer.url}/block/${blockHashOrHeight}`
      }
    }
    return ''
  }
  getTokenUrl(tokenAddress: string): string {
    if (!this.explorers) return ''
    for (const explorer of this.explorers) {
      if (
        explorer.standard === Standard.Eip3091 ||
        EIP3091_OVERRIDE.includes(this.chainId)
      ) {
        return `${explorer.url}/token/${tokenAddress}`
      }
    }
    return ''
  }
  getAccountUrl(accountAddress: string): string {
    if (!this.explorers) return ''
    for (const explorer of this.explorers) {
      if (
        explorer.standard === Standard.Eip3091 ||
        EIP3091_OVERRIDE.includes(this.chainId)
      ) {
        return `${explorer.url}/address/${accountAddress}`
      }
    }
    return ''
  }
}

export const natives = Object.fromEntries(
  RAW.map((data): [ChainId, NativeCurrency] => [
    data.chainId,
    data.nativeCurrency,
  ]),
)

// Chain Id => Chain mapping
export const chains = Object.fromEntries(
  RAW.map((data): [ChainId, Chain] => [data.chainId, new Chain(data)]),
)

// Chain Id => Chain mapping
export const chainsL2 = Object.fromEntries(
  RAW.filter((data) => 'parent' in data && data.parent.type === Type.L2).map(
    (data): [ChainId, Chain] => [data.chainId, new Chain(data)],
  ),
)

// ChainId array
export const chainIds = RAW.map((chain) => chain.chainId)

// Chain Short Name => Chain Id mapping
export const chainShortNameToChainId = Object.fromEntries(
  RAW.map((data): [string, number] => [data.shortName, data.chainId]),
)

// Chain Id => Short Name mapping
export const chainShortName = Object.fromEntries(
  RAW.map((data): [number, string] => [
    data.chainId,
    Chain.fromRaw(data).shortName,
  ]),
)

// Chain Id => Chain Name mapping
export const chainName = Object.fromEntries(
  RAW.map((data): [number, string] => [data.chainId, Chain.fromRaw(data).name]),
)

export const getChainInfo = (
  input: string,
):
  | { chainId: ChainId; networkName: ChainKey }
  | { chainId: undefined; networkName: undefined } => {
  const _networkName = input.toLowerCase()
  const _chainId = Number.parseInt(input)

  if (isChainId(_chainId)) {
    const networkName = ChainKey[_chainId]
    return { chainId: _chainId, networkName }
  }

  if (isNetworkNameKey(_networkName)) {
    const chainId = NetworkNameKey[_networkName]
    return { chainId, networkName: _networkName }
  }

  return { chainId: undefined, networkName: undefined }
}

export const TESTNET_CHAIN_IDS = [
  ChainId.ARBITRUM_TESTNET,
  ChainId.AVALANCHE_TESTNET,
  ChainId.BSC_TESTNET,
  ChainId.FANTOM_TESTNET,
  // ChainId.HECO_TESTNET,
  // ChainId.HARMONY_TESTNET,
  // ChainId.OKEX_TESTNET,
  ChainId.POLYGON_TESTNET,
  ChainId.SEPOLIA,
  // ChainId.ROPSTEN,
  // ChainId.RINKEBY,
  // ChainId.GÖRLI,
  // ChainId.KOVAN,
  ChainId.CURTIS,
] as const
export type TestnetChainId = (typeof TESTNET_CHAIN_IDS)[number]

export const isChainId = (chainId: number): chainId is ChainId =>
  Object.values(ChainId).includes(chainId as ChainId)

export const ChainKey = {
  [ChainId.ARBITRUM]: 'arbitrum',
  [ChainId.ARBITRUM_NOVA]: 'arbitrum-nova',
  [ChainId.ARBITRUM_TESTNET]: 'arbitrum-testnet',
  [ChainId.AVALANCHE]: 'avalanche',
  [ChainId.AVALANCHE_TESTNET]: 'avalance-testnet',
  [ChainId.BSC]: 'bsc',
  [ChainId.BSC_TESTNET]: 'bsc-testnet',
  [ChainId.CELO]: 'celo',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.FANTOM]: 'fantom',
  [ChainId.FANTOM_TESTNET]: 'fantom-testnet',
  [ChainId.FUSE]: 'fuse',
  [ChainId.GÖRLI]: 'goerli',
  [ChainId.HARMONY]: 'harmony',
  // [ChainId.HARMONY_TESTNET]: 'harmony-testnet',
  [ChainId.HECO]: 'heco',
  // [ChainId.HECO_TESTNET]: 'heco-testnet',
  // [ChainId.KOVAN]: 'kovan',
  // [ChainId.ROPSTEN]: 'ropsten',
  [ChainId.POLYGON]: 'polygon',
  [ChainId.POLYGON_TESTNET]: 'matic-testnet',
  [ChainId.MOONBEAM]: 'moonbeam',
  // [ChainId.MOONBEAM_TESTNET]: 'moonbeam-testnet',
  [ChainId.MOONRIVER]: 'moonriver',
  [ChainId.OKEX]: 'okex',
  // [ChainId.OKEX_TESTNET]: 'okex-testnet',
  [ChainId.PALM]: 'palm',
  // [ChainId.PALM_TESTNET]: 'palm-testnet',
  // [ChainId.RINKEBY]: 'rinkeby',
  [ChainId.TELOS]: 'telos',
  [ChainId.GNOSIS]: 'gnosis',
  [ChainId.OPTIMISM]: 'optimism',
  [ChainId.KAVA]: 'kava',
  [ChainId.METIS]: 'metis',
  [ChainId.BOBA]: 'boba',
  [ChainId.BOBA_AVAX]: 'boba-avax',
  [ChainId.BOBA_BNB]: 'boba-bnb',
  [ChainId.BTTC]: 'bttc',
  // [ChainId.CONSENSUS_ZKEVM_TESTNET]: 'consensus-zkevm-testnet',
  // [ChainId.SCROLL_ALPHA_TESTNET]: 'scroll-alpha-testnet',
  // [ChainId.BASE_TESTNET]:'base-testnet',
  [ChainId.POLYGON_ZKEVM]: 'polygon-zkevm',
  [ChainId.THUNDERCORE]: 'thundercore',
  [ChainId.HAQQ]: 'haqq',
  [ChainId.CORE]: 'core',
  [ChainId.ZKSYNC_ERA]: 'zksync-era',
  [ChainId.LINEA]: 'linea',
  [ChainId.BASE]: 'base',
  [ChainId.FILECOIN]: 'filecoin',
  [ChainId.SEPOLIA]: 'sepolia',
  [ChainId.SCROLL]: 'scroll',
  [ChainId.ZETACHAIN]: 'zetachain',
  [ChainId.CRONOS]: 'cronos',
  [ChainId.BLAST]: 'blast',
  [ChainId.SKALE_EUROPA]: 'skale-europa',
  [ChainId.ROOTSTOCK]: 'rootstock',
  [ChainId.MANTLE]: 'mantle',
  [ChainId.CURTIS]: 'curtis',
  [ChainId.MANTA]: 'manta',
  [ChainId.MODE]: 'mode',
  [ChainId.TAIKO]: 'taiko',
  [ChainId.ZKLINK]: 'zklink',
  [ChainId.APE]: 'ape',
} as const
export type ChainKey = (typeof ChainKey)[keyof typeof ChainKey]

export const NetworkNameKey = Object.fromEntries(
  Object.entries(ChainKey).map(([key, value]) => [value, Number(key)]),
) as { [key in ChainKey]: ChainId }

export const isNetworkNameKey = (key: string): key is ChainKey =>
  Object.keys(NetworkNameKey).includes(key)

export default chains
