import type { Experiences } from "@/lib/contentful/types";

export default async function Experiences({
	managementTitle,
	experiences,
}: Experiences) {
	return (
		<div className="space-y-2 print:space-y-1">
			<div className="text-xl font-semibold">{managementTitle}</div>
			<div className="space-y-4 print:space-y-2">
				{experiences?.map((experience, i) => {
					return (
						<div key={`${experience?.title}-${i}`}>
							<div className="mb-2 font-medium">
								{experience?.title}
							</div>
							<div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-2 md:pb-2">
								<div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-2">
									<div className="font-medium">
										{experience?.company}
									</div>
									<span className="hidden sm:inline-block">
										{"-"}
									</span>
									<div>{experience?.location}</div>
								</div>
								<div
									title=""
									className="flex gap-2 text-secondary-foreground"
								>
									<p>{experience?.startDate}</p>-
									<p>{experience?.endDate}</p>
								</div>
							</div>
							<div className="gap-2 px-2 text-sm">
								{experience?.description?.map(d => (
									<div key={d}>- {d}</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function calculateTimeSpent(startDate: Date, endDate?: Date | null): string {
	if (!endDate) {
		endDate = new Date();
	}

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
