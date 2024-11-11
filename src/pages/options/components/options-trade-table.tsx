import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getMultiplier } from "@/features/prices";
import useOptionsStore from "../store/use-options-store";
import DisplayNumber from "@/components/global/display-number";

export type strikePriceObjectType = {
	strike: number;
	totalFeeAbove: number | null;
	totalFeeBelow: number | null;
	baseFeeAbove: number;
	baseFeeBelow: number;
	marketID: string;
};

const data = [
	{
		strike: 78500,
		totalFeeAbove: 0.05131150104051477,
		totalFeeBelow: null,
		baseFeeAbove: 0.0466468191277407,
		baseFeeBelow: 0.9533531808722593,
		marketID:
			"0x3467126d931d5478636e18e139f5c3f82ea3fcc3263f17a7fe004760e59559f5",
	},
	{
		strike: 78000,
		totalFeeAbove: 0.06020845334177302,
		totalFeeBelow: null,
		baseFeeAbove: 0.05473495758343002,
		baseFeeBelow: 0.94526504241657,
		marketID:
			"0xd22cd2b8cc2498fc0bb4576edfddfbf5ae357a8dc3c9c16a9e146390f5864d37",
	},
	{
		strike: 77500,
		totalFeeAbove: 0.070353169379309,
		totalFeeBelow: null,
		baseFeeAbove: 0.06395742670846272,
		baseFeeBelow: 0.9360425732915373,
		marketID:
			"0x09ca68fec8e319aada8508a471db2f21c671c4f96b857dda3a84970c60313c38",
	},
	{
		strike: 77000,
		totalFeeAbove: 0.08185988081226367,
		totalFeeBelow: null,
		baseFeeAbove: 0.07441807346569425,
		baseFeeBelow: 0.9255819265343057,
		marketID:
			"0x1f1204766773f9767194c7d770509f26068fd14da29c419e76242d55c563496b",
	},
	{
		strike: 76500,
		totalFeeAbove: 0.09484140296118568,
		totalFeeBelow: null,
		baseFeeAbove: 0.08621945723744152,
		baseFeeBelow: 0.9137805427625585,
		marketID:
			"0x8200af94008a91e1fa7d923323bd0211f319147c588e9b24dd555c533f5206b9",
	},
	{
		strike: 76000,
		totalFeeAbove: 0.10940643609308628,
		totalFeeBelow: null,
		baseFeeAbove: 0.09946039644826025,
		baseFeeBelow: 0.9005396035517398,
		marketID:
			"0x7ff0612793bfa471ccbd5314e2e9b9b7c0d2ca0b7be46e26f184015476451583",
	},
	{
		strike: 75500,
		totalFeeAbove: 0.12565649920771177,
		totalFeeBelow: null,
		baseFeeAbove: 0.1142331810979198,
		baseFeeBelow: 0.8857668189020802,
		marketID:
			"0x1fc22696db3dd6bd66d937fb9b8133e2f459eb72c202a2f99b33908452120ebb",
	},
	{
		strike: 75000,
		totalFeeAbove: 0.14368253967565248,
		totalFeeBelow: null,
		baseFeeAbove: 0.13062049061422953,
		baseFeeBelow: 0.8693795093857705,
		marketID:
			"0x6db9332ab61789fe9b3d47907aedca7a65d78c2d2edd00c33d78b2aacf21e3bc",
	},
	{
		strike: 74500,
		totalFeeAbove: 0.16356128761838717,
		totalFeeBelow: 0.9364387123816128,
		baseFeeAbove: 0.14869207965307926,
		baseFeeBelow: 0.8513079203469207,
		marketID:
			"0x5d6f0170784c337ae4a2b9ece3ac572191659c054a827fba0f7eb904db8fda60",
	},
	{
		strike: 74000,
		totalFeeAbove: 0.18535145339901124,
		totalFeeBelow: 0.9146485466009888,
		baseFeeAbove: 0.1685013212718284,
		baseFeeBelow: 0.8314986787281716,
		marketID:
			"0x20c3df7aeb7e520839e895194a613319b7efa05e8e9c3b74ec87225c32e8bc15",
	},
	{
		strike: 73500,
		totalFeeAbove: 0.2090899001658827,
		totalFeeBelow: 0.8909100998341173,
		baseFeeAbove: 0.19008172742352972,
		baseFeeBelow: 0.8099182725764703,
		marketID:
			"0x822c947a71a5d1660422ecdb0e4ce2f22be4846a821e799da60702de00a7cdb2",
	},
	{
		strike: 73000,
		totalFeeAbove: 0.2347879612465502,
		totalFeeBelow: 0.8652120387534498,
		baseFeeAbove: 0.21344360113322744,
		baseFeeBelow: 0.7865563988667725,
		marketID:
			"0x71fbbc6f14fff9e3681ed087e3b8d715caba725a532722d0f85163b816e6b387",
	},
	{
		strike: 72500,
		totalFeeAbove: 0.26242811451928283,
		totalFeeBelow: 0.8375718854807171,
		baseFeeAbove: 0.23857101319934804,
		baseFeeBelow: 0.761428986800652,
		marketID:
			"0x4dce6b31ae6358880baa0db51a70fb41009e20d9ae70202ce2456ea7aa2f9440",
	},
	{
		strike: 72000,
		totalFeeAbove: 0.2919612728298037,
		totalFeeBelow: 0.8080387271701963,
		baseFeeAbove: 0.2654193389361852,
		baseFeeBelow: 0.7345806610638148,
		marketID:
			"0xd54a00fb43316c3cfe9d3703bb8c45b003deb17f2d83e5d8fa733e33c085fc94",
	},
	{
		strike: 71500,
		totalFeeAbove: 0.3233050010632983,
		totalFeeBelow: 0.7766949989367018,
		baseFeeAbove: 0.29391363733027115,
		baseFeeBelow: 0.7060863626697289,
		marketID:
			"0x7ac493523640a944e6b1dc2045807168d7e16e725529ac734bfc664bfc6dc82d",
	},
	{
		strike: 71000,
		totalFeeAbove: 0.35634302643809657,
		totalFeeBelow: 0.7436569735619033,
		baseFeeAbove: 0.3239482058528151,
		baseFeeBelow: 0.6760517941471849,
		marketID:
			"0xbaa1610bc58c63852573e5ca8e95f6d399c4b581d3fc9dd3e68a2f8cf442b115",
	},
	{
		strike: 70500,
		totalFeeAbove: 0.39092646876231896,
		totalFeeBelow: 0.709073531237681,
		baseFeeAbove: 0.3553876988748354,
		baseFeeBelow: 0.6446123011251645,
		marketID:
			"0x3d28c242e5ec44d97f53a1ff5baf0fea457326db185b126dce4e93ddb3bcc1ae",
	},
	{
		strike: 70000,
		totalFeeAbove: 0.42687728226182564,
		totalFeeBelow: 0.6731227177381744,
		baseFeeAbove: 0.38807025660165967,
		baseFeeBelow: 0.6119297433983404,
		marketID:
			"0x487f5816489edad1a188bddec028f42678dbeed088308516cc43c915298e6f14",
	},
	{
		strike: 69500,
		totalFeeAbove: 0.4639944729262106,
		totalFeeBelow: 0.6360055270737893,
		baseFeeAbove: 0.421813157205646,
		baseFeeBelow: 0.578186842794354,
		marketID:
			"0x188847d2c064f7a01e1b6bbc1e55290c1a1ef3c44cbfebc555adaeefd7cea6b8",
	},
	{
		strike: 69000,
		totalFeeAbove: 0.5020637434819145,
		totalFeeBelow: 0.5979362565180855,
		baseFeeAbove: 0.4564215849835586,
		baseFeeBelow: 0.5435784150164413,
		marketID:
			"0x46eefe67e70cb03c6289ead0467c1f0dbb3cb3de6440fd448d13af9667f7d508",
	},
	{
		isCustomLine: true,
	},
	{
		strike: 68500,
		totalFeeAbove: 0.5408713418837399,
		totalFeeBelow: 0.5591286581162602,
		baseFeeAbove: 0.491701219894309,
		baseFeeBelow: 0.5082987801056911,
		marketID:
			"0x40e64a0bcc1a26d87da9cbf50308d3b7451c3c2caa7aebcb28f6521c8948b303",
	},
	{
		strike: 68000,
		totalFeeAbove: 0.5797891208424705,
		totalFeeBelow: 0.5202108791575295,
		baseFeeAbove: 0.5270810189477004,
		baseFeeBelow: 0.47291898105229957,
		marketID:
			"0x71249fd780634caec5a5fb8e90028098cc675e9dda0e599cc97d5cab5fda4af9",
	},
	{
		strike: 67500,
		totalFeeAbove: 0.6189441741014692,
		totalFeeBelow: 0.48105582589853085,
		baseFeeAbove: 0.5626765219104265,
		baseFeeBelow: 0.4373234780895735,
		marketID:
			"0x3b8e6e521443c61d0e56dd4058ed97def30cbac7e25f179f2e3f27930c29c8b0",
	},
	{
		strike: 67000,
		totalFeeAbove: 0.6577755260488027,
		totalFeeBelow: 0.44222447395119724,
		baseFeeAbove: 0.5979777509534571,
		baseFeeBelow: 0.40202224904654293,
		marketID:
			"0xff5aae9eb78ae0f3e50dc3c978e109c8955ccf5a3ad9000de9ad8639c9346c33",
	},
	{
		strike: 66500,
		totalFeeAbove: 0.6960111591459783,
		totalFeeBelow: 0.40398884085402165,
		baseFeeAbove: 0.6327374174054349,
		baseFeeBelow: 0.3672625825945651,
		marketID:
			"0x00c32b0d34128922d98450352c5a58c6197675790396938dc59ddf5837c01ce6",
	},
	{
		strike: 66000,
		totalFeeAbove: 0.7333653662920661,
		totalFeeBelow: 0.3666346337079339,
		baseFeeAbove: 0.6666957875382419,
		baseFeeBelow: 0.3333042124617581,
		marketID:
			"0x890300cd0282f0cd74715254362363673e4bb0fc31dcfe8a216c1d9e16d60714",
	},
	{
		strike: 65500,
		totalFeeAbove: 0.7695537994864229,
		totalFeeBelow: 0.33044620051357715,
		baseFeeAbove: 0.6995943631694753,
		baseFeeBelow: 0.3004056368305247,
		marketID:
			"0xd21acbde953fb7a8fff6b2d51c17a34819da5d580e688bbccf043bd753e2b552",
	},
	{
		strike: 65000,
		totalFeeAbove: 0.8043063819227795,
		totalFeeBelow: 0.2956936180772205,
		baseFeeAbove: 0.7311876199297995,
		baseFeeBelow: 0.2688123800702005,
		marketID:
			"0xd88a6978d528967826a7d276b615e0caee81816e1813bb68098f39f6e0c57433",
	},
	{
		strike: 64500,
		totalFeeAbove: 0.8373780264305215,
		totalFeeBelow: 0.26262197356947853,
		baseFeeAbove: 0.7612527513004741,
		baseFeeBelow: 0.23874724869952593,
		marketID:
			"0xf68efc34d8616f6cae1f53f7e593a2f00bcdd0a1a61d80de25b1f4f70aa3ee1c",
	},
	{
		strike: 64000,
		totalFeeAbove: 0.868557117904861,
		totalFeeBelow: 0.23144288209513902,
		baseFeeAbove: 0.78959737991351,
		baseFeeBelow: 0.21040262008649002,
		marketID:
			"0xcd6e7a5398e2e4ebba3a0e28944ae2ffa9bce76f109c8feb81000c63dc8d1685",
	},
	{
		strike: 63500,
		totalFeeAbove: 0.897671755543416,
		totalFeeBelow: 0.202328244456584,
		baseFeeAbove: 0.8160652323121964,
		baseFeeBelow: 0.18393476768780365,
		marketID:
			"0xe1f32d6933555ae33cea975b68b24b342a9c76a19ec70474e58fc1dee26feb42",
	},
	{
		strike: 63000,
		totalFeeAbove: 0.9245937987882209,
		totalFeeBelow: 0.17540620121177913,
		baseFeeAbove: 0.8405398170802008,
		baseFeeBelow: 0.15946018291979921,
		marketID:
			"0xe3fe606316739e6ca2044d43c715afbbd18c04c92ad871fa5ef36ef805969e75",
	},
	{
		strike: 62500,
		totalFeeAbove: 0.9492408116844081,
		totalFeeBelow: 0.1507591883155919,
		baseFeeAbove: 0.862946192440371,
		baseFeeBelow: 0.137053807559629,
		marketID:
			"0x90730f14ff55495aa7b62c1498fa66a543c2200630e71f6eb2f5e045c31298c7",
	},
	{
		strike: 62000,
		totalFeeAbove: null,
		totalFeeBelow: 0.12842394942975408,
		baseFeeAbove: 0.88325095506386,
		baseFeeBelow: 0.11674904493614006,
		marketID:
			"0x4f3fcee8f4aa4742ef443e3a4d9ff115454946f4c206c070a2a79b4b04246130",
	},
	{
		strike: 61500,
		totalFeeAbove: null,
		totalFeeBelow: 0.10839331207465025,
		baseFeeAbove: 0.9014606253866816,
		baseFeeBelow: 0.09853937461331841,
		marketID:
			"0x8c4fc420b9f919f715299e1debe5ecf50f24368f4eb9596fa6e15ad4e95db5ec",
	},
	{
		strike: 61000,
		totalFeeAbove: null,
		totalFeeBelow: 0.0906194907165586,
		baseFeeAbove: 0.9176186448031285,
		baseFeeBelow: 0.08238135519687145,
		marketID:
			"0xfac9e71028909282655f2cdfef34b8a6ea41bcf8cbb20804cf0d6a0db961a5db",
	},
	{
		strike: 60500,
		totalFeeAbove: null,
		totalFeeBelow: 0.0750186417641951,
		baseFeeAbove: 0.9318012347598227,
		baseFeeBelow: 0.06819876524017736,
		marketID:
			"0xf25d904cbf0db4a780f08ca5d74e541e51063a1d1f1c8150c0c752a08f150c5f",
	},
	{
		strike: 60000,
		totalFeeAbove: null,
		totalFeeBelow: 0.061476366035929646,
		baseFeeAbove: 0.9441123945127913,
		baseFeeBelow: 0.055887605487208766,
		marketID:
			"0x7a90af4dda4f7ee64187617e59739f585cffeb6ff6b105c6399470bdd31d1c79",
	},
];

