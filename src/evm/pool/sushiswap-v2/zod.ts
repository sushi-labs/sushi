import * as z from 'zod'
import { serializedAmountSchema } from '../../../generic/index.js'
import { serializedEvmTokenSchema } from '../../currency/token.js'

export const sushiSwapV2PoolSchema = z.object({
  reserve0: serializedAmountSchema(serializedEvmTokenSchema()),
  reserve1: serializedAmountSchema(serializedEvmTokenSchema()),
})

export type SerializedSushiSwapV2Pool = z.infer<typeof sushiSwapV2PoolSchema>
