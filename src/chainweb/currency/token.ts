import * as z from "zod";
import type { CurrencyMetadata } from "../../generic/currency/currency.js";
import { Token } from "../../generic/currency/token.js";

import { type ChainwebChainId, isChainwebChainId } from "../chain/chains.js";

export type ChainwebTokenAddress = `${string}.${string}` | "coin";

export function isChainwebTokenAddress(address: string): address is ChainwebTokenAddress {
	if (address === "coin") return true;
	// `${string}.${string}` - namespace.name - string parts can include alphanumeric characters, underscores, and dashes
	return !!address.match(/^([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/);
}

export type ChainwebTokenOrigin = "native";

export class ChainwebToken<TMetadata extends CurrencyMetadata = Record<string, unknown>> extends Token<
	ChainwebChainId,
	ChainwebTokenAddress,
	TMetadata
> {
	public readonly origin: ChainwebTokenOrigin | undefined;

	constructor({
		origin,
		...rest
	}: {
		origin?: ChainwebTokenOrigin | undefined;
	} & ConstructorParameters<typeof Token<ChainwebChainId, ChainwebTokenAddress, TMetadata>>[0]) {
		super(rest);
		this.origin = origin;
	}

	public override wrap(): ChainwebToken<TMetadata> {
		return this;
	}

	public override toJSON(): SerializedChainwebToken<TMetadata> {
		return {
			chainId: this.chainId,
			address: this.address,
			symbol: this.symbol,
			name: this.name,
			decimals: this.decimals,
			type: this.type,

			metadata: this.metadata,
		} as const;
	}

	static fromJSON<TMetadata extends CurrencyMetadata>(
		data: Omit<SerializedChainwebToken<TMetadata>, "metadata"> & {
			metadata?: TMetadata;
		}
	): ChainwebToken<TMetadata> {
		return new this(data);
	}
}

export const serializedChainwebTokenSchema = <TMetadata extends {} = CurrencyMetadata>({
	metadata,
}: { metadata?: z.ZodType<TMetadata> } = {}) =>
	z.object({
		chainId: z.number().int().refine(isChainwebChainId),
		address: z.string().refine(isChainwebTokenAddress),
		symbol: z.string(),
		name: z.string(),
		decimals: z.number().int().nonnegative(),
		type: z.literal("token"),

		metadata: (metadata || z.record(z.unknown()).optional().default({})) as z.ZodType<TMetadata>,
	});

export type SerializedChainwebToken<TMetadata extends CurrencyMetadata = CurrencyMetadata> = z.infer<
	ReturnType<typeof serializedChainwebTokenSchema<TMetadata>>
>;
