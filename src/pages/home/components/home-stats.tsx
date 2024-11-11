import { stats } from "../hooks/data";

export default function HomeStats() {
	return (
		<section className="py-24 bg-surface">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="text-center transform hover:-translate-y-2 transition-transform duration-300"
						>
							<div className="text-3xl md:text-4xl font-playfair font-bold text-accent-light mb-2">
								{stat.value}
							</div>
							<div className="text-foreground">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
