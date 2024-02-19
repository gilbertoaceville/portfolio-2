import { About } from "@/lib/contentful/types";
import IconLinks from "./IconLinks";
import ScrollButton from "./ScrollButton";

export default function Intro({ about }: { about: About }) {
	return (
		<section
			id="intro"
			className="relative flex min-h-[90vh] flex-col items-center justify-center gap-4 overflow-hidden"
		>
			<div className="flex flex-col items-center gap-2 text-center transition-all">
				<div>
					<div className="text-5xl font-medium" aria-label="Name">
						{about?.name || "Name"}
					</div>
					<div
						className="pb-1 text-2xl text-muted-foreground"
						aria-label="Title"
					>
						{about?.title || "Title"}
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<IconLinks about={about} />
			</div>
			<ScrollButton />
		</section>
	);
}
