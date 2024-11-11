import { isTestnet, walletConnectProjectId } from "@/configs/env";
import { connectorsForWallets, darkTheme } from "@rainbow-me/rainbowkit";
import {
	metaMaskWallet,
	walletConnectWallet,
	coinbaseWallet,
	okxWallet,
	rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { QueryClient } from "@tanstack/react-query";
import { createConfig, type CreateConnectorFn, http } from "wagmi";
import { arbitrum, arbitrumSepolia, type Chain } from "wagmi/chains";

function getSupportedChains(): readonly [Chain, ...Chain[]] {
	return isTestnet ? [arbitrumSepolia] : [arbitrum];
}
const defaultChain = getSupportedChains()[0];
const chains = getSupportedChains();

export const getChains = () => chains;
const getWallets = () => {
	return [
		{
			groupName: "Recommended",
			wallets: [
				metaMaskWallet,
				walletConnectWallet,
				coinbaseWallet,
				okxWallet,
				rabbyWallet,
			],
		},
	];
};

const connectors = connectorsForWallets(getWallets(), {
	appName: "supurr",
	projectId: walletConnectProjectId,
}) as unknown as CreateConnectorFn[];

const transports = chains.reduce((result, item: Chain) => {
	return {
		...result,
		[item.id]: http(),
	};
}, {});

const config = createConfig({
	chains,
	transports,
	connectors,
});

const queryClient = new QueryClient();

const rainbowKitTheme = darkTheme({
	accentColor: "hsl(var(--primary))",
	accentColorForeground: "hsl(var(--primary-foreground))",
	borderRadius: "small",
	overlayBlur: "small",
});
rainbowKitTheme.colors.menuItemBackground = "hsl(var(--popover))";
rainbowKitTheme.colors.modalBackground = "hsl(var(--popover))";
rainbowKitTheme.colors.modalBorder = "hsl(var(--border))";
rainbowKitTheme.colors.generalBorder = "hsl(var(--border))";
rainbowKitTheme.colors.modalText = "hsl(var(--foreground))";

export { chains, defaultChain, config, queryClient, rainbowKitTheme };
