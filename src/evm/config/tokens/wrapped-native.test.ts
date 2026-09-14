import { describe, expect, it } from 'vitest'
import { EvmChainId } from '../../chain/index.js'
import { EvmNative } from '../../currency/native.js'
import { USDC } from './tokens/USDC.js'
import {
  isEvmWNativeSupported,
  WNATIVE,
  WNATIVE_ADDRESS,
} from './wrapped-native.js'

describe('Arc wrapped native', () => {
  it('uses the linked USDC interface as wrapped native', () => {
    expect(USDC[EvmChainId.ARC].address).toBe(
      '0x3600000000000000000000000000000000000000',
    )
    expect(USDC[EvmChainId.ARC].decimals).toBe(6)
    expect(WNATIVE_ADDRESS[EvmChainId.ARC]).toBe(USDC[EvmChainId.ARC].address)
    expect(WNATIVE[EvmChainId.ARC]).toBe(USDC[EvmChainId.ARC])
    expect(isEvmWNativeSupported(EvmChainId.ARC)).toBe(true)
    expect(EvmNative.fromChainId(EvmChainId.ARC).wrap().decimals).toBe(6)
  })
})
