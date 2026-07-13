import { createCurrencyDeserializer } from '../../generic/currency/deserialize-currency.js'
import { type SerializedStellarToken, StellarToken } from './token.js'

function deserializeStellarCurrency(data: SerializedStellarToken) {
  return deserialize(data)
}

const deserialize = createCurrencyDeserializer({ token: StellarToken })

export { deserializeStellarCurrency }
