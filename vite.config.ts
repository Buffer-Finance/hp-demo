import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import autoImport from "unplugin-auto-import/vite";
import path, { resolve } from "node:path";
import { normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { defineConfig } from "vitest/config";
import { imports } from "./unplugin-auto-import.config";
import icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import iconsResolver from "unplugin-icons/resolver";

const iconsCollections = {
	custom: FileSystemIconLoader(`./src/assets/icons`),
	"custom-token": FileSystemIconLoader(`./src/assets/icons/tokens`),
};

const iconsResolverInstance = (name: string) => {
	const formattedName = name
		.replace(/^IC/, "ICustom")
		.replace(/^ICToken/, "ICustomToken");

	return iconsResolver({
		strict: true,
		prefix: "I",
		extension: "tsx",
		customCollections: Object.keys(iconsCollections),
	})(formattedName);
};

export default defineConfig({
	plugins: [
		react(),
		TanStackRouterVite(),
		viteStaticCopy({
			targets: [
				{
					src: normalizePath(path.resolve("./src/assets/locales")),
					dest: normalizePath(path.resolve("./dist")),
				},
			],
		}),
		autoImport({
			imports: [imports],
			dts: resolve(__dirname, "src/types/generated", "auto-imports.d.ts"),
			resolvers: [iconsResolverInstance],
		}),
		icons({
			compiler: "jsx",
			jsx: "react",
			customCollections: iconsCollections,
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		host: true,
		strictPort: true,
		port: 7000,
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		css: true,
	},
});
