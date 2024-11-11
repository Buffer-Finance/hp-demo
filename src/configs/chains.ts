export enum ChainId {
	ARB_MN = 42161,
	ARB_TN = 421614,
	BNB_MN = 56,
	BNB_TN = 97,
	OP_MN = 10,
	OP_TN = 11155420,
}

interface ChainInfo {
	name: string;
	exploreUrl: string;
}

const ChainNameInfoMap: { [key in ChainId]: ChainInfo } = {
	[ChainId.ARB_MN]: {
		name: "ARB",
		exploreUrl: "https://arbiscan.io/",
	},
	[ChainId.ARB_TN]: {
		name: "ARB",
		exploreUrl: "https://sepolia.arbiscan.io/",
	},
	[ChainId.BNB_MN]: {
		name: "BNB",
		exploreUrl: "https://bscscan.com/",
	},
	[ChainId.BNB_TN]: {
		name: "BNB",
		exploreUrl: "https://testnet.bscscan.com/",
	},
	[ChainId.OP_MN]: {
		name: "OP ",
		exploreUrl: "https://optimistic.etherscan.io/",
	},
	[ChainId.OP_TN]: {
		name: "OP ",
		exploreUrl: "httpshttps://sepolia-optimism.etherscan.io/",
	},
};

export function mapChainIdToInfo(chain: ChainId) {
	return ChainNameInfoMap[chain] || null;
}
