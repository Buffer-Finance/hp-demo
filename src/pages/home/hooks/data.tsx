export interface Market {
	symbol: string;
	name: string;
	price: number;
	change24h: number;
	volume24h: number;
	high24h: number;
	low24h: number;
	image: string;
	leverage: string;
}

export interface Trade {
	id: string;
	player: string;
	direction: "up" | "down";
	entryPrice: number;
	wager: number;
	bustPrice: number;
	multiplier: number;
	exitPrice: number | null;
	pnl: number;
	roi: number;
	timestamp: number;
	coin: "BTC" | "SOL" | "ETH";
	coinImage: string;
}

export const markets: Market[] = [
	{
		symbol: "BTC/USDC",
		name: "Bitcoin",
		price: 66842.98,
		change24h: -2.7,
		volume24h: 1180000000,
		high24h: 67866.13,
		low24h: 65574.24,
		leverage: "1000x",
		image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
	},
	{
		symbol: "SOL/USDC",
		name: "Solana",
		price: 167.92,
		change24h: -5.23,
		volume24h: 74000000,
		high24h: 178.52,
		low24h: 165.21,
		leverage: "1000x",
		image: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
	},
	{
		symbol: "ETH/USDC",
		name: "Ethereum",
		price: 2551.73,
		change24h: -2.77,
		volume24h: 18000000,
		high24h: 2652.0,
		low24h: 2441.0,
		leverage: "1000x",
		image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
	},
];

export const defaultMarket = markets[0];

export const timeframes = [
	"Tick",
	"5s",
	"15s",
	"30s",
	"1m",
	"3m",
	"5m",
	"15m",
	"30m",
	"1h",
	"2h",
	"4h",
	"6h",
	"8h",
	"12h",
	"1d",
];

export const mockTrades: Trade[] = [
	{
		id: "1",
		player: "JKbblue",
		direction: "up",
		entryPrice: 66807.29,
		bustPrice: 66165.33,
		wager: 10.0,
		multiplier: 100.0,
		exitPrice: 66822.28,
		pnl: 0.15,
		roi: 1.5,
		timestamp: Date.now() - 5000,
		coin: "BTC",
		coinImage: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
	},
	{
		id: "2",
		player: "JKbblue",
		direction: "up",
		entryPrice: 2551.73,
		bustPrice: 2541.73,
		wager: 10.0,
		multiplier: 100.0,
		exitPrice: 2561.73,
		pnl: 0.1,
		roi: 1.0,
		timestamp: Date.now() - 10000,
		coin: "ETH",
		coinImage:
			"https://assets.coingecko.com/coins/images/279/small/ethereum.png",
	},
	{
		id: "3",
		player: "smile85",
		direction: "up",
		entryPrice: 168.69,
		bustPrice: 167.07,
		wager: 5.0,
		multiplier: 100.0,
		exitPrice: 168.39,
		pnl: -0.87,
		roi: -17.4,
		timestamp: Date.now() - 15000,
		coin: "SOL",
		coinImage:
			"https://assets.coingecko.com/coins/images/4128/small/solana.png",
	},
];

export const stats = [
	{ label: "Total Volume", value: "$2.5B+" },
	{ label: "Active Users", value: "50K+" },
	{ label: "Avg. Daily Volume", value: "$150M" },
];
