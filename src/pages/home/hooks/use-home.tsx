import { getTokensInfo } from "@/configs/tokens";
import { defaultTickerData, useBinancePriceData } from "@/hooks/use-price";

const tokens = getTokensInfo({ symbols: ["BTC", "ETH", "SOL"] });
console.log();
const pricesSymbol = tokens.map((index) => index.priceSymbol).filter((index) => !!index);

export default function useHome() {
	const { data: markets, refetch: refetchMarkets } =
		useBinancePriceData(pricesSymbol);

	const tokensPrice = useMemo(
		() =>
			tokens.map((t) => {
				const market =
					markets &&
					markets.length &&
					markets.find((index) => index.symbol === t.priceSymbol);
				return {
					...t,
					price: market ? market : defaultTickerData,
				};
			}),
		[tokens, markets]
	);

	return {
		tokensPrice,
		refetchMarkets,
	};
}
