import { About, Projects, Experiences, Educations } from ".";

export interface CVPage {
	contentType: "portfolioCv";
	slug?: string;
	homeTitle: string;
	about: About | null;
	projects: Projects | null;
	experiences: Experiences | null;
	educations: Educations | null;
}
