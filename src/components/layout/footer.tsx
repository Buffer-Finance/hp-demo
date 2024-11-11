export default function Footer() {
	const sections = [
		{
			title: "Products",
			links: [
				"Options Trading",
				"Spot Markets",
				"Perpetual Futures",
				"Social Trading",
			],
		},
		{
			title: "Resources",
			links: [
				"Documentation",
				"API Reference",
				"Trading Guide",
				"Token Economics",
			],
		},
		{
			title: "Community",
			links: ["Twitter", "Discord", "Telegram", "Blog"],
		},
	];

	return (
		<footer className="bg-surface border-t border-accent-light">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div>
						<div className="mb-6">
							<Link
								to="/"
								className="flex-shrink-0 w-fit flex items-center gap-2 hover:opacity-80 transition-opacity"
							>
								<img src="img/logo.png" alt="logo" className="w-8 h-auto"></img>
								<span className="text-xl text-accent-light">Supurr</span>
							</Link>
						</div>
						<p className="text-foreground">
							The next generation of DeFi trading, built on HyperliquidEVM
						</p>
					</div>

					{sections.map((section, index) => (
						<div key={index}>
							<h4 className="font-playfair text-accent-light font-semibold mb-4">
								{section.title}
							</h4>
							<ul className="space-y-3">
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a
											href="#"
											className="text-foreground hover:text-accent-light transition-all duration-300 hover:-translate-y-0.5 inline-block"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="border-t border-accent-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-foreground text-sm">
						© 2024 Supurr. All rights reserved.
					</div>
					<div className="flex gap-6">
						{["Terms", "Privacy", "Cookies"].map((item, index) => (
							<a
								key={index}
								href="#"
								className="text-foreground hover:text-accent-light transition-all duration-300 hover:-translate-y-0.5 text-sm"
							>
								{item}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
