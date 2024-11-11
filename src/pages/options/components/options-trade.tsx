import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { getOptionsSelectExpiry } from "@/configs/options";
import useCurrentTimeStore from "@/store/use-current-time-store";
import { OptionsTradeTable } from "./options-trade-table";
import OptionsAmount from "./options-trade-amount";

interface OptionsTradeProps {
	className?: string;
}

export default function OptionsTrade({ className }: OptionsTradeProps) {
	const currentTime = useCurrentTimeStore((s) => s.currentTime);
	const selectItems = useMemo(
		() => getOptionsSelectExpiry(currentTime),
		[currentTime]
	);
	const [selectExpiry, setSelectExpiry] = useState(
		selectItems[0]?.value.toString()
	);

	// cover case time selected is expired
	useEffect(() => {
		if (
			selectExpiry &&
			!selectItems.find((p) => p.value === Number(selectExpiry))
		) {
			setSelectExpiry(selectItems[0]?.value.toString());
		}
	}, [selectItems, selectExpiry]);

	return (
		<div className={cn("w-[420px] p-3 shrink-0", className)}>
			<div className="flex items-center justify-between gap-4">
				<div className="shrink-0">Select Expiry (UTC):</div>
				<Select value={selectExpiry} onValueChange={setSelectExpiry}>
					<SelectTrigger className="w-full max-w-60">
						<SelectValue placeholder="Theme" />
					</SelectTrigger>
					<SelectContent>
						{selectItems.map((item) => (
							<SelectItem value={item.value.toString()}>
								{item.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<OptionsTradeTable />
			<OptionsAmount />
		</div>
	);
}
