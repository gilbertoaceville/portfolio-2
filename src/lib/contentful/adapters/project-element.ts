import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IProjectElement, IProjectElementFields } from "../types/contentful.d";
import { ProjectElement } from "../types/project-element";
import { assetAdapter } from "./asset";
import { tagElementAdapter } from "./tag-element";

export const projectElementAdapter = ({
	fields,
}: IProjectElement): ProjectElement => {
	return replaceUndefinedWithNull({
		title: fields.title,
		company: fields.company,
		description: fields.description,
		webUrl: fields.webUrl,
		date: fields.date,
		images: fields.images.map(assetAdapter),
		tags: fields.tags?.map(tagElementAdapter),
		githubUrl: fields.githubUrl,
		info: fields.info,
	});
};
