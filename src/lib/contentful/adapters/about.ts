import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IPortfolioAbout } from "../types/contentful";
import { About } from "../types/about";
import { tagElementAdapter } from "./tag-element";

export const aboutAdapter = ({ fields }: IPortfolioAbout): About => {
	return replaceUndefinedWithNull({
		managementTitle: fields.managementTitle,
		id: fields.id,
		title: fields.title,
		description: fields?.description ? fields.description : "",
		name: fields.name,
		tags: fields.tags?.map(tagElementAdapter),
		phone: fields.phone,
		location: fields.location,
		email: fields.email,
		linkedin: fields.linkedIn,
		github: fields.github,
	});
};
