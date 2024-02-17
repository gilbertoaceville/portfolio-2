import type { Educations } from "@/lib/contentful/types";

export default async function Educations({
	managementTitle,
	educations,
}: Educations) {
	return (
		<div className="space-y-2">
			<div className="text-xl font-semibold">{managementTitle}</div>
			<div className="space-y-4">
				{educations?.map(education => {
					return (
						<div key={education.id}>
							<div className="flex flex-col gap-1 pb-2 sm:flex-row sm:justify-between sm:gap-2">
								<div className="flex flex-col gap-1">
									<div className="font-medium md:text-lg">
										{education.school}
									</div>
									<div>{education.degree}</div>
								</div>
								<p className="text-secondary-foreground">
									{education.endDate}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
