import { defaultChain } from "@/features/wagmi";
import { ChainId } from "./chains";
import { isTestnet } from "./env";

export interface BaseToken {
	address: string;
	dp: number;
}

export type BaseTokens = { [key in ChainId]?: BaseToken };

export interface TokenInfo extends BaseToken {
	name: string;
	symbol: string;
	priceSymbol: string;
	icon?: React.ComponentType<{ className?: string }>;
}

export const tokens = {
	USDT: {
		name: "USDT (TetherUS)",
		symbol: "USDT",
		networks: {
			mainnet: {},
			testnet: {
				[ChainId.ARB_TN]: {
					address: "0x8b7983741AF727Aa37485F69B53b3A347e996a14",
					dp: 18,
				},
			},
		},
	} as const,
	BTC: {
		name: "Bitcoin",
		symbol: "BTC",
		icon: ICTokenBTC,
		priceSymbol: "BTCUSDT",
		networks: {
			mainnet: {},
			testnet: {
				[ChainId.ARB_TN]: {
					address: "0x8b7983741AF727Aa37485F69B53b3A347e996a16",
					dp: 18,
				},
			},
		},
	} as const,
	ETH: {
		name: "Ethereum",
		symbol: "ETH",
		icon: ICTokenETH,
		priceSymbol: "ETHUSDT",
		networks: {
			mainnet: {},
			testnet: {
				[ChainId.ARB_TN]: {
					address: "0x8b7983741AF727Aa37485F69B53b3A347e996a15",
					dp: 18,
				},
			},
		},
	} as const,
	SOL: {
		name: "Solana",
		symbol: "SOL",
		icon: ICTokenSol,
		priceSymbol: "SOLUSDT",
		networks: {
			mainnet: {},
			testnet: {},
		},
	} as const,
} as const satisfies {
	[key: string]: {
		name: string;
		symbol: string;
		icon?: React.FC;
		priceSymbol?: string;
		networks: { [key in "mainnet" | "testnet"]: BaseTokens };
	};
};

export const getTokensInfo = ({
	chainId = defaultChain.id,
	symbols,
}: {
	chainId?: ChainId;
	symbols: Array<keyof typeof tokens>;
}): TokenInfo[] => {
	const networkType = isTestnet ? "testnet" : "mainnet";

	return symbols
		.map((symbol) => {
			const token = tokens[symbol];
			const networkData = (token.networks[networkType] as BaseTokens)[chainId];

			return {
				name: token.name,
				symbol: token.symbol,
				icon: "icon" in token ? token.icon : undefined,
				address: networkData?.address ?? "",
				priceSymbol: "priceSymbol" in token ? token.priceSymbol : "",
				dp: networkData?.dp ?? 18,
			};
		})
		.filter((index) => index !== null);
};
