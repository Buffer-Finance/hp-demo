import DisplayNumber from "@/components/global/display-number";
import { DataTable } from "@/components/ui/data-table";
import type { ColumnDef } from "@tanstack/react-table";

interface TradeData {
	id: string;
	asset: string;
	strike: number;
	current: number;
	open: string;
	countdown: string;
	close: string;
	tradeSize: number;
	payout: number;
	probability: number;
	user: string;
}

async function getData(): Promise<TradeData[]> {
	// Replace with your actual data fetching logic
	return [
		{
			id: "1",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		{
			id: "2",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		{
			id: "3",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		{
			id: "4",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		{
			id: "5",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		{
			id: "6",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		{
			id: "7",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		{
			id: "8",
			asset: "BTC/USD",
			strike: 50000,
			current: 50500,
			open: "2023-10-12 14:30",
			countdown: "00:15:00",
			close: "2023-10-12 14:45",
			tradeSize: 1,
			payout: 1200,
			probability: 0.8,
			user: "user1",
		},
		// Add more trade entries here
	];
}

export const columns: Array<ColumnDef<TradeData>> = [
	{
		accessorKey: "asset",
		header: "Asset",
		cell: ({ row }) => <div>{row.getValue("asset")}</div>,
	},
	{
		accessorKey: "strike",
		header: "Strike",
		cell: ({ row }) => <div>{row.getValue("strike")}</div>,
	},
	{
		accessorKey: "current",
		header: "Current",
		cell: ({ row }) => <div>{row.getValue("current")}</div>,
	},
	{
		accessorKey: "open",
		header: "Open",
		cell: ({ row }) => (
			<div className="text-nowrap">{row.getValue("open")}</div>
		),
	},
	{
		accessorKey: "countdown",
		header: "Countdown",
		cell: ({ row }) => <div>{row.getValue("countdown")}</div>,
	},
	{
		accessorKey: "close",
		header: "Close",
		cell: ({ row }) => (
			<div className="text-nowrap">{row.getValue("close")}</div>
		),
	},
	{
		accessorKey: "tradeSize",
		header: "Trade Size",
		cell: ({ row }) => <div>{row.getValue("tradeSize")}</div>,
	},
	{
		accessorKey: "payout",
		header: "Payout",
		cell: ({ row }) => {
			const payout = row.getValue("payout") as number;
			return <DisplayNumber value={payout} suffixNode={"USD"} />;
		},
	},
	{
		accessorKey: "probability",
		header: "Probability",
		cell: ({ row }) => {
			const probability = row.getValue("probability") as number;
			return (
				<DisplayNumber value={probability} suffixNode={"%"} className="gap-0" />
			);
		},
	},
	{
		accessorKey: "user",
		header: "User",
		cell: ({ row }) => <div>{row.getValue("user")}</div>,
	},
];

export default function OptionsHistoryTrades() {
	const [data, setData] = useState<TradeData[]>([]);

	useEffect(() => {
		async function fetchData() {
			const result = await getData();
			setData(result);
		}
		fetchData();
	}, []);

	return (
		<DataTable columns={columns} data={data} classNameWrapper="h-[260px]" />
	);
}
