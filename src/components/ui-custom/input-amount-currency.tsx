import type React from "react";
import type { TokenInfo } from "@/configs/tokens";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { WalletIcon } from "lucide-react";

export interface InputAmountCurrencyProps {
	balance: number;
	value: string;
	setValue: (value: string) => void;
	currency: TokenInfo;
	currencies: TokenInfo[];
	changeCurrency: (address: string) => void;
}

export default function InputAmountCurrency({
	balance,
	value,
	setValue,
	currencies,
	currency,
	changeCurrency,
}: InputAmountCurrencyProps) {
	const handleMaxClick = () => {
		setValue(balance.toString());
	};

	// Real-time input sanitization to allow only valid decimal numbers
	const handleInputSanitize = (e: React.FormEvent<HTMLInputElement>) => {
		let inputValue = e.currentTarget.value;

		// Allow only numbers and a single decimal point
		inputValue = inputValue.replace(/[^0-9.]/g, "");

		// Ensure there's only one decimal point
		const parts = inputValue.split(".");
		if (parts.length > 2) {
			inputValue = `${parts[0]}.${parts.slice(1).join("")}`;
		}

		// Update the form field value with sanitized input
		setValue(inputValue);
	};

	return (
		<div className="flex flex-col gap-2 mt-2">
			<div className="flex justify-between items-center text-sm text-foreground">
				<span>Amount</span>
				<span className="flex items-center gap-2">
					<WalletIcon width={16} />
					<span className="text-muted-foreground">
						{balance} {currency.symbol}
					</span>
				</span>
			</div>

			<div className="flex border border-input bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring items-center gap-1 p-0 rounded-md">
				<Input
					className="flex-1 text-white bg-transparent !border-none !ring-0 placeholder:text-muted-foreground"
					placeholder="0.00"
					value={value} // Pass the value prop directly
					onInput={handleInputSanitize} // Sanitize input in real-time
				/>
				<Button
					type="button"
					variant={"secondary2"}
					className="!px-2 h-8"
					onClick={handleMaxClick}
				>
					Max
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant={"ghost"}
							className="h-full !px-2 min-w-[75px] !gap-1 justify-between text-white"
						>
							{currency.symbol}
							<CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuRadioGroup
							value={currency.address}
							onValueChange={changeCurrency}
						>
							{currencies.map((c) => (
								<DropdownMenuRadioItem
									className="text-white"
									key={c.address}
									value={c.address}
								>
									{c.symbol}
								</DropdownMenuRadioItem>
							))}
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
