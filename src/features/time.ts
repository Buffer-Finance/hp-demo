import { differenceInSeconds } from "date-fns";

export const formatDistanceEndTime = (endTime: Date | string | number) => {
	const now = new Date();
	const endTimestamp = new Date(endTime);
	const remainingTime = differenceInSeconds(endTimestamp, now);

	if (remainingTime < 0) {
		return "Time is up";
	}

	const seconds = remainingTime % 60;
	const minutes = Math.floor((remainingTime / 60) % 60);
	const hours = Math.floor((remainingTime / 3600) % 24);
	const days = Math.floor(remainingTime / 86400);

	const timeComponents = [];

	if (days > 0) {
		timeComponents.push(`${days}d`);
	}
	if (hours > 0) {
		timeComponents.push(`${hours}h`);
	}
	if (minutes > 0) {
		timeComponents.push(`${minutes}m`);
	}
	if (seconds > 0) {
		timeComponents.push(`${seconds}s`);
	}

	const result = timeComponents.slice(0, 2).join(" ");
	return result.trim();
};
