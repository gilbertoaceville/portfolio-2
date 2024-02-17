import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IEducationElement } from "../types/contentful";
import { EducationElement } from "../types/education-element";

export const educationElementAdapter = ({
	fields,
}: IEducationElement): EducationElement => {
	return replaceUndefinedWithNull({
		managementTitle: fields.managementTitle,
		degree: fields.degree,
		endDate: fields.endDate,
		school: fields.school,
	});
};
