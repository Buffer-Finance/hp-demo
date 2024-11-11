import DisplayNumber from "@/components/global/display-number";
import OptionsBarSelectToken from "./options-bar-select-token";
import OptionsBarDetailPrice from "./options-bar-detail-price";
import { isGteLg, useBreakpoint } from "@/hooks/use-breakpoint";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export default function OptionsBar() {
	const breakpoint = useBreakpoint();

	return (
		<div className="flex justify-between w-full lg:w-fit lg:justify-start items-center gap-5 text-xs xl:text-sm xl:gap-12 py-2 px-3">
			<OptionsBarSelectToken />
			{isGteLg(breakpoint) ? (
				<>
					<DisplayNumber value={123904.123} className="text-lg text-white" />
					<OptionsBarDetailPrice />
				</>
			) : (
				<>
					<Popover>
						<PopoverTrigger>
							<Button variant="ghost" className="hover:bg-transparent">
								<DisplayNumber
									value={123904.123}
									className="text-lg text-white"
								/>
								<DisplayNumber
									value={"0.84"}
									prefixNode="("
									suffixNode={"%)"}
									className="gap-0 text-accent-green"
								/>
								<ChevronDownIcon />
							</Button>
						</PopoverTrigger>
						<PopoverContent align="start" className="w-screen" sideOffset={8}>
							<div className="grid grid-cols-2 px-3 pb-3 gap-3 text-sm">
								<OptionsBarDetailPrice />
							</div>
						</PopoverContent>
					</Popover>
				</>
			)}
		</div>
	);
}
