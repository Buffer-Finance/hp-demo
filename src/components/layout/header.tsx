import { BookOpen, Menu, X } from "lucide-react";

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const NavLinks = () => (
		<>
			<a
				href="https://twitter.com"
				target="_blank"
				rel="noopener noreferrer"
				className="text-foreground hover:text-accent-light transition-colors"
			>
				<ICSocialX className="w-5 h-5" />
			</a>
			<a
				href="https://discord.com"
				target="_blank"
				rel="noopener noreferrer"
				className="text-foreground hover:text-accent-light transition-colors"
			>
				<ICSocialDiscord className="w-5 h-5" />
			</a>
			<a
				href="https://t.me"
				target="_blank"
				rel="noopener noreferrer"
				className="text-foreground hover:text-accent-light transition-colors"
			>
				<ICSocialTelegram className="w-5 h-5" />
			</a>
			<a
				href="/docs"
				className="flex items-center gap-2 text-foreground hover:text-accent-light transition-colors"
			>
				<BookOpen className="w-5 h-5" />
			</a>
		</>
	);

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-accent-light/10">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="flex items-center justify-between h-16">
						<Link
							to="/"
							className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
						>
							<img src="img/logo.png" alt="logo" className="w-8 h-auto"></img>
							<span className="text-xl text-accent-light">Supurr</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center">
							<div className="flex items-center space-x-6">
								<NavLinks />
							</div>
							{/* <div className="flex items-center ml-12">
								<button
									onClick={() => { setIsWalletModalOpen(true); }}
									className="px-4 py-2 bg-accent-light text-accent rounded-lg text-sm hover:bg-accent-light/90 flex items-center space-x-2"
								>
									<Wallet className="w-4 h-4" />
									<span>
										{address ? formatAddress(address) : "Connect Wallet"}
									</span>
								</button>
							</div> */}
						</div>

						{/* Mobile Menu Button */}
						<div className="flex md:hidden items-center gap-4">
							<button
								onClick={() => {
									setIsMobileMenuOpen(!isMobileMenuOpen);
								}}
								className="text-foreground hover:text-accent-light"
							>
								{isMobileMenuOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden bg-surface border-t border-accent-light/10">
						<div className="px-4 py-4 space-y-4">
							<div className="flex justify-around">
								<NavLinks />
							</div>
						</div>
					</div>
				)}
			</header>
		</>
	);
}
