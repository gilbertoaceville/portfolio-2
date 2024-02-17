import clsx from "clsx";

import { Badge } from "./ui/badge";
import { TagElement } from "@/lib/contentful/types";

export default function TagList({
	tags,
	className,
	onClick,
}: {
	tags: TagElement[];
	className?: string;
	onClick?: (tag: string) => void;
}) {
	return (
		<div className={clsx("flex flex-wrap gap-2 pt-1 text-xs", className)}>
			{(tags || []).map((t, i) =>
				onClick ? (
					<Badge
						key={"tag-" + i}
						variant="outline"
						onClick={e => {
							e.stopPropagation();
							onClick(t.value);
						}}
					>
						{t.value}
					</Badge>
				) : (
					<Badge key={"tag-" + i}>{t.value}</Badge>
				)
			)}
		</div>
	);
}
