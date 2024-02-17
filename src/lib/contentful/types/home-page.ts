import { About, Contact, Projects } from ".";

export interface HomePage {
	contentType: "portfolioHome";
	slug?: string;
	cvTitle: string;
	about: About | null;
	contact: Contact | null;
	projects: Projects | null;
}
