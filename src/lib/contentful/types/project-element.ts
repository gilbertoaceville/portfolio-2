import { Document } from "@contentful/rich-text-types";
import { TagElement } from "./tag-element";
import { Asset } from "./asset";

export interface ProjectElement {
	title: string;
	description?: string;
	company: string;
	date?: string;
	info?: Document;
	tags?: TagElement[];
	images: Asset[];
	webUrl?: string | undefined;
	githubUrl?: string | undefined;
}
