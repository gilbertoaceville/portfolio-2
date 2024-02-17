import Link from "next/link";

import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import Intro from "./Intro";
import { Button } from "@/components/ui/button";
import contentfulContentGateway from "@/lib/contentful";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Page() {
	const data = await contentfulContentGateway.getHomePage();

	console.log({ data });

	return (
		<>
			<div className="fixed bottom-0 right-2 z-10 flex h-full flex-col items-center justify-between gap-4 py-8 md:right-6 lg:right-10">
				<Button asChild variant="link">
					<Link href="/cv">cv</Link>
				</Button>
			</div>
			<div className="max-w-screen flex w-full select-none flex-col justify-between gap-12 px-4 pt-8 sm:px-8 md:gap-4 md:px-16 md:pt-0 lg:px-24 xl:px-32">
				<Intro />
				<ProjectsList />
				<Contact />
			</div>
		</>
	);
}
