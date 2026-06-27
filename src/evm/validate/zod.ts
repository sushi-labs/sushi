import * as z from 'zod'
import { type EvmAddress, isEvmAddress } from '../currency/token.js'
import { normalizeEvmAddress } from '../utils/normalize-address.js'

export const evmAddress = () =>
  z
    .string()
    .refine((value) => isEvmAddress(value), {
      message: 'Invalid address',
    })
    .transform((value) => normalizeEvmAddress(value as EvmAddress))

export const szevm = {
  address: evmAddress,
}
