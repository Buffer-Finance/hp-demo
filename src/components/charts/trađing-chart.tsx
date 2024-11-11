import {
	widget,
	ChartingLibraryWidgetOptions,
} from "../../../public/charting_library";

const configDefaults = {
	library_path: "/charting_library/",
	custom_css_url: "/charting_library/style.css",
	theme: "dark",
	interval: "1",
	disabled_features:
		window.innerWidth < 600
			? [
					"left_toolbar",
					"header_compare",
					"header_symbol_search",
					"header_widget",
					"go_to_date",
					"display_market_status",
				]
			: [
					"header_compare",
					"header_symbol_search",
					"header_widget",
					"go_to_date",
					"display_market_status",
				],
} as ChartingLibraryWidgetOptions;

export default function TradingChart() {
	const containerDivRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerDivRef.current) return;
		const { UDFCompatibleDatafeed } = (window as any).Datafeeds;

		new widget({
			...configDefaults,

			locale: "en",
			datafeed: new UDFCompatibleDatafeed(
				"https://demo-feed-data.tradingview.com"
			),

			timeframe: "200",
			container: containerDivRef.current,

			enabled_features: ["header_saveload"],
			load_last_chart: true,

			symbol: "AAPL",
			overrides: {
				"paneProperties.backgroundGradientStartColor": "#0f2320",
				"paneProperties.backgroundGradientEndColor": "#0f2320",
			},
			studies_overrides: {
				"volume.volume.color.0": "hsl(var(--accent-red))", // Down volume color
				"volume.volume.color.1": "hsl(var(--accent-mint))", // Up volume color
			},
		});
	}, []);

	return (
		<div
			id="chart-container"
			ref={containerDivRef}
			className="w-full h-full max-h-full"
		></div>
	);
}
