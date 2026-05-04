import { describe, expect, it } from 'vitest'
import { StellarChainId } from '../../stellar/chain/chains.js'
import { STELLAR_USDC } from '../../stellar/config/tokens/tokens/USDC.js'
import { SvmChainId } from '../../svm/chain/chains.js'
import { SVM_WNATIVE } from '../../svm/config/tokens/wrapped-native.js'
import { SvmNative } from '../../svm/currency/native.js'
import { unwrapToken } from './unwrap-token.js'

describe('unwrapToken', () => {
  it('unwraps SVM wrapped native tokens', () => {
    const unwrapped = unwrapToken(SVM_WNATIVE[SvmChainId.SOLANA])

    expect(unwrapped).toBeInstanceOf(SvmNative)
    expect(unwrapped.chainId).toBe(SvmChainId.SOLANA)
    expect(unwrapped.type).toBe('native')
  })

  it('returns Stellar tokens without throwing', () => {
    const token = STELLAR_USDC[StellarChainId.STELLAR]

    expect(unwrapToken(token)).toBe(token)
  })
})
