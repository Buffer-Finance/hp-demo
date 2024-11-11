export const imports = {
	// https://github.com/unplugin/unplugin-auto-import/blob/main/src/presets/react.ts
	react: [
		"useState",
		"useCallback",
		"useMemo",
		"useEffect",
		"useRef",
		"useContext",
		"useReducer",
		"useImperativeHandle",
		"useDebugValue",
		"useDeferredValue",
		"useLayoutEffect",
		"useTransition",
		"startTransition",
		"useSyncExternalStore",
		"useInsertionEffect",
		"useId",
		"lazy",
		"memo",
		"createRef",
		"forwardRef",
	],

	// https://github.com/unplugin/unplugin-auto-import/blob/main/src/presets/react-i18next.ts
	"react-i18next": [
		"useTranslation", //
		"Trans",
	],

	// https://tanstack.com/router/latest/docs/framework/react/api/router
	"@tanstack/react-router": [
		"useAwaited",
		"useBlocker",
		"useChildMatches",
		"useLinkProps",
		"useLoaderData",
		"useLoaderDeps",
		"useLocation",
		"useMatch",
		"useMatchRoute",
		"useMatches",
		"useNavigate",
		"useParentMatches",
		"useParams",
		"useRouteContext",
		"useRouter",
		"useRouterState",
		"useSearch",
		"Link",
	],

	"@/lib/utils": [
		"cn", //
	],
};

export const eslintAutoImports = Object.entries(imports).map(
	([name, importNames]) => ({ message: "Auto import", name, importNames })
);
