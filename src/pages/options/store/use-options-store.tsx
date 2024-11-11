import { create } from "zustand";

interface TradeTableSelected {
	marketId?: string;
	strike?: number;
	type: "above" | "below";
}

export interface OptionsState {
	tradeTableSelected: TradeTableSelected | null;
	updateTradeTableSelected: (selected: TradeTableSelected | null) => void;
}

const useOptionsStore = create<OptionsState>((set) => ({
	tradeTableSelected: null,
	updateTradeTableSelected: (selected) => {
		set({ tradeTableSelected: selected });
	},
}));

export default useOptionsStore;
