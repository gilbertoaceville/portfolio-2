import type { Asset as IAsset } from "contentful";
import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { Asset } from "../types/asset";

export const assetAdapter = ({ fields }: IAsset): Asset => {
	return replaceUndefinedWithNull({
		description: fields?.description as string,
		url: `https:${fields.file?.url}`,
	});
};
