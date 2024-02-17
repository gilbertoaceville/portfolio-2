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

	switch (true) {
		case years === 1 && months === 1: {
			return `${years} year, ${months} month`;
		}
		case years === 1: {
			return `${years} year, ${months} months`;
		}
		case months === 1: {
			return `${years} years, ${months} month`;
		}
		case years < 1 && months > 1: {
			return `${months} months`;
		}
		case years < 1 && months === 1: {
			return `${months} month`;
		}
		default: {
			return `${years} years, ${months} months`;
		}
	}
}
