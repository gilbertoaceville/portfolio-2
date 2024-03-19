import clsx from "clsx";
import moment from "moment";
import { Github, ExternalLink } from "lucide-react";

import { ProjectElement, Projects, TagElement } from "@/lib/contentful/types";

import TagList from "../TagList";
import ImagesDialog from "../dialogs/ImagesDialog";
import RichText from "../rich-text";

export interface ProjectCardProps
	extends Pick<Projects, "githubLabel" | "websiteLabel"> {
	project: ProjectElement;
}

export default function ProjectCard({
	project,
	websiteLabel,
	githubLabel,
}: ProjectCardProps) {
	const images = project?.images?.length
		? project.images.filter(image => image.url)
		: [];

	const date = moment(project?.date).format("MM/YYYY");

	return (
		<div className="flex w-full max-w-7xl flex-col pb-4 sm:px-4">
			{/* Title - Client - Year */}
			<div className="mb-4 flex w-full flex-col gap-2 md:gap-4">
				{images?.length > 0 && (
					<ImagesDialog
						project={project}
						src={images[0].url}
						alt={project.title}
					/>
				)}

				<div
					className={clsx(
						"flex w-full flex-col gap-2 py-2",
						images?.length > 0 && "sm:ml-4"
					)}
				>
					{/* Details */}
					<div
						className={clsx(
							!images ||
								(images?.length === 0 && "flex justify-between")
						)}
					>
						<div>
							<p className="flex items-center gap-2 text-xl font-medium">
								{project?.title}
							</p>
							<p className="my-2 text-lg text-foreground/85">
								{project?.company}
							</p>
						</div>
						<div className="text-foreground/70">{date}</div>
					</div>

					<div className="my-4 flex flex-row gap-5">
						{/* Project Link */}
						{project?.webUrl && (
							<a
								href={project.webUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex gap-1 text-sky-500 hover:underline dark:text-sky-300"
							>
								<ExternalLink /> {websiteLabel}
							</a>
						)}

						{/* Github Link */}
						{project?.githubUrl && (
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underlin flex gap-1 text-teal-500 dark:text-teal-300"
							>
								<Github /> {githubLabel}
							</a>
						)}
					</div>

					{/* Tags */}
					<TagList tags={project.tags as TagElement[]} />
				</div>
			</div>
			{project?.info && (
				<div className="flex flex-col gap-1">
					<RichText content={project?.info} />
				</div>
			)}
		</div>
	);
}
