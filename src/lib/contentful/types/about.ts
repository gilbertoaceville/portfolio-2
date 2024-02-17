import { TagElement } from "./tag-element";

export interface About {
	managementTitle?: string;
	id: number;
	title: string;
	description?: string;
	name: string;
	tags?: TagElement[];
	phone?: string;
	location?: string;
	email?: string;
	linkedin?: string;
	github?: string;
}
