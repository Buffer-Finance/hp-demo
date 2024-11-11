import { createFileRoute } from "@tanstack/react-router";

import Options from "@/pages/options/options";

export const Route = createFileRoute("/_app/options")({
	component: Options,
});
