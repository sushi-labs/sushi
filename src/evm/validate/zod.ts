import { isAddress } from 'viem'
import * as z from 'zod'

export const evmAddress = () =>
  z.string().refine((value) => isAddress(value, { strict: false }), {
    message: 'Invalid address',
  })

export const szevm = {
  address: evmAddress,
}
