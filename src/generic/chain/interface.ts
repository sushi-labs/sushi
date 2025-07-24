import type { EvmChainType } from '../../evm/chain/define-chain.js'
import type { MvmChainType } from '../../mvm/chain/define-chain.js'
import type { TvmChainType } from '../../tvm/chain/define-chain.js'
import type { ChainId, ChainKey } from './chains.js'

export type ChainType = EvmChainType | MvmChainType | TvmChainType

export type NetType = 'mainnet' | 'testnet'

export type BlockExplorers = {
  default: {
    name: string
    url: string
  }
  [key: string]: {
    name: string
    url: string
  }
}

export type Chain<
  TType extends ChainType = ChainType,
  TChainId extends ChainId = ChainId,
  TKey extends ChainKey = ChainKey,
  TName extends string = string,
  TShortName extends string = string,
  TNetType extends Readonly<NetType> = Readonly<NetType>,
  TBlockExplorerKeys extends BlockExplorers = BlockExplorers,
  TAddress extends string = string,
  TTransactionHash extends string = string,
> = Readonly<{
  type: TType
  chainId: TChainId
  key: TKey
  name: TName
  shortName: TShortName
  netType: TNetType
  blockExplorers: TBlockExplorerKeys

  getTransactionUrl: (input: TAddress) => string
  getAccountUrl: (input: TTransactionHash) => string
  getTokenUrl: (input: TAddress) => string
}>
