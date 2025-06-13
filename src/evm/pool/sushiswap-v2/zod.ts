import * as z from 'zod'
import { serializedEvmTokenSchema } from '~evm/currency/token.js'
import { serializedAmountSchema } from '~generic/index.js'

export const sushiSwapV2PoolSchema = z.object({
  reserve0: serializedAmountSchema(serializedEvmTokenSchema),
  reserve1: serializedAmountSchema(serializedEvmTokenSchema),
})

export type SerializedSushiSwapV2Pool = z.infer<typeof sushiSwapV2PoolSchema>
