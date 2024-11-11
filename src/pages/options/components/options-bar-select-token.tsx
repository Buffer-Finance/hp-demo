import { ChevronDownIcon } from "@radix-ui/react-icons";
import useOptions from "../hooks/use-options";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import {
	Table,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	TableHeader,
} from "@/components/ui/table";
import DisplayNumber from "@/components/global/display-number";
import { isGteMd, useBreakpoint } from "@/hooks/use-breakpoint";

const assetData = [
	{
		icon: ICTokenBtc,
		asset: "BTC-USD",
		change: "75114.45",
		changePercentage: 0.9,
		volume: "15.90 USDC",
		openUp: "5.30 USDC",
		openDown: "3.40 USDC",
	},
	{
		icon: ICTokenEth,
		asset: "ETH-USD",
		change: "2821.22",
		changePercentage: 6.9,
		volume: "0.00 USDC",
		openUp: "0.00 USDC",
		openDown: "0.00 USDC",
	},
];

export default function OptionsBarSelectToken() {
	const { selectedToken } = useOptions();
	const breakpoint = useBreakpoint();

	return (
		<Popover>
			{selectedToken && (
				<PopoverTrigger>
					<div className="flex items-center py-2 gap-2 text-accent-light">
						{<selectedToken.token.icon className="w-5 h-5" />}
						{selectedToken.name}
						<ChevronDownIcon />
					</div>
				</PopoverTrigger>
			)}
			<PopoverContent
				align="start"
				className="w-screen md:w-[570px]"
				sideOffset={8}
			>
				<div className="flex-row-center">
					<Input placeholder="Search coins..." />
					<Button className="w-9 h-9" variant={"secondary"}>
						<SearchIcon />
					</Button>
				</div>
				<Table className="mt-2 text-sm">
					<TableHeader>
						<TableRow className="border-none">
							<TableHead align="left">Asset</TableHead>
							<TableHead align="left">24h Change</TableHead>
							<TableHead align="left">24h Volume</TableHead>
							{isGteMd(breakpoint) && (
								<TableHead align="left">Open Up</TableHead>
							)}
							{isGteMd(breakpoint) && (
								<TableHead align="left">Open Down</TableHead>
							)}
						</TableRow>
					</TableHeader>
					<TableBody>
						{assetData.map((item, index) => (
							<TableRow className="border-none" key={index}>
								<TableCell className="text-accent-light">
									<div className="flex gap-2 items-center">
										<item.icon className="w-5 h-5" />
										<div className="text-nowrap">{item.asset}</div>
									</div>
								</TableCell>
								<TableCell className="text-accent-light">
									<DisplayNumber value={item.change} defaultValue="-" />
									<span
										className={`ml-2 ${item.changePercentage >= 0 ? "text-accent-green" : "text-accent-red"}`}
									>
										(
										<DisplayNumber
											prefixNode={item.changePercentage > 0 ? "+" : "-"}
											suffixNode="%"
											value={item.changePercentage}
											defaultValue="-"
											className="gap-0"
										/>
										)
									</span>
								</TableCell>
								<TableCell>
									<DisplayNumber value={item.volume} defaultValue="-" />
								</TableCell>
								{isGteMd(breakpoint) && (
									<TableCell>
										<DisplayNumber value={item.openUp} defaultValue="-" />
									</TableCell>
								)}
								{isGteMd(breakpoint) && (
									<TableCell>
										<DisplayNumber value={item.openUp} defaultValue="-" />
									</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</PopoverContent>
		</Popover>
	);
}
