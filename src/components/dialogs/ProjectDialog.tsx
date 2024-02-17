import { ProjectElement } from "@/lib/contentful/types/project-element";
import ProjectCard from "../cards/ProjectCard";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function ProjectDialog({
	project,
	className,
	children,
}: {
	project: ProjectElement;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<Dialog>
			<DialogTrigger className={className}>{children}</DialogTrigger>
			<DialogContent size="lg">
				<ProjectCard project={project} />
			</DialogContent>
		</Dialog>
	);
}
