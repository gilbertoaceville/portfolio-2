import SectionTitle from "./SectionTitle";
import ProjectDialog from "@/components/dialogs/ProjectDialog";
import Project from "./Project";
import { Projects } from "@/lib/contentful/types/projects";
import { ProjectElement } from "@/lib/contentful/types/project-element";

interface ProjectProps {
	title: string;
	projects: ProjectElement[];
}

export default async function ProjectsList({ title, projects }: ProjectProps) {
	return (
		<section
			id={title}
			className="flex min-h-screen flex-col gap-4 py-2 sm:py-16 md:justify-between md:gap-8"
		>
			<SectionTitle id={title} />
			<div className="grid grid-cols-12 gap-4 md:gap-6">
				{projects?.map((p, i) => (
					<ProjectDialog
						project={p}
						className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
						key={"projects-" + i}
					>
						<Project project={p} />
					</ProjectDialog>
				))}
			</div>
		</section>
	);
}
