import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Menu, X, Binary } from "lucide-react";
import { ButtonConnectWallet } from "../ui-custom/button-connect-wallet";

export type TabType = {
	id: string;
	name: string;
	icon: ReactNode;
	disabled?: boolean;
	soon?: boolean;
};

const tabs: TabType[] = [
	{
		id: "options",
		name: "Options",
		icon: <Binary className="w-5 h-5" />,
	},
];

export default function AppHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const activeTab = useMemo(() => "options", []);
	return (
		<>
			<nav className="bg-background px-3 border border-b">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link
							to="/"
							className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
						>
							<img src="img/logo.png" alt="logo" className="w-7 h-auto"></img>
							<span className="text-lg text-accent-light">Supurr</span>
						</Link>
						<div className="hidden md:block ml-8">
							<div className="flex items-baseline space-x-1">
								{tabs.map((tab) => (
									<button
										key={tab.id}
										className={cn(
											"relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200",
											"group overflow-hidden",
											activeTab === tab.id
												? "bg-surface-light text-accent-light shadow-lg shadow-accent-mint/5"
												: "text-foreground hover:text-accent-light",
											!tab.disabled &&
												"hover:bg-surface hover:shadow-lg hover:shadow-accent-mint/5",
											tab.disabled
												? "opacity-50 cursor-not-allowed"
												: "cursor-pointer"
										)}
										disabled={tab.disabled}
									>
										<div className="transition-transform duration-200 ease-out flex items-center gap-2">
											<span
												className={cn(
													activeTab === tab.id
														? "text-accent-mint"
														: "text-foreground group-hover:text-accent-mint",
													"transition-colors duration-200"
												)}
											>
												{tab.icon}
											</span>
											<span className="relative">
												{tab.name}
												{tab.soon && (
													<span className="absolute -top-3 -right-8 text-[10px] text-accent-mint">
														soon
													</span>
												)}
											</span>
										</div>
										{activeTab === tab.id && (
											<div className="absolute inset-0 bg-accent-mint/5 rounded-lg" />
										)}
									</button>
								))}
							</div>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<ButtonConnectWallet />

						<div className="md:hidden">
							<button
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
								className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent-light hover:bg-surface focus:outline-none transition-colors"
							>
								{isMenuOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>

				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface border-t border-primary/10">
							{tabs.map((tab) => (
								<button
									key={tab.id}
									onClick={() => {
										if (!tab.disabled) {
											setIsMenuOpen(false);
										}
									}}
									className={cn(
										activeTab === tab.id
											? "bg-surface-light text-accent-light"
											: "text-foreground hover:text-accent-light hover:bg-surface",
										"px-3 py-2 rounded-lg text-base w-full text-left flex items-center gap-2",
										"transition-all duration-200",
										tab.disabled
											? "opacity-50 cursor-not-allowed"
											: "hover:-translate-y-0.5"
									)}
									disabled={tab.disabled}
								>
									<span
										className={cn(activeTab === tab.id && "text-accent-mint")}
									>
										{tab.icon}
									</span>
									<span className="relative">
										{tab.name}
										{tab.soon && (
											<span className="absolute -top-3 -right-8 text-[10px] text-accent-mint">
												soon
											</span>
										)}
									</span>
								</button>
							))}
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
