import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import { routeTree } from "./routeTree.gen";
import "./styles/index.scss";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config, queryClient, rainbowKitTheme } from "./features/wagmi";

const router = createRouter({ routeTree, context: { auth: undefined } });

const App = (): FunctionComponent => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider
					theme={{
						...rainbowKitTheme,
					}}
				>
					<RouterProvider router={router} />
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
};

export default App;
