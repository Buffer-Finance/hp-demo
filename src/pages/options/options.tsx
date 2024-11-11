import { isGteLg, useBreakpoint } from "@/hooks/use-breakpoint";
import OptionsDesktop from "./options-desktop";
import OptionsMobile from "./options-mobile";

export default function Options() {
	const breakpoint = useBreakpoint();

	if (isGteLg(breakpoint)) return <OptionsDesktop />;
	return <OptionsMobile />;
}
