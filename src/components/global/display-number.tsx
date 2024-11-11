import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { displayNumber, type NumberValue } from "@/features/number";
import { isGteXl, useBreakpoint } from "@/hooks/use-breakpoint";
import type BigNumber from "bignumber.js";

export interface NumberProps {
	displayDp?: number;
	roundingMode?: BigNumber.RoundingMode;
	value?: NumberValue | null;
	defaultValue?: React.ReactNode;
	prefixNode?: React.ReactNode;
	suffixNode?: React.ReactNode;
	className?: string;
	tooltip?: boolean;
}

export default function DisplayNumber({
	value,
	prefixNode,
	suffixNode,
	defaultValue = "0",
	roundingMode,
	displayDp = 2,
	className,
	tooltip = true,
}: NumberProps) {
	const breakpoint = useBreakpoint();
	return (
		<div className={cn("inline-flex items-center gap-1", className)}>
			{prefixNode}
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<span>
							{value
								? displayNumber(value, { displayDp, roundingMode })
								: defaultValue}
						</span>
					</TooltipTrigger>

					{value && tooltip && isGteXl(breakpoint) ? (
						<TooltipContent>
							{displayNumber(value, { displayDp: 8, roundingMode })}
						</TooltipContent>
					) : null}
				</Tooltip>
			</TooltipProvider>
			{suffixNode}
		</div>
	);
}
