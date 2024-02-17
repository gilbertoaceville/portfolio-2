import clsx from "clsx";
import { forwardRef } from "react";

import { resolveRichText } from "./helpers/resolveRichText";

import type { RichTextProps } from "./rich-text.types";

const RichText = forwardRef<HTMLDivElement, RichTextProps>(
	({ content, className, ...rest }, ref) => (
		<div ref={ref} className={clsx("flex flex-col", className)} {...rest}>
			{resolveRichText(content)}
		</div>
	)
);

RichText.displayName = "RichText";

export default RichText;
