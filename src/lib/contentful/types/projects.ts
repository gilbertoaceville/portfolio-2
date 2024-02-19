import { ProjectElement } from "./project-element";

export interface Projects {
	managementTitle?: string;
	ctaLabel?: string;
	projects: ProjectElement[];
	websiteLabel?: string;
	githubLabel?: string;
}
