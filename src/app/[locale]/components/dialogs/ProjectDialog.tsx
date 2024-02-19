import ProjectCard, { ProjectCardProps } from "../cards/ProjectCard";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { PropsWithChildren } from "react";

interface ProjectDialogProps extends ProjectCardProps, PropsWithChildren {
	className?: string;
}

export default function ProjectDialog({
	project,
	websiteLabel,
	githubLabel,
	className,
	children,
}: ProjectDialogProps) {
	return (
		<Dialog>
			<DialogTrigger className={className}>{children}</DialogTrigger>
			<DialogContent size="lg">
				<ProjectCard {...{ project, websiteLabel, githubLabel }} />
			</DialogContent>
		</Dialog>
	);
}
