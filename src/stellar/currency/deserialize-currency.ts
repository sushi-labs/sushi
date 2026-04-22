import { type SerializedStellarToken, StellarToken } from './token.js'

function deserializeStellarCurrency(data: SerializedStellarToken): StellarToken

function deserializeStellarCurrency(data: SerializedStellarToken) {
  return new StellarToken(data)
}

export { deserializeStellarCurrency }
