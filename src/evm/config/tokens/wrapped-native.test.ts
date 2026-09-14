import { describe, expect, it } from 'vitest'
import { EvmChainId } from '../../chain/index.js'
import { EvmNative } from '../../currency/native.js'
import { USDC } from './tokens/USDC.js'
import { isEvmWNativeSupported } from './wrapped-native.js'

describe('Arc wrapped native', () => {
  it('uses the linked USDC interface without fabricating a wrapped token', () => {
    expect(USDC[EvmChainId.ARC].address).toBe(
      '0x3600000000000000000000000000000000000000',
    )
    expect(USDC[EvmChainId.ARC].decimals).toBe(6)
    expect(isEvmWNativeSupported(EvmChainId.ARC)).toBe(false)
    expect(() => EvmNative.fromChainId(EvmChainId.ARC).wrap()).toThrow(
      'No wrapped native token for chain 5042',
    )
  })
})
