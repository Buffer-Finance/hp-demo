import { TrendingUp, TrendingDown } from "lucide-react";
import { mockTrades, type Trade } from "../hooks/data";

export default function HomeFeatures() {
	const [trades, setTrades] = useState(mockTrades);

	// Simulate live updates
	useEffect(() => {
		const interval = setInterval(() => {
			const coins = [
				{
					name: "BTC",
					image:
						"https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
					price: 66842.98,
					priceRange: 1000,
				},
				{
					name: "ETH",
					image:
						"https://assets.coingecko.com/coins/images/279/small/ethereum.png",
					price: 2551.73,
					priceRange: 100,
				},
				{
					name: "SOL",
					image:
						"https://assets.coingecko.com/coins/images/4128/small/solana.png",
					price: 167.92,
					priceRange: 5,
				},
			];

			const randomCoin = coins[Math.floor(Math.random() * coins.length)];
			if (!randomCoin) return;
			const direction = Math.random() > 0.5 ? "up" : "down";
			const wager = Math.floor(Math.random() * 990) + 10;
			const multiplier = Math.floor(Math.random() * 90) + 10;
			const entryPrice =
				randomCoin.price + (Math.random() * 2 - 1) * randomCoin.priceRange;
			const exitPrice =
				entryPrice +
				(direction === "up" ? 1 : -1) * (Math.random() * randomCoin.priceRange);
			const pnl = ((exitPrice - entryPrice) * wager) / entryPrice;
			const roi = (pnl / wager) * 100;

			const newTrade = {
				id: Date.now().toString(),
				player: `Degen${Math.floor(Math.random() * 999)}`,
				direction,
				entryPrice,
				wager,
				bustPrice:
					entryPrice -
					(direction === "up" ? 1 : -1) * (randomCoin.priceRange / 2),
				multiplier,
				exitPrice,
				pnl,
				roi,
				timestamp: Date.now(),
				coin: randomCoin.name as "BTC" | "ETH" | "SOL",
				coinImage: randomCoin.image,
			} as Trade;

			setTrades((previous) => [newTrade, ...previous.slice(0, -1)]);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<section className="py-12 sm:py-24 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-card via-surface to-card">
				<div className="absolute inset-0 opacity-30">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#152322_0%,_transparent_50%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#98F8E1_0%,_transparent_25%)]" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_#FF6B6B_0%,_transparent_25%)]" />
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
				<div className="bg-surface-light/30 backdrop-blur-sm rounded-lg border border-accent-mint/20">
					<div className="flex items-center justify-between p-4 border-b border-white/10">
						<h3 className="text-lg sm:text-xl font-bold text-accent-light font-playfair">
							Public Bets
						</h3>
						<div className="hidden md:block">
							<button className="text-sm text-foreground hover:text-accent-light">
								Leaderboard
							</button>
						</div>
					</div>

					{/* Mobile View */}
					<div className="block sm:hidden">
						{trades.map((trade) => (
							<div
								key={trade.id}
								className="p-4 border-b border-white/10 animate-slide-down"
							>
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center gap-2">
										<img
											src={trade.coinImage}
											alt={trade.coin}
											className="w-6 h-6 rounded-full"
										/>
										<span className="text-accent-light font-medium">
											{trade.coin}
										</span>
									</div>
									{trade.direction === "up" ? (
										<TrendingUp className="w-4 h-4 text-accent-mint" />
									) : (
										<TrendingDown className="w-4 h-4 text-accent-red" />
									)}
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-foreground">Entry</span>
									<span className="text-accent-light">
										${trade.entryPrice.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-foreground">Wager</span>
									<span className="text-accent-light">
										${trade.wager.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-foreground">P&L</span>
									<span
										className={
											trade.pnl >= 0 ? "text-accent-mint" : "text-accent-red"
										}
									>
										${trade.pnl.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-foreground">ROI</span>
									<span
										className={
											trade.roi >= 0 ? "text-accent-mint" : "text-accent-red"
										}
									>
										{trade.roi.toFixed(2)}%
									</span>
								</div>
							</div>
						))}
					</div>

					{/* Desktop View */}
					<div className="hidden sm:block">
						<table className="w-full">
							<thead>
								<tr className="text-left text-foreground text-sm border-b border-white/10">
									<th className="p-3">Player</th>
									<th className="p-3">Coin</th>
									<th className="p-3">Bet</th>
									<th className="p-3">Entry Price</th>
									<th className="p-3">Wager</th>
									<th className="p-3 hidden md:table-cell">Bust Price</th>
									<th className="p-3 hidden md:table-cell">Multiplier</th>
									<th className="p-3 hidden md:table-cell">Exit Price</th>
									<th className="p-3">P&L</th>
									<th className="p-3">ROI</th>
								</tr>
							</thead>
							<tbody>
								{trades.map((trade) => (
									<tr
										key={trade.id}
										className="border-b border-white/10 text-sm animate-slide-down"
									>
										<td className="p-3 flex items-center gap-2">
											{trade.player}
										</td>
										<td className="p-3">
											<div className="flex items-center gap-2">
												<img
													src={trade.coinImage}
													alt={trade.coin}
													className="w-6 h-6 rounded-full"
												/>
												{trade.coin}
											</div>
										</td>
										<td className="p-3">
											{trade.direction === "up" ? (
												<TrendingUp className="w-4 h-4 text-accent-mint" />
											) : (
												<TrendingDown className="w-4 h-4 text-accent-red" />
											)}
										</td>
										<td className="p-3 text-accent-light">
											${trade.entryPrice.toFixed(2)}
										</td>
										<td className="p-3 text-accent-light">
											${trade.wager.toFixed(2)}
										</td>
										<td className="p-3 text-accent-light hidden md:table-cell">
											${trade.bustPrice.toFixed(2)}
										</td>
										<td className="p-3 text-accent-light hidden md:table-cell">
											x{trade.multiplier.toFixed(2)}
										</td>
										<td className="p-3 text-accent-light hidden md:table-cell">
											{trade.exitPrice ? `$${trade.exitPrice.toFixed(2)}` : "-"}
										</td>
										<td
											className={`p-3 ${trade.pnl >= 0 ? "text-accent-mint" : "text-accent-red"}`}
										>
											${trade.pnl.toFixed(2)}
										</td>
										<td
											className={`p-3 ${trade.roi >= 0 ? "text-accent-mint" : "text-accent-red"}`}
										>
											{trade.roi.toFixed(2)}%
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}
