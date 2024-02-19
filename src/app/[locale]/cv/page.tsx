import { Button } from "@/app/[locale]/components/ui/button";
import Link from "next/link";
import Experiences from "./Experiences";
import Projects from "./Projects";
import DownloadResume from "../DownloadResume";
import Educations from "./Education";
import contentfulContentGateway from "@/lib/contentful";
import { Projects as ProjectsType } from "@/lib/contentful/types";
import { getLocale } from "next-intl/server";

export default async function Page() {
	const locale = await getLocale();
	const data = await contentfulContentGateway.getCvPage(locale);

	const linkedInUsername = data?.about?.linkedin
		?.replace(/\/$/, "")
		.split("/")
		.pop();
	const githubUsername = data?.about?.github
		?.replace(/\/$/, "")
		.split("/")
		.pop();

	return (
		<div className="mx-auto max-w-4xl space-y-4 px-4 py-4 md:space-y-8 md:py-8 print:space-y-2 print:px-0 print:py-0">
			<div className="flex w-full items-center justify-between print:hidden">
				<Button className="!px-0" variant="link" asChild>
					<Link href="/">{data?.homeTitle}</Link>
				</Button>
				<DownloadResume
					downloadLabel={data?.downloadLabel || "Download"}
				/>
			</div>
			<div className="flex flex-col justify-between gap-2 md:flex-row print:flex-row print:gap-1">
				<div>
					<div className="text-2xl font-bold">
						{data?.about?.name}
					</div>
					<div className="pb-1 text-lg font-semibold">
						{data?.about?.title}
					</div>
					<div>{data?.about?.location}</div>
				</div>
				<div className="flex flex-col justify-center gap-1 pt-1 text-sm md:text-right">
					<div>
						{data?.about?.emailText || "Email"}:{" "}
						<a
							className="hover:underline"
							target="_blank"
							href={
								"mailto:" +
								data?.about?.email +
								"?subject=Hello!"
							}
						>
							{data?.about?.email}
						</a>
					</div>
					<div>
						LinkedIn:{" "}
						<a
							className="hover:underline"
							target="_blank"
							href={data?.about?.linkedin}
						>
							@{linkedInUsername}
						</a>
					</div>
					<div>
						GitHub:{" "}
						<a
							className="hover:underline"
							target="_blank"
							href={data?.about?.github}
						>
							@{githubUsername}
						</a>
					</div>
				</div>
			</div>
			<p className="text-sm">{data?.about?.description}</p>
			<Experiences {...data?.experiences} />
			<Educations {...data?.educations} />
			<Projects {...(data?.projects as ProjectsType)} />
		</div>
	);
}
