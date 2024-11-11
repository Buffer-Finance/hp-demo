export const isTestnet = import.meta.env["VITE_APP_NETWORK"] === "testnet";
export const isMainnet = !isTestnet;
export const walletConnectProjectId = import.meta.env[
	"VITE_APP_WALLET_CONNECT_ID"
];
