import { describe, expect, it } from 'vitest'
import type {
  StellarAccountAddress,
  StellarContractAddress,
} from '../address.js'
import { StellarChainId } from '../chain/chains.js'
import { deserializeStellarCurrency } from './deserialize-currency.js'
import { StellarToken, serializedStellarTokenSchema } from './token.js'

const accountAddress =
  'GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN7' as StellarAccountAddress
const contractAddress =
  'CCRSMJDITH3VK5QOGYCVZDAKIY5GL3RCG4TCVLIAVB662IW2V5KJGZGF' as StellarContractAddress

describe('StellarToken', () => {
  const token = new StellarToken({
    chainId: StellarChainId.STELLAR,
    address: contractAddress.toLowerCase() as StellarContractAddress,
    issuer: accountAddress.toLowerCase() as StellarAccountAddress,
    symbol: 'TOKEN',
    name: 'Stellar Token',
    decimals: 7,
    origin: 'stellar',
    metadata: { verified: true },
  })

  it('normalizes contract and issuer addresses and wraps to itself', () => {
    expect(token.address).toBe(contractAddress)
    expect(token.issuer).toBe(accountAddress)
    expect(token.wrap()).toBe(token)
  })

  it('round-trips issuer and metadata through serialization', () => {
    const serialized = serializedStellarTokenSchema().parse(token.toJSON())
    const restored = deserializeStellarCurrency(serialized)

    expect(restored).toBeInstanceOf(StellarToken)
    expect(restored.toJSON()).toEqual(serialized)
  })

  it('rejects the wrong address kind and invalid decimals', () => {
    const serialized = token.toJSON()
    expect(() =>
      serializedStellarTokenSchema().parse({
        ...serialized,
        address: accountAddress,
      }),
    ).toThrow()
    expect(() =>
      serializedStellarTokenSchema().parse({ ...serialized, decimals: -1 }),
    ).toThrow()
  })
})
