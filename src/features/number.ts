import BigNumber from "bignumber.js";

const stringToNumberString = (input: string) => input.replace(/[^0-9-.]/g, "");

type DisplayDpOptions = {
	displayDp: number;
	roundingMode?: BigNumber.RoundingMode;
};

export type NumberValue = string | number | bigint | BigNumber;

type NumberValueArgs = [
	value: NumberValue,
	decimals?: number,
	options?: DisplayDpOptions,
];

const bigNumberFrom = (value: NumberValue) => {
	if (BigNumber.isBigNumber(value)) return value;
	if (typeof value === "string")
		return new BigNumber(stringToNumberString(value));
	if (typeof value === "number") return new BigNumber(value);
	if (typeof value === "bigint") return new BigNumber(value.toString());
	return new BigNumber(String(value));
};

export const toBigNumber = (...args: NumberValueArgs): BigNumber => {
	const [value, decimals, options] = args;
	const bigNumber = bigNumberFrom(value).shiftedBy(-(decimals ?? 0));
	return options
		? bigNumber.decimalPlaces(
				options.displayDp,
				options?.roundingMode ?? BigNumber.ROUND_DOWN
			)
		: bigNumber;
};

export const displayNumber = (
	...args: [value: NumberValue, options?: DisplayDpOptions]
) => toBigNumber(args[0], 0, args[1]).toFormat();
