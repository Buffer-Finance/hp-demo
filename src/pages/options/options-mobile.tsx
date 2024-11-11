import OptionsBar from "./components/options-bar";
import OptionsChart from "./components/options-chart";
import OptionsHistory from "./components/options-history";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OptionsTrade from "./components/options-trade";
export default function OptionsMobile() {
	return (
		<div className="w-full h-full bg-background flex overflow-hidden flex-col">
			<OptionsBar />
			<Tabs defaultValue="trade" className="p-2 flex-grow flex flex-col">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="trade">Trade</TabsTrigger>
					<TabsTrigger value="chart">Price Chart</TabsTrigger>
				</TabsList>
				<TabsContent value="trade">
					<OptionsTrade className="!w-full" />
				</TabsContent>
				<TabsContent value="chart" className="flex-grow">
					<OptionsChart />
				</TabsContent>
			</Tabs>
			<OptionsHistory defaultOpenCollapsible />
		</div>
	);
}
