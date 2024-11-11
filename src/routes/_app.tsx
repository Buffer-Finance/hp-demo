import AppHeader from "@/components/layout/app-header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
	component: () => (
		<div className="flex flex-col w-screen h-screen">
			<AppHeader />
			<div className="flex-grow">
				<Outlet />
			</div>
		</div>
	),
});
