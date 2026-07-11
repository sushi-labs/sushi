import { createAddressSchema } from '../../generic/validate/create-address-schema.js'
import { isSvmAddress } from '../currency/token.js'
import { normalizeSvmAddress } from '../utils/normalize-address.js'

export const svmAddressSchema = () =>
  createAddressSchema(isSvmAddress, normalizeSvmAddress)

export const szsvm = {
  address: svmAddressSchema,
}
