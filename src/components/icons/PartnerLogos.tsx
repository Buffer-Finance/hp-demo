// SVG components for partner logos
const JumpLogo = () => (
	<div className="flex flex-col items-center">
		<svg className="w-32 h-12" viewBox="0 0 120 40" fill="currentColor">
			<path d="M20 8l10 10-10 10L10 18zm20 0l10 10-10 10-10-10z" />
		</svg>
		<span className="mt-2 text-sm font-medium">Jump Capital</span>
	</div>
);

const DrahmaLogo = () => (
	<div className="flex flex-col items-center">
		<svg className="w-32 h-12" viewBox="0 0 120 40" fill="currentColor">
			<path d="M30 8c11 0 20 9 20 20s-9 20-20 20S10 39 10 28s9-20 20-20z" />
		</svg>
		<span className="mt-2 text-sm font-medium">Drahma Capital</span>
	</div>
);

const WintermuteLogo = () => (
	<div className="flex flex-col items-center">
		<svg className="w-32 h-12" viewBox="0 0 120 40" fill="currentColor">
			<path d="M10 8h4v24h-4zm12 0h4v24h-4zm12 0h4v24h-4z" />
		</svg>
		<span className="mt-2 text-sm font-medium">Wintermute</span>
	</div>
);

const AlamedaLogo = () => (
	<div className="flex flex-col items-center">
		<svg className="w-32 h-12" viewBox="0 0 120 40" fill="currentColor">
			<path d="M30 8l20 12-20 12-20-12z" />
		</svg>
		<span className="mt-2 text-sm font-medium">Alameda Research</span>
	</div>
);

export const partnerLogos = [
	{
		name: "Jump Capital",
		logo: <JumpLogo />,
	},
	{
		name: "Drahma Capital",
		logo: <DrahmaLogo />,
	},
	{
		name: "Wintermute",
		logo: <WintermuteLogo />,
	},
	{
		name: "Alameda Research",
		logo: <AlamedaLogo />,
	},
];
