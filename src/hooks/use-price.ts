import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type TickerData = {
	symbol: string;
	priceChange: string; // Absolute price change
	priceChangePercent: string; // Relative price change in percent
	weightedAvgPrice: string; // QuoteVolume / Volume
	openPrice: string;
	highPrice: string;
	lowPrice: string;
	lastPrice: string;
	volume: string;
	quoteVolume: string; // Sum of (price * volume) for all trades
	openTime: number; // Open time for ticker window
	closeTime: number; // Close time for ticker window
	firstId: number; // First trade ID
	lastId: number; // Last trade ID
	count: number; // Number of trades in the interval
};

export const defaultTickerData: TickerData = {
	symbol: "",
	priceChange: "0",
	priceChangePercent: "0",
	weightedAvgPrice: "0",
	openPrice: "0",
	highPrice: "0",
	lowPrice: "0",
	lastPrice: "0",
	volume: "0",
	quoteVolume: "0",
	openTime: 0,
	closeTime: 0,
	firstId: 0,
	lastId: 0,
	count: 0,
};

const fetchSymbolsData = async (symbols: string[]) => {
	if (symbols.filter((index) => !!index).length <= 0) return [];

	const response = await axios.get<any, { data: TickerData[] }>(
		`https://api.binance.com/api/v3/ticker/24hr`,
		{
			params: {
				symbols: JSON.stringify(symbols),
			},
		}
	);
	return response.data;
};

export const useBinancePriceData = (symbols: string[]) => {
	return useQuery({
		queryKey: ["binancePriceData", symbols],
		queryFn: () => fetchSymbolsData(symbols),
		refetchInterval: 20000,
	});
};
