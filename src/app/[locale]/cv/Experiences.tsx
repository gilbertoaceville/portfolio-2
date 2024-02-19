import moment from "moment";

import type { Experiences } from "@/lib/contentful/types";
import { calculateTimeSpent } from "@/utils/helpers/calculateTimeSpent";
import { getTranslations } from "next-intl/server";

export default async function Experiences({
	managementTitle,
	experiences,
}: Experiences) {
	const t = await getTranslations("experiences");
	return (
		<div className="space-y-2 print:space-y-1">
			<div className="text-xl font-semibold">{managementTitle}</div>
			<div className="space-y-4 print:space-y-2">
				{experiences?.map((experience, i) => {
					const startDate = moment(experience?.startDate).format(
						"MM/YYYY"
					);
					const endDate = experience?.endDate
						? moment(experience?.endDate).format("MM/YYYY")
						: t("present");

					const timespent = calculateTimeSpent(
						experience?.startDate,
						experience?.endDate
					);

					return (
						<div
							key={`${experience?.title}-${i}`}
							title={`${t("services")} ${timespent}`}
						>
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
									title={timespent}
									className="flex gap-2 text-secondary-foreground"
								>
									<p>{startDate}</p>-<p>{endDate}</p>
								</div>
							</div>
							<div className="gap-2 px-2 text-sm">
								{experience?.description?.map(d => (
									<div key={d as unknown as string}>
										- {d as unknown as string}
									</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
