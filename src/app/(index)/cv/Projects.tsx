import moment from "moment";
import TagList from "@/components/TagList";
import ProjectDialog from "@/components/dialogs/ProjectDialog";
import type { Projects, TagElement } from "@/lib/contentful/types";

export default async function Projects({
	managementTitle,
	projects,
}: Projects) {
	return (
		<div className="space-y-2 print:hidden">
			<div className="text-xl font-semibold">{managementTitle}</div>
			<div className="flex flex-col gap-4">
				{projects?.map((project, i) => {
					const date = moment(project?.date).format("MM/YYYY");

					return (
						<ProjectDialog
							project={project}
							className="rounded-rounded space-y-1 rounded border border-transparent p-2 hover:border-border"
							key={`${project?.title}-${i}`}
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div className="font-medium">
										{project?.title}
									</div>
									{"-"}
									<div className="text-sm">
										{project.company}
									</div>
								</div>
								<p className="text-sm text-secondary-foreground">
									{date}
								</p>
							</div>
							<div>
								<TagList tags={project.tags as TagElement[]} />
							</div>
						</ProjectDialog>
					);
				})}
			</div>
		</div>
	);
}
