import { Flame } from "lucide-react";
import HomeBannerPartners from "./home-banner-partners";
import HomeBannerTradingAnimation from "./home-banner-trading-animation";
import useHome from "../hooks/use-home";
import DisplayNumber from "@/components/global/display-number";

export default function HomeBanner() {
	const { tokensPrice } = useHome();
	const [currentMarket, setCurrentMarket] = useState(0);
	const [showPrice, setShowPrice] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowPrice(false);
			setTimeout(() => {
				if (!tokensPrice) return;

				setCurrentMarket((previous) => (previous + 1) % tokensPrice.length);
				setShowPrice(true);
			}, 500);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="relative min-h-[85vh] bg-background pt-20 sm:pt-24 md:pt-32 pb-16 overflow-hidden px-4">
			{/* Dynamic Background */}
			<HomeBannerTradingAnimation />

			<div className="relative max-w-6xl mx-auto">
				{/* Main Content */}
				<div className="text-center mb-16">
					<h1 className="text-3xl font-playfair sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-accent-light tracking-tight leading-tight px-2">
						Fueling the Edge for <br />
						<span className="bg-gradient-to-r from-accent-mint to-accent-red bg-clip-text text-transparent">
							Hyperliquid Traders
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
						Launch memes, Ape Spot, Futures & Options
					</p>

					{/* Live Price Ticker */}
					<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 mb-8 sm:mb-12 px-2">
						{tokensPrice &&
							tokensPrice.map((token, index) => (
								<div
									key={token.symbol}
									className={`transition-all duration-500 transform
                  ${index === currentMarket ? "scale-110 opacity-100" : "scale-90 opacity-40"}
                `}
								>
									<div className="flex items-center gap-2">
										{token.icon && <token.icon className={cn("w-8 h-8")} />}

										<div className="text-left">
											<div className="text-xs md:text-sm text-foreground">
												{token.symbol}
											</div>
											<div
												className={`text-sm sm:text-base md:text-xl text-accent-light font-bold ${showPrice ? "animate-fade-in" : "opacity-0"}`}
											>
												<DisplayNumber
													value={token.price.lastPrice}
													prefixNode="$"
													className="gap-0"
												/>
											</div>
										</div>
										<div
											className={`text-xs md:text-sm ${Number(token.price.priceChange) >= 0 ? "text-accent-mint" : "text-accent-red"}`}
										>
											<DisplayNumber
												value={token.price.priceChangePercent}
												prefixNode={
													Number(token.price.priceChange) >= 0 ? "+" : ""
												}
												suffixNode="%"
												className="gap-0"
											/>
										</div>
									</div>
								</div>
							))}
					</div>

					{/* CTA Button */}
					<Link
						to="/options"
						className="px-6 w-fit sm:px-8 py-3 sm:py-3 bg-accent-mint text-surface rounded-lg text-base sm:text-lg hover:bg-accent-mint/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-mint/20 flex items-center gap-2 mx-auto mb-12 sm:mb-16"
					>
						<Flame className="w-5 h-5 sm:w-6 sm:h-6" />
						Ape In
					</Link>

					{/* Feature Highlights */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-6xl mx-auto px-4 sm:px-6">
						<div className="bg-surface/30 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-accent-mint/20 transform hover:-translate-y-1 transition-all">
							<div className="text-2xl sm:text-3xl md:text-4xl mb-4">🚀</div>
							<h3 className="text-base sm:text-lg md:text-xl font-playfair font-bold text-accent-light mb-2">
								Moon or Bust
							</h3>
							<p className="text-foreground text-sm md:text-base">
								1000x leverage for the true degen experience
							</p>
						</div>
						<div className="bg-surface/30 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-accent-mint/20 transform hover:-translate-y-1 transition-all">
							<div className="text-2xl sm:text-3xl md:text-4xl mb-4">🎰</div>
							<h3 className="text-base sm:text-lg md:text-xl font-playfair font-bold text-accent-light mb-2">
								High Stakes
							</h3>
							<p className="text-foreground text-sm md:text-base">
								Bet big with deep liquidity pools
							</p>
						</div>
						<div className="bg-surface/30 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-accent-mint/20 transform hover:-translate-y-1 transition-all">
							<div className="text-2xl sm:text-3xl md:text-4xl mb-4">🔥</div>
							<h3 className="text-base sm:text-lg md:text-xl font-playfair font-bold text-accent-light mb-2">
								Degen Paradise
							</h3>
							<p className="text-foreground text-sm md:text-base">
								Trade bluechips and memes
							</p>
						</div>
					</div>

					{/* Partners Section */}
					<div className="px-2">
						<p className="font-playfair text-white/60 mb-6 sm:mb-8 text-xs md:text-sm uppercase tracking-wider font-medium">
							BACKED BY INDUSTRY DEGENS
						</p>
						<HomeBannerPartners />
					</div>
				</div>
			</div>
		</div>
	);
}
