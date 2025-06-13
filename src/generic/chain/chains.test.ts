import { describe, expect, it } from 'vitest'
import {
  ChainId,
  getChainById,
  getChainByKey,
  isMainnetChainId,
  isTestnetChainId,
} from './chains.js'

describe('generic/chain/chains.ts functions', () => {
  it('should return an id for a valid chain key', () => {
    const id = ChainId.ETHEREUM

    expect(id).toBeDefined()
    expect(id).toBe(1)
  })

  it('should return undefined for an invalid chain key', () => {
    expect((ChainId as any).STRING).toBeUndefined()
  })

  it('should retrieve a chain by its id using getChainById', () => {
    const ethereumChain = getChainById(ChainId.ETHEREUM)
    expect(ethereumChain).toBeDefined()
    expect(ethereumChain.chainId).toBe(ChainId.ETHEREUM)
  })

  it('should retrieve a chain by its key using getChainByKey', () => {
    const ethereumChain = getChainByKey('ethereum')
    expect(ethereumChain).toBeDefined()
    expect(ethereumChain.key).toBe('ethereum')
  })

  it('should return undefined for an invalid chain id', () => {
    const invalidChainId = 99999
    expect(getChainById(invalidChainId as ChainId)).toBeUndefined()
  })

  it('should confirm Ethereum is recognized as a mainnet chain id and Sepolia is not', () => {
    expect(isMainnetChainId(ChainId.ETHEREUM)).toBe(true)
    expect(isMainnetChainId(ChainId.SEPOLIA)).toBe(false)
  })

  it('should confirm Sepolia is recognized as a testnet chain id and Ethereum is not', () => {
    expect(isTestnetChainId(ChainId.SEPOLIA)).toBe(true)
    expect(isTestnetChainId(ChainId.ETHEREUM)).toBe(false)
  })
})
