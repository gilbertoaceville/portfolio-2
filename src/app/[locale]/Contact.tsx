import SectionTitle from "./SectionTitle";
import ContactForm from "@/app/[locale]/components/Forms/ContactForm";
import { Button } from "@/app/[locale]/components/ui/button";
import Link from "next/link";
import PageViews from "./PageViews";
import type { Contact } from "@/lib/contentful/types/contact";
import { useLocale } from "next-intl";

interface ContactProps {
	contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
	const locale = useLocale();

	const linkedInUsername = contact?.linkedIn
		? contact.linkedIn.replace(/\/$/, "").split("/").pop()
		: "";
	const githubUsername = contact?.github?.replace(/\/$/, "").split("/").pop();

	return (
		<section
			id={contact?.managementTitle}
			className="flex min-h-screen flex-col gap-4 py-2 sm:py-16 md:gap-8"
		>
			<SectionTitle id={contact?.managementTitle || "Contact"} />
			<div className="flex flex-col gap-4 md:mt-4 md:flex-row md:justify-between md:gap-8">
				<div className="space-y-12 pb-8">
					<div className="space-y-4">
						<p>{contact?.description}</p>
						<p>{contact?.subDescription}</p>
					</div>
					<div className="space-y-4">
						<p>
							{contact?.emailText || "Email"}:{" "}
							<a
								className="hover:underline"
								href={
									"mailto:" +
									contact?.email +
									"?subject=Hello!"
								}
								target="_blank"
								rel="noreferrer"
							>
								{contact?.email}
							</a>
						</p>
						<p>
							LinkedIn:{" "}
							<a
								className="hover:underline"
								href={contact?.linkedIn}
								target="_blank"
								rel="noreferrer"
							>
								{"@" + linkedInUsername}
							</a>
						</p>
						<p>
							GitHub:{" "}
							<a
								className="hover:underline"
								href={contact?.github}
								target="_blank"
								rel="noreferrer"
							>
								{"@" + githubUsername}
							</a>
						</p>
					</div>
					<Button
						className="mr-auto !h-6 !px-0 !py-0 font-semibold"
						asChild
						size="sm"
						variant="link"
					>
						<Link href={`/${locale}/cv`}>{contact?.ctaText}</Link>
					</Button>
				</div>
				<ContactForm {...contact} />
			</div>
			<PageViews />
		</section>
	);
}
