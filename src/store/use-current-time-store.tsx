import { create } from "zustand";

export interface CurrentTimeState {
	currentTime: Date;
	updateCurrentTime: () => void;
}

const useCurrentTimeStore = create<CurrentTimeState>((set) => ({
	currentTime: new Date(),
	updateCurrentTime: () => {
		set({ currentTime: new Date() });
	},
}));

const startUpdatingTime = () => {
	setInterval(() => {
		useCurrentTimeStore.getState().updateCurrentTime();
	}, 1000);
};
startUpdatingTime();

export default useCurrentTimeStore;
