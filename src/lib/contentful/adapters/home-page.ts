import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IPortfolioHome } from "../types/contentful";
import { HomePage } from "../types/home-page";
import { aboutAdapter } from "./about";
import { contactAdapter } from "./contact";
import { projectsAdapter } from "./projects";

export const homePageAdapter = ({ fields, sys }: IPortfolioHome): HomePage => {
	return replaceUndefinedWithNull({
		contentType: sys.contentType.sys.id,
		cvTitle: fields.cvTitle,
		slug: fields.slug,
		about: fields?.about ? aboutAdapter(fields?.about) : null,
		contact: fields?.contact ? contactAdapter(fields?.contact) : null,
		projects: fields?.projects ? projectsAdapter(fields?.projects) : null,
	});
};
