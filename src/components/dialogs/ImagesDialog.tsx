"use client";

import Image from "next/image";

import ImageCard from "@/components/cards/ImageCard";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ProjectElement } from "@/lib/contentful/types/project-element";
import { track } from "@vercel/analytics/react";

export default function ImagesDialog({
	project,
	src,
	alt,
}: {
	project: ProjectElement;
	src: string;
	alt: string;
}) {
	const openImageModal = () =>
		track("View Project Image", {
			project: project.title,
		});

	return (
		<Dialog>
			<DialogTrigger
				onClick={openImageModal}
				asChild
				className="object-cover"
			>
				<Image
					width={800}
					height={400}
					src={src}
					alt={alt}
					className="aspect-video w-full cursor-pointer select-none rounded-lg border border-foreground object-cover shadow-sm transition-all hover:sm:scale-[101%]"
				/>
			</DialogTrigger>
			<DialogContent size="full">
				<ImageCard project={project} />
			</DialogContent>
		</Dialog>
	);
}
