class Bar {
	x: number;
	targetHeight: number;
	currentHeight: number;
	width: number;
	color: string;
	speed: number;
	maxHeight: number;

	constructor(x: number, width: number) {
		this.x = x;
		this.width = width;
		this.maxHeight = 80 + Math.random() * 80;
		this.targetHeight = Math.random() * this.maxHeight;
		this.currentHeight = 0;
		this.color =
			Math.random() > 0.5
				? "rgba(180, 180, 180, 0.15)" // Increased opacity for grey
				: "rgba(255, 107, 107, 0.12)"; // Slightly increased opacity for red
		this.speed = 0.08 + Math.random() * 0.08;
	}

	update() {
		const diff = this.targetHeight - this.currentHeight;
		this.currentHeight += diff * this.speed;

		if (Math.random() < 0.015) {
			this.targetHeight = Math.random() * this.maxHeight;
			this.color =
				Math.random() > 0.5
					? "rgba(180, 180, 180, 0.15)"
					: "rgba(255, 107, 107, 0.12)";
		}
	}

	draw(
		context: CanvasRenderingContext2D | null,
		canvas: HTMLCanvasElement | null
	) {
		if (!context || !canvas) return;

		const centerY = canvas.height / 2;
		const height = this.currentHeight;

		context.fillStyle = this.color;
		context.fillRect(this.x, centerY - height / 2, this.width, height);
	}
}

export default function HomeBannerTradingAnimation() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		const setSize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight * 0.7;
		};
		setSize();
		window.addEventListener("resize", setSize);

		const barWidth = 6;
		const gap = 3;
		const totalWidth = barWidth + gap;
		const numberBars = Math.floor(canvas.width / totalWidth);
		const bars = Array.from(
			{ length: numberBars },
			(_, index) => new Bar(index * totalWidth, barWidth)
		);

		const animate = () => {
			context.fillStyle = "rgba(5, 12, 10, 0.3)"; // Slightly more opaque background
			context.fillRect(0, 0, canvas.width, canvas.height);

			bars.forEach((bar) => {
				bar.update();
				bar.draw(context, canvas);
			});

			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", setSize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="absolute top-0 left-0 w-full h-full opacity-60"
		/>
	);
}
