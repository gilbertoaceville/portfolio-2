import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { TagElement } from "../types/tag-element";
import { ITagElement } from "../types/contentful";

export const tagElementAdapter = ({ fields }: ITagElement): TagElement => {
	return replaceUndefinedWithNull({
		key: fields.key,
		value: fields.value,
	});
};
