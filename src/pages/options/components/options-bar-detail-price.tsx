import DisplayNumber from "@/components/global/display-number";
import { Progress } from "@/components/ui/progress";

export default function OptionsBarDetailPrice() {
	return (
		<>
			<div className="flex flex-col">
				<div>24h Change</div>
				<DisplayNumber
					value={"0.84"}
					suffixNode={"%"}
					className="gap-0 text-accent-green"
				/>
			</div>
			<div className="flex flex-col">
				<div>Max Trade Size</div>
				<DisplayNumber
					value={1000.123}
					suffixNode={"USDC"}
					className="text-accent-light"
				/>
			</div>
			<div className="flex flex-col">
				<div>Multiplier</div>
				<DisplayNumber
					className="!gap-0 text-accent-light"
					value={"1.55"}
					suffixNode={"x"}
				/>
			</div>
			<div className="flex flex-col">
				<div className="flex gap-1">
					Max OI:
					<DisplayNumber
						value={"500"}
						suffixNode={"USDC"}
						className="text-accent-light"
					/>
				</div>
				<div className="flex items-center gap-1">
					<Progress
						value={7.8}
						max={10}
						className="h-1.5 w-full max-w-[65px] mt-1"
					/>
					<DisplayNumber
						value={"7.84"}
						suffixNode={"%"}
						className="gap-0 text-accent-light"
					/>
				</div>
			</div>
		</>
	);
}
