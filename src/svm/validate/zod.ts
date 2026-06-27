import * as z from 'zod'
import { isSvmAddress, type SvmAddress } from '../currency/token.js'
import { normalizeSvmAddress } from '../utils/normalize-address.js'

export const svmAddressSchema = () =>
  z
    .string()
    .refine(isSvmAddress, { message: 'Invalid address' })
    .transform((value) => normalizeSvmAddress(value as SvmAddress))

export const szsvm = {
  address: svmAddressSchema,
}
