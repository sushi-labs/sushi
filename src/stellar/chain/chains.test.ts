import { describe, expect, it } from 'vitest'
import type {
  StellarAccountAddress,
  StellarContractAddress,
} from '../address.js'
import {
  getStellarChainById,
  isStellarChainId,
  StellarChainId,
} from './chains.js'

describe('Stellar chains', () => {
  const account =
    'GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN7' as StellarAccountAddress
  const contract =
    'CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF' as StellarContractAddress

  it('builds transaction, account, contract, and asset URLs', () => {
    const chain = getStellarChainById(StellarChainId.STELLAR)
    const base = 'https://stellar.expert/explorer/public'

    expect(chain.getTransactionUrl('hash')).toBe(`${base}/tx/hash`)
    expect(chain.getAccountUrl(account)).toBe(`${base}/account/${account}`)
    expect(chain.getAccountUrl(contract)).toBe(`${base}/contract/${contract}`)
    expect(chain.getTokenUrl(contract)).toBe(`${base}/asset/${contract}`)
    expect(isStellarChainId(StellarChainId.STELLAR)).toBe(true)
    expect(isStellarChainId(1)).toBe(false)
  })
})
