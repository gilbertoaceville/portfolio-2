import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IEducations } from "../types/contentful";
import { Educations } from "../types/educations";
import { educationElementAdapter } from "./education-element";

export const educationsAdapter = ({ fields }: IEducations): Educations => {
	return replaceUndefinedWithNull({
		managementTitle: fields.managementTitle,
		educations: fields?.educations
			? fields.educations?.map(educationElementAdapter)
			: [],
	});
};
