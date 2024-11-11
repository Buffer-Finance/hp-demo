import { CaretUpIcon } from "@radix-ui/react-icons";
import OptionsHistoryTrades from "./options-history-trades";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const baseTabs = [
	{
		name: "Trades",
		value: 1,
		component: OptionsHistoryTrades,
	},
	{
		name: "History",
		value: 2,
		component: OptionsHistoryTrades,
	},
	{
		name: "Cancelled",
		value: 3,
		component: OptionsHistoryTrades,
	},
	// {
	// 	isLine: true,
	// 	value: -1,
	// },
	// {
	// 	name: "PFTrades",
	// 	value: 4,
	// 	component: OptionsHistoryTrades,
	// },
	// {
	// 	name: "Platform History",
	// 	value: 5,
	// 	component: OptionsHistoryTrades,
	// },
];

export default function OptionsHistory({
	defaultOpenCollapsible = false,
}: {
	defaultOpenCollapsible?: boolean;
}) {
	const [activeTab, setActiveTab] = useState(1);
	const ActiveComponent = useMemo(
		() => baseTabs.find((tab) => tab.value === activeTab)?.component,
		[activeTab]
	);
	const [isOpen, setIsOpen] = useState(defaultOpenCollapsible);

	return (
		<Collapsible className="p-3" open={isOpen} onOpenChange={setIsOpen}>
			<div className="bg-surface-light flex transition-colors items-center gap-3 px-2 py-1 justify-between text-sm rounded-md">
				<div className="flex items-center gap-3 text-xs sm:text-sm">
					{baseTabs.map((t) => {
						// if (t.isLine) return <Separator orientation="vertical" />;
						return (
							<div
								key={t.value}
								onClick={() => {
									setActiveTab(t.value);
								}}
								className={`cursor-pointer transition-colors ${
									activeTab === t.value
										? "text-accent-mint"
										: "text-muted-foreground hover:text-white"
								}`}
							>
								{t.name}
							</div>
						);
					})}
				</div>
				<CollapsibleTrigger asChild>
					<Button variant={"ghost"} className="flex gap-1 items-center">
						<span className="hidden sm:block">Hide Position</span>
						<CaretUpIcon
							className={cn(
								isOpen ? "rotate-180" : "rotate-0",
								"transition-transform"
							)}
						/>
					</Button>
				</CollapsibleTrigger>
			</div>

			<CollapsibleContent className="collapsible-content">
				<div className="pt-3">{ActiveComponent && <ActiveComponent />}</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
