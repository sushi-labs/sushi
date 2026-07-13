import { describe, expect, it } from 'vitest'
import { MvmChainId } from '../chain/chains.js'
import { MvmToken, serializedMvmTokenSchema } from './token.js'

const address = '0x1::aptos_coin::AptosCoin' as const

describe('MvmToken', () => {
  const token = new MvmToken({
    chainId: MvmChainId.APTOS,
    address,
    symbol: 'APT',
    name: 'Aptos Coin',
    decimals: 8,
    metadata: { verified: true },
  })

  it('uses Move coin types as token IDs and wraps to itself', () => {
    expect(token.id).toBe(`${MvmChainId.APTOS}:${address}`)
    expect(token.wrap()).toBe(token)
  })

  it('round-trips through JSON and the serialized schema', () => {
    const serialized = serializedMvmTokenSchema().parse(token.toJSON())
    const restored = MvmToken.fromJSON(serialized)

    expect(restored).toEqual(token)
    expect(restored.toJSON()).toEqual(serialized)
  })

  it('defaults missing metadata and rejects invalid serialized tokens', () => {
    const serialized = token.toJSON()
    expect(
      serializedMvmTokenSchema().parse({ ...serialized, metadata: undefined })
        .metadata,
    ).toEqual({})
    expect(() =>
      serializedMvmTokenSchema().parse({ ...serialized, chainId: -5 }),
    ).toThrow()
    expect(() =>
      serializedMvmTokenSchema().parse({ ...serialized, decimals: -1 }),
    ).toThrow()
    expect(() =>
      serializedMvmTokenSchema().parse({ ...serialized, type: 'native' }),
    ).toThrow()
  })
})
