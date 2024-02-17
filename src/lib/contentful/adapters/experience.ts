import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IExperiences } from "../types/contentful";
import { Experiences } from "../types/experiences";
import { experienceElementAdapter } from "./experience-element";

export const experiencesAdapter = ({ fields }: IExperiences): Experiences => {
	return replaceUndefinedWithNull({
		managementTitle: fields.managementTitle,
		experiences: fields?.experiences
			? fields.experiences?.map(experienceElementAdapter)
			: [],
	});
};
