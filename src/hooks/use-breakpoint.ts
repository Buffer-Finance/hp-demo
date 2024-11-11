import { createBreakpoint } from "react-use";

export const useBreakpoint = createBreakpoint({
	"2xl": 1600,
	xl: 1200,
	lg: 992,
	md: 640,
	// sm: 576,
	xs: 480,
});

// Greater than or equal screen size
export const isGteXs = (screen: string) => {
	return ["xs", "sm", "md", "lg", "xl", "2xl"].includes(screen);
};

export const isGteSm = (screen: string) => {
	return ["sm", "md", "lg", "xl", "2xl"].includes(screen);
};

export const isGteMd = (screen: string) => {
	return ["md", "lg", "xl", "2xl"].includes(screen);
};

export const isGteLg = (screen: string) => {
	return ["lg", "xl", "2xl"].includes(screen);
};

export const isGteXl = (screen: string) => {
	return ["xl", "2xl"].includes(screen);
};
