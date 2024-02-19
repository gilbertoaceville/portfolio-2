import Link from "next/link";

import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import Intro from "./Intro";
import { Button } from "@/app/[locale]/components/ui/button";
import contentfulContentGateway from "@/lib/contentful";
import {
	Contact as ContactType,
	About,
	Projects,
} from "@/lib/contentful/types";
import { getLocale } from "next-intl/server";

export default async function Page() {
	const locale = await getLocale();
	const data = await contentfulContentGateway.getHomePage(locale);

	return (
		<>
			<div className="fixed bottom-0 right-2 z-10 flex h-full flex-col items-center justify-between gap-4 py-10 md:right-6 lg:right-10">
				<Button asChild variant="link">
					<Link href={`/${locale}/cv`}>{data?.cvTitle}</Link>
				</Button>
			</div>
			<div className="max-w-screen flex w-full select-none flex-col justify-between gap-12 px-4 pt-8 sm:px-8 md:gap-4 md:px-16 md:pt-0 lg:px-24 xl:px-32">
				<Intro about={data?.about as About} />
				<ProjectsList {...(data?.projects as Projects)} />
				<Contact contact={data?.contact as ContactType} />
			</div>
		</>
	);
}
