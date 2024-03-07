"use client";

import SectionTitle from "./SectionTitle";
import ProjectDialog from "@/components/dialogs/ProjectDialog";
import Project from "./Project";
import { Projects } from "@/lib/contentful/types";
import useProjectsDisplay from "./hooks/useProjectsDisplay";

export default function ProjectsList({
	managementTitle,
	ctaLabel,
	websiteLabel,
	githubLabel,
	projects,
}: Projects) {
	const { displayAllProjects, numOfProjects, handleLoadMore } =
		useProjectsDisplay(projects);

	return (
		<section
			id="projects"
			className="flex min-h-screen flex-col gap-4 py-2 sm:py-16 md:justify-between md:gap-8"
		>
			<SectionTitle id={managementTitle || "Projects"} />
			<div className="grid grid-cols-12 gap-4 md:gap-6">
				{projects?.slice(0, numOfProjects)?.map((p, i) => (
					<ProjectDialog
						project={p}
						websiteLabel={websiteLabel}
						githubLabel={githubLabel}
						className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
						key={"projects-" + i}
					>
						<Project project={p} />
					</ProjectDialog>
				))}
			</div>
			{!displayAllProjects && (
				<button
					onClick={handleLoadMore}
					className="mx-auto mt-4 w-full rounded border-[1px] border-foreground px-4 py-3 xl:max-w-80"
				>
					{ctaLabel}
				</button>
			)}
		</section>
	);
}
