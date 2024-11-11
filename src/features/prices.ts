export const getROI = (totalFee?: number | null) => {
	if (!totalFee) return null;
	return ((1 - totalFee) / totalFee) * 100;
};

export const getMultiplier = (totalFee?: number | null) => {
	if (!totalFee) return null;
	return (1 - totalFee) / totalFee + 1;
};
