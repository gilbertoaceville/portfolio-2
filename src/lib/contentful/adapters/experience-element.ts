import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import {
	IExperienceDescriptionItem,
	IExperienceElement,
} from "../types/contentful.d";
import { tagElementAdapter } from "./tag-element";
import { ExperienceElement } from "../types/experience-element";

export const experienceElementAdapter = ({
	fields,
}: IExperienceElement): ExperienceElement => {
	return replaceUndefinedWithNull({
		managementTitle: fields.managementTitle,
		title: fields.title,
		company: fields.company,
		description: fields.description?.map(
			(item: IExperienceDescriptionItem & string) => item.fields.value
		),
		location: fields.location,
		startDate: fields.startDate,
		endDate: fields.endDate,
		tags: fields.tags?.map(tagElementAdapter),
		extraTags: fields.extraTags?.map(tagElementAdapter),
		summary: fields.summary,
	});
};
