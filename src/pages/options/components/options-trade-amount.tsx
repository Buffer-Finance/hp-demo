import DisplayNumber from "@/components/global/display-number";
import InputAmountCurrency from "@/components/ui-custom/input-amount-currency";
import { Button } from "@/components/ui/button";
import { getTokensInfo, TokenInfo } from "@/configs/tokens";

const currencies = getTokensInfo({ symbols: ["ETH", "USDT"] });
export default function OptionsAmount() {
	const [balance] = useState(1000); // Example balance
	const [value, setValue] = useState("0"); // Initial amount input value
	const [currency, setCurrency] = useState(currencies[0] as TokenInfo); // Default currency

	// Handle change of currency (for example, toggle between two currencies)
	const changeCurrency = (address: string) => {
		const c = currencies.find((p) => p?.address === address);
		if (c) {
			setCurrency(c);
		}
	};

	return (
		<div>
			<InputAmountCurrency
				balance={balance}
				value={value}
				setValue={setValue}
				currencies={currencies}
				currency={currency}
				changeCurrency={changeCurrency}
			/>
			<div className="flex justify-between text-sm mt-2">
				<div>Payout</div>
				<div>Profit</div>
			</div>
			<div className="flex items-start text-lg justify-between">
				<div className="flex items-start gap-1">
					<DisplayNumber
						value={"351898.231"}
						suffixNode="USDC"
						className="text-white"
					/>
					<span className="text-sm">1.6x</span>
				</div>
				<DisplayNumber
					value={"111898.231"}
					suffixNode="USDC"
					className="text-accent-green"
				/>
			</div>
			<Button className="w-full mt-4">Connect Wallet</Button>
		</div>
	);
}
