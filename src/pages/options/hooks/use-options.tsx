import { optionsTokenPair } from "@/configs/options";

export default function useOptions() {
	const [selectedToken, setSelectedToken] = useState(optionsTokenPair[0]);
	return {
		selectedToken,
		setSelectedToken,
	};
}
