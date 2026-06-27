import * as z from 'zod'
import { isMvmAddress, type MvmAddress } from '../currency/token.js'
import { normalizeMvmAddress } from '../utils/normalize-address.js'

export const mvmAddress = () =>
  z
    .string()
    .refine(isMvmAddress, { message: 'Invalid address' })
    .transform((value) => normalizeMvmAddress(value as MvmAddress))

export const szmvm = {
  address: mvmAddress,
}
