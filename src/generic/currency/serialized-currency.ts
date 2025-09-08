import * as z from "zod";
import { serializedChainwebTokenSchema } from "~/chainweb/index.js";
import { serializedEvmCurrencySchema } from "../../evm/currency/currency.js";
import type { serializedEvmTokenSchema } from "../../evm/currency/token.js";
import type { serializedEvmNativeSchema } from "../../evm/index.js";
import { serializedMvmTokenSchema } from "../../mvm/currency/token.js";
import {
	serializedTvmCurrencySchema,
	type serializedTvmNativeSchema,
	type serializedTvmTokenSchema,
} from "../../tvm/index.js";
import type { CurrencyMetadata } from "./currency.js";

export type SerializedCurrencySchema<TMetadata extends CurrencyMetadata = CurrencyMetadata> = ReturnType<
	| typeof serializedEvmTokenSchema<TMetadata>
	| typeof serializedEvmNativeSchema<TMetadata>
	| typeof serializedEvmCurrencySchema<TMetadata>
	| typeof serializedMvmTokenSchema<TMetadata>
	| typeof serializedTvmTokenSchema<TMetadata>
	| typeof serializedTvmNativeSchema<TMetadata>
	| typeof serializedTvmCurrencySchema<TMetadata>
	| typeof serializedCurrencySchema<TMetadata>
	| typeof serializedChainwebTokenSchema<TMetadata>
>;

export const serializedCurrencySchema = <TMetadata extends {} = CurrencyMetadata>(
	opts: { metadata?: z.ZodType<TMetadata> } = {}
) =>
	z.union([
		serializedEvmCurrencySchema(opts),
		serializedMvmTokenSchema(opts),
		serializedTvmCurrencySchema(opts),
		serializedChainwebTokenSchema(opts),
	]);

export type SerializedCurrency<TMetadata extends CurrencyMetadata = CurrencyMetadata> = z.infer<
	ReturnType<typeof serializedCurrencySchema<TMetadata>>
>;
