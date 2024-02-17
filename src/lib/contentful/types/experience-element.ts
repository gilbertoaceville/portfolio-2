import { IExperienceDescriptionItem, ITagElement } from "./contentful";

export interface ExperienceElement {
	managementTitle?: string;
	title: string;
	company: string;
	location: string;
	description?: IExperienceDescriptionItem[];
	endDate?: string;
	startDate: string;
	tags?: ITagElement[];
	extraTags?: ITagElement[];
	summary?: string;
}
