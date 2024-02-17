import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IPortfolioProjects } from "../types/contentful";
import { Projects } from "../types/projects";
import { projectElementAdapter } from "./project-element";

export const projectsAdapter = ({ fields }: IPortfolioProjects): Projects => {
	return replaceUndefinedWithNull({
		managementTitle: fields.managementTitle,
		projects: fields?.projects
			? fields.projects?.map(projectElementAdapter)
			: [],
	});
};
