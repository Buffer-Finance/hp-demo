import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HomeBanner from "./components/home-banner";
import HomeFeatures from "./components/home-features";
import HomeStats from "./components/home-stats";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<HomeBanner />
			<HomeFeatures />
			<HomeStats />
			<Footer />
		</div>
	);
}
