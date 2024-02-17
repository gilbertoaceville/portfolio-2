export function calculateTimeSpent(
	startDateStr: string,
	endDateStr?: string | null
): string {
	const startDate = new Date(startDateStr);
	const endDate = endDateStr ? new Date(endDateStr) : new Date();

	let years = endDate.getUTCFullYear() - startDate.getUTCFullYear();
	let months = endDate.getUTCMonth() - startDate.getUTCMonth() + 1;

	if (months <= 0) {
		years--;
		months += 12;
	} else if (months > 12) {
		years++;
		months = 0;
	}

	return `${years} years, ${months} months`;
}
