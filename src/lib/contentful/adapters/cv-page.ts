import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IPortfolioCv } from "../types/contentful";
import { CVPage } from "../types";
import { aboutAdapter } from "./about";
import { projectsAdapter } from "./projects";
import { experiencesAdapter } from "./experience";
import { educationsAdapter } from "./education";

export const cvPageAdapter = ({ fields, sys }: IPortfolioCv): CVPage => {
	return replaceUndefinedWithNull({
		contentType: sys.contentType.sys.id,
		homeTitle: fields.homeTitle,
		downloadLabel: fields.downloadLabel,
		slug: fields.slug,
		about: fields?.about ? aboutAdapter(fields?.about) : null,
		experiences: fields?.experiences
			? experiencesAdapter(fields?.experiences)
			: null,
		educations: fields?.educations
			? educationsAdapter(fields?.educations)
			: null,
		projects: fields?.projects ? projectsAdapter(fields?.projects) : null,
	});
};