export function OptionsTradeTable() {
	const tradeTableSelected = useOptionsStore((s) => s.tradeTableSelected);
	const updateTradeTableSelected = useOptionsStore(
		(s) => s.updateTradeTableSelected
	);

	const customRowRef = useRef<HTMLTableRowElement | null>(null);
	const tableRef = useRef<HTMLDivElement | null>(null);
	const currency = "USDC";

	useEffect(() => {
		if (customRowRef.current && tableRef.current) {
			const tableRect = tableRef.current.getBoundingClientRect();
			const customRowRect = customRowRef.current.getBoundingClientRect();
			const offset = customRowRect.top - tableRect.top;
			const tableHeight = tableRect.height;
			const rowHeight = customRowRect.height;

			const scrollPosition = offset - tableHeight / 2 + rowHeight / 2;

			tableRef.current.scrollTo({
				top: scrollPosition,
				behavior: "smooth",
			});
		}
	}, [customRowRef, tableRef, data]);

	const indexOfCustomRow = useMemo(
		() => data.findIndex((item) => item.isCustomLine),
		[data]
	);

	return (
		<div>
			<div className="grid grid-cols-2 text-center py-2">
				<div
					className={cn(
						tradeTableSelected &&
							tradeTableSelected.type === "above" &&
							"text-white underline decoration-accent-green decoration-[2px] underline-offset-4"
					)}
				>
					Above
				</div>
				<div
					className={cn(
						tradeTableSelected &&
							tradeTableSelected.type === "below" &&
							"text-white underline decoration-accent-red decoration-[2px] underline-offset-4"
					)}
				>
					Below
				</div>
			</div>
			<Table refWrapper={tableRef} classNameWrapper="h-[490px]">
				<TableHeader>
					<TableRow className="!border-none text-xs text-center">
						<TableHead className="md:w-[80px]">Max</TableHead>
						<TableHead className="md:w-[80px]">{currency}</TableHead>
						<TableHead className="md:w-[80px]">ROI</TableHead>
						<TableHead className="w-[100px]">Strike</TableHead>
						<TableHead className="md:w-[80px]">ROI</TableHead>
						<TableHead className="md:w-[80px]">{currency}</TableHead>
						<TableHead className="md:w-[80px]">Max</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item, index) => {
						const maxSizeBelow = "123.123";
						const maxSizeAbove = "123.123";
						const onAbove = () => {
							updateTradeTableSelected({
								marketId: item.marketID,
								strike: item.strike,
								type: "above",
							});
						};
						const onBelow = () => {
							updateTradeTableSelected({
								marketId: item.marketID,
								strike: item.strike,
								type: "below",
							});
						};

						const isSelected =
							item.marketID === tradeTableSelected?.marketId
								? tradeTableSelected?.type
								: null;

						const activeAboveBg =
							isSelected &&
							isSelected === "above" &&
							"bg-accent-green bg-opacity-30 text-white";
						const activeBelowBg =
							isSelected &&
							isSelected === "below" &&
							"bg-accent-red bg-opacity-30 text-white";

						if (item.isCustomLine)
							return (
								<TableRow
									id="custom-row"
									className="!border-none !cursor-default"
									ref={customRowRef}
								>
									<TableCell colSpan={7}>
										<div className="flex justify-center items-center relative w-full">
											<DisplayNumber
												value={"68000.99"}
												defaultValue="-"
												className="px-3 rounded-full text-accent-mint font-semibold border border-accent-mint py-1 flex justify-center items-center bg-surface z-[1]"
											/>
											<div className="absolute left-0 right-0 border border-dashed border-accent-mint"></div>
										</div>
									</TableCell>
								</TableRow>
							);
						return (
							<TableRow
								key={item.strike}
								className="!border-none text-center hover:!text-white hover:!bg-inherit cursor-pointer"
							>
								<TableCell
									onClick={onAbove}
									className={cn(
										"p-1 sm:p-2",
										activeAboveBg,
										isSelected && isSelected === "above" && "!rounded-l-lg"
									)}
								>
									<DisplayNumber
										value={item.totalFeeAbove ? maxSizeAbove : null}
										defaultValue="-"
									/>
								</TableCell>
								<TableCell
									onClick={onAbove}
									className={cn("p-1 sm:p-2", activeAboveBg)}
								>
									<DisplayNumber value={item.totalFeeAbove} defaultValue="-" />
								</TableCell>
								<TableCell
									onClick={onAbove}
									className={cn(
										"!text-accent-green",
										"p-1 sm:p-2",
										activeAboveBg
									)}
								>
									<DisplayNumber
										value={getMultiplier(item.totalFeeAbove)}
										defaultValue="-"
									/>
								</TableCell>
								<TableCell
									className={cn(
										"p-1 sm:p-2",
										"font-medium bg-surface-light cursor-default",
										(index === 0 || index === indexOfCustomRow + 1) &&
											!isSelected &&
											"!rounded-t-lg",
										(index === data.length - 1 ||
											index === indexOfCustomRow - 1) &&
											!isSelected &&
											"!rounded-b-lg",
										isSelected && isSelected === "below" && "!rounded-l-lg",
										isSelected && isSelected === "above" && "!rounded-r-lg",
										activeAboveBg,
										activeBelowBg
									)}
								>
									<DisplayNumber value={item.strike} />
								</TableCell>
								<TableCell
									onClick={onBelow}
									className={cn(
										"p-1 sm:p-2",
										"!text-accent-red",
										activeBelowBg
									)}
								>
									<DisplayNumber
										value={getMultiplier(item.totalFeeBelow)}
										defaultValue="-"
									/>
								</TableCell>
								<TableCell
									onClick={onBelow}
									className={cn("p-1 sm:p-2", activeBelowBg)}
								>
									<DisplayNumber value={item.totalFeeBelow} defaultValue="-" />
								</TableCell>
								<TableCell
									onClick={onBelow}
									className={cn(
										"p-1 sm:p-2",
										"text-right",
										activeBelowBg,
										isSelected && isSelected === "below" && "!rounded-r-lg"
									)}
								>
									<DisplayNumber
										value={item.totalFeeBelow ? maxSizeBelow : null}
										defaultValue="-"
									/>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}
