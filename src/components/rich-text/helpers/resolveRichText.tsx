import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";

import {
	BoldText,
	ExternalLink,
	Heading1,
	Heading2,
	Heading3,
	HorizontalRule,
	InternalLink,
	ItalicText,
	ListItem,
	OrderedList,
	Paragraph,
	UnorderedList,
} from "./richTextComponents";

export const resolveRichText = (
	document: Document
): ReturnType<typeof documentToReactComponents> =>
	documentToReactComponents(document, {
		renderNode: {
			[BLOCKS.PARAGRAPH]: Paragraph,

			[BLOCKS.HEADING_1]: Heading1,
			[BLOCKS.HEADING_2]: Heading2,
			[BLOCKS.HEADING_3]: Heading3,

			[BLOCKS.UL_LIST]: UnorderedList,
			[BLOCKS.OL_LIST]: OrderedList,
			[BLOCKS.LIST_ITEM]: ListItem,

			[BLOCKS.HR]: HorizontalRule,

			[INLINES.HYPERLINK]: ExternalLink,
			[INLINES.ENTRY_HYPERLINK]: InternalLink,
		},

		renderMark: {
			[MARKS.BOLD]: BoldText,
			[MARKS.ITALIC]: ItalicText,
		},

		renderText: text => {
			return text
				.split("\n")
				.reduce((children: React.ReactNode[], textSegment, index) => {
					return [
						...children,
						index > 0 && <br key={index} />,
						textSegment,
					];
				}, []);
		},
	});
