import OptionsTrade from "./components/options-trade";
import OptionsBar from "./components/options-bar";
import OptionsChart from "./components/options-chart";
import OptionsHistory from "./components/options-history";

export default function OptionsDesktop() {
	return (
		<div className="w-full h-full bg-background flex overflow-hidden">
			<div
				className={cn(
					"w-full flex-grow flex flex-col border-surface-light border-x"
				)}
			>
				<OptionsBar />
				<OptionsChart />
				<OptionsHistory />
			</div>
			<OptionsTrade />
		</div>
	);
}
