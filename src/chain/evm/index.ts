import raw from './generated-chain-data.js'
import { EvmChainId } from './id.js'

export * from './id.js'

const additional = [] as const

const RAW = [...raw, ...additional] as const

const EIP3091_OVERRIDE = [
  EvmChainId.OPTIMISM,
  EvmChainId.BOBA,
  EvmChainId.BASE,
  EvmChainId.FILECOIN,
] as number[]

type Data = (typeof RAW)[number]

export interface EvmChainBase {
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

export class EvmChain implements EvmChainBase {
  public static fromRaw(data: Data) {
    return new EvmChain(data)
  }
  public static from(chainId: number) {
    return evmChains[chainId]
  }
  public static fromShortName(shortName: string) {
    const chainId = evmChainShortNameToChainId[shortName]
    if (!chainId) throw new Error(`Unknown chain short name: ${shortName}`)
    return EvmChain.from(chainId)
  }
  public static fromChainId(chainId: number) {
    return EvmChain.from(chainId)
  }
  public static txUrl(chainId: number, txHash: string): string {
    return EvmChain.fromChainId(chainId)?.getTxUrl(txHash) ?? ''
  }
  public static blockUrl(chainId: number, blockHashOrHeight: string): string {
    return EvmChain.fromChainId(chainId)?.getBlockUrl(blockHashOrHeight) ?? ''
  }
  public static tokenUrl(chainId: number, tokenAddress: string): string {
    return EvmChain.fromChainId(chainId)?.getTokenUrl(tokenAddress) ?? ''
  }
  public static accountUrl(chainId: number, accountAddress: string): string {
    return EvmChain.fromChainId(chainId)?.getAccountUrl(accountAddress) ?? ''
  }

