import { z } from "zod";

export const createNumberStringSchema = ({
	min,
	max,
	msgInvalid: messageInvalid = "Invalid Value",
	msgMin: messageMin = `Min Value: ${min}`,
	msgMax: messageMax = `Max Value: ${max}`,
}: {
	min?: number;
	max?: number;
	msgInvalid?: string;
	msgMin?: string;
	msgMax?: string;
}) => {
	const schema = z
		.union([z.string(), z.number()])
		.transform((value) => {
			return typeof value === "number" ? String(value) : value;
		})
		.refine((value) => /^(?:\d+(?:\.\d+)?|\.\d+)$/.test(value), {
			message: messageInvalid,
		})
		.refine(
			(value) => {
				const numberValue = Number(value);
				return !min || numberValue >= min;
			},
			{
				message: messageMin,
			}
		)
		.refine(
			(value) => {
				const numberValue = Number(value);
				return !max || numberValue <= max;
			},
			{
				message: messageMax,
			}
		);

	return schema;
};

export const createEmailSchema = () => {
	return z.string().email("Invalid Email Address").min(1, "Email is Required");
};

export const createEvmAddressSchema = () => {
	return z
		.string()
		.min(1, "Address is Required")
		.regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Address")
		.transform((value) => value.toLowerCase());
};
