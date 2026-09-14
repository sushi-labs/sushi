import { describe, expect, it } from 'vitest'
import { Amount } from '../../../generic/currency/amount.js'
import { EvmChainId } from '../../chain/index.js'
import { EvmNative } from '../../currency/native.js'
import { USDC } from './tokens/USDC.js'
import { isEvmWNativeSupported, isWrapOrUnwrap } from './wrapped-native.js'

describe('Arc native USDC', () => {
  it('converts decimals without treating the linked interface as a wrapper', () => {
    const native = EvmNative.fromChainId(EvmChainId.ARC)
    const usdc = USDC[EvmChainId.ARC]

    expect(Amount.fromHuman(native, 1).wrap().amount).toBe(1_000_000n)
    expect(native.wrap().isSame(usdc)).toBe(true)
    expect(isEvmWNativeSupported(EvmChainId.ARC)).toBe(false)
    expect(isWrapOrUnwrap({ from: native, to: usdc })).toBe(false)
    expect(isWrapOrUnwrap({ from: usdc, to: native })).toBe(false)
  })
})