  declare chainId: EvmChainBase['chainId']
  declare name: EvmChainBase['name']
  declare nativeCurrency: EvmChainBase['nativeCurrency']
  declare shortName: EvmChainBase['shortName']
  explorers: NonNullable<EvmChainBase['explorers']> = []

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
    if (data.chainId === EvmChainId.SCROLL) {
      this.explorers?.sort((explorer) =>
        explorer.name === 'Scrollscan' ? -1 : 1,
      )
    } else if (data.chainId === EvmChainId.ARBITRUM_NOVA) {
      this.explorers = [
        {
          name: 'Arbitrum Nova Explorer',
          url: 'https://nova.arbiscan.io',
          standard: 'EIP3091',
        },
        ...(this.explorers ?? []),
      ]
    } else if (data.chainId === EvmChainId.FILECOIN) {
      this.name = 'Filecoin'
      this.explorers?.sort((explorer) => (explorer.name === 'Filfox' ? -1 : 1))
    } else if (data.chainId === EvmChainId.ZETACHAIN) {
      this.name = 'ZetaChain'
      this.explorers = [
        {
          name: 'ZetaChain Mainnet Explorer',
          url: 'https://zetachain.blockscout.com',
          standard: 'EIP3091',
        },
      ]
    } else if (data.chainId === EvmChainId.BLAST) {
      this.explorers = [
        {
          name: 'Blast Explorer',
          url: 'https://blastscan.io',
          standard: 'EIP3091',
        },
      ]
    } else if (data.chainId === EvmChainId.SKALE_EUROPA) {
      this.name = 'SKALE Europa'
    } else if (data.chainId === EvmChainId.ROOTSTOCK) {
      this.explorers?.sort((explorer) =>
        explorer.name === 'blockscout' ? -1 : 1,
      )
    } else if (data.chainId === EvmChainId.MOONBEAM) {
      this.explorers = [
        {
          name: 'Moonscan',
          url: 'https://moonscan.io',
          standard: 'EIP3091',
        },
      ]
    } else if (data.chainId === EvmChainId.HEMI) {
      this.name = 'Hemi'
    } else if (data.chainId === EvmChainId.THUNDERCORE) {
      this.explorers = [
        {
          name: 'ThunderCore Mainnet Explorer',
          url: 'https://explorer-mainnet.thundercore.com',
          standard: 'EIP3091',
        },
      ]
    } else if (data.chainId === EvmChainId.KATANA) {
      this.name = 'Katana'
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

export const evmNatives = Object.fromEntries(
  RAW.map((data): [EvmChainId, NativeCurrency] => [
    data.chainId,
    data.nativeCurrency,
  ]),
)

// Chain Id => Chain mapping
export const evmChains = Object.fromEntries(
  RAW.map((data): [EvmChainId, EvmChain] => [data.chainId, new EvmChain(data)]),
)

// Chain Id => Chain mapping
export const evmChainsL2 = Object.fromEntries(
  RAW.filter((data) => 'parent' in data && data.parent.type === Type.L2).map(
    (data): [EvmChainId, EvmChain] => [data.chainId, new EvmChain(data)],
  ),
)

// EvmChainId array
export const evmChainIds = RAW.map((chain) => chain.chainId)

// Chain Short Name => Chain Id mapping
export const evmChainShortNameToChainId = Object.fromEntries(
  RAW.map((data): [string, number] => [data.shortName, data.chainId]),
)

// Chain Id => Short Name mapping
export const evmChainShortName = Object.fromEntries(
  RAW.map((data): [number, string] => [
    data.chainId,
    EvmChain.fromRaw(data).shortName,
  ]),
)

// Chain Id => Chain Name mapping
export const evmChainName = Object.fromEntries(
  RAW.map((data): [number, string] => [
    data.chainId,
    EvmChain.fromRaw(data).name,
  ]),
)

export const getEvmChainInfo = (
  input: string,
):
  | { chainId: EvmChainId; networkName: EvmChainKey }
  | { chainId: undefined; networkName: undefined } => {
  const _networkName = input.toLowerCase()
  const _chainId = Number.parseInt(input)

  if (isEvmChainId(_chainId)) {
    const networkName = EvmChainKey[_chainId]
    return { chainId: _chainId, networkName }
  }

  if (isEvmNetworkNameKey(_networkName)) {
    const chainId = EvmNetworkNameKey[_networkName]
    return { chainId, networkName: _networkName }
  }

  return { chainId: undefined, networkName: undefined }
}

export const EVM_TESTNET_CHAIN_IDS = [
  // EvmChainId.ARBITRUM_TESTNET,
  // EvmChainId.AVALANCHE_TESTNET,
  // EvmChainId.BSC_TESTNET,
  // EvmChainId.FANTOM_TESTNET,
  // EvmChainId.HECO_TESTNET,
  // EvmChainId.HARMONY_TESTNET,
  // EvmChainId.OKEX_TESTNET,
  // EvmChainId.POLYGON_TESTNET,
  EvmChainId.SEPOLIA,
  EvmChainId.TATARA,
  // EvmChainId.ROPSTEN,
  // EvmChainId.RINKEBY,
  // EvmChainId.GÖRLI,
  // EvmChainId.KOVAN,
  // EvmChainId.CURTIS,
] as const
export type EvmTestnetChainId = (typeof EVM_TESTNET_CHAIN_IDS)[number]

export const isEvmChainId = (chainId: number): chainId is EvmChainId =>
  Object.values(EvmChainId).includes(chainId as EvmChainId)

export const EvmChainKey = {
  [EvmChainId.ARBITRUM]: 'arbitrum',
  [EvmChainId.ARBITRUM_NOVA]: 'arbitrum-nova',
  // [EvmChainId.ARBITRUM_TESTNET]: 'arbitrum-testnet',
  [EvmChainId.AVALANCHE]: 'avalanche',
  // [EvmChainId.AVALANCHE_TESTNET]: 'avalance-testnet',
  [EvmChainId.BSC]: 'bsc',
  // [EvmChainId.BSC_TESTNET]: 'bsc-testnet',
  [EvmChainId.CELO]: 'celo',
  [EvmChainId.ETHEREUM]: 'ethereum',
  [EvmChainId.FANTOM]: 'fantom',
  // [EvmChainId.FANTOM_TESTNET]: 'fantom-testnet',
  [EvmChainId.FUSE]: 'fuse',
  // [EvmChainId.GÖRLI]: 'goerli',
  [EvmChainId.HARMONY]: 'harmony',
  // [EvmChainId.HARMONY_TESTNET]: 'harmony-testnet',
  // [EvmChainId.HECO]: 'heco',
  // [EvmChainId.HECO_TESTNET]: 'heco-testnet',
  // [EvmChainId.KOVAN]: 'kovan',
  // [EvmChainId.ROPSTEN]: 'ropsten',
  [EvmChainId.POLYGON]: 'polygon',
  // [EvmChainId.POLYGON_TESTNET]: 'matic-testnet',
  [EvmChainId.MOONBEAM]: 'moonbeam',
  // [EvmChainId.MOONBEAM_TESTNET]: 'moonbeam-testnet',
  [EvmChainId.MOONRIVER]: 'moonriver',
  // [EvmChainId.OKEX]: 'okex',
  // [EvmChainId.OKEX_TESTNET]: 'okex-testnet',
  // [EvmChainId.PALM]: 'palm',
  // [EvmChainId.PALM_TESTNET]: 'palm-testnet',
  // [EvmChainId.RINKEBY]: 'rinkeby',
  [EvmChainId.TELOS]: 'telos',
  [EvmChainId.GNOSIS]: 'gnosis',
  [EvmChainId.OPTIMISM]: 'optimism',
  [EvmChainId.KAVA]: 'kava',
  [EvmChainId.METIS]: 'metis',
  [EvmChainId.BOBA]: 'boba',
  // [EvmChainId.BOBA_AVAX]: 'boba-avax',
  [EvmChainId.BOBA_BNB]: 'boba-bnb',
  [EvmChainId.BTTC]: 'bttc',
  // [EvmChainId.CONSENSUS_ZKEVM_TESTNET]: 'consensus-zkevm-testnet',
  // [EvmChainId.SCROLL_ALPHA_TESTNET]: 'scroll-alpha-testnet',
  // [EvmChainId.BASE_TESTNET]:'base-testnet',
  [EvmChainId.POLYGON_ZKEVM]: 'polygon-zkevm',
  [EvmChainId.THUNDERCORE]: 'thundercore',
  [EvmChainId.HAQQ]: 'haqq',
  [EvmChainId.CORE]: 'core',
  [EvmChainId.ZKSYNC_ERA]: 'zksync-era',
  [EvmChainId.LINEA]: 'linea',
  [EvmChainId.BASE]: 'base',
  [EvmChainId.FILECOIN]: 'filecoin',
  [EvmChainId.SEPOLIA]: 'sepolia',
  [EvmChainId.SCROLL]: 'scroll',
  [EvmChainId.ZETACHAIN]: 'zetachain',
  [EvmChainId.CRONOS]: 'cronos',
  [EvmChainId.BLAST]: 'blast',
  [EvmChainId.SKALE_EUROPA]: 'skale-europa',
  [EvmChainId.ROOTSTOCK]: 'rootstock',
  [EvmChainId.MANTLE]: 'mantle',
  // [EvmChainId.CURTIS]: 'curtis',
  [EvmChainId.MANTA]: 'manta',
  [EvmChainId.MODE]: 'mode',
  [EvmChainId.TAIKO]: 'taiko',
  [EvmChainId.ZKLINK]: 'zklink',
  [EvmChainId.APE]: 'ape',
  [EvmChainId.SONIC]: 'sonic',
  [EvmChainId.HEMI]: 'hemi',
  [EvmChainId.TATARA]: 'tatara',
  [EvmChainId.KATANA]: 'katana',
  [EvmChainId.HYPEREVM]: 'hyperevm',
} as const satisfies Record<EvmChainId, string>
export type EvmChainKey = (typeof EvmChainKey)[keyof typeof EvmChainKey]

export const EvmNetworkNameKey = Object.fromEntries(
  Object.entries(EvmChainKey).map(([key, value]) => [value, Number(key)]),
) as { [key in EvmChainKey]: EvmChainId }

export const isEvmNetworkNameKey = (key: string): key is EvmChainKey =>
  Object.keys(EvmNetworkNameKey).includes(key)

export default evmChains
