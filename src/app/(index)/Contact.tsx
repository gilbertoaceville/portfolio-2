import SectionTitle from "./SectionTitle";
import ContactForm from "@/components/Forms/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageViews from "./PageViews";

const ID = "contact";

export default async function Contact() {
	const contact = {
		id: 1,
		linkedin: "https://www.linkedin.com/in/james-gilbert-ace/",
		github: "https://github.com/gilbertoaceville",
		email: "gilbertoaceville@gmail.com",
	};
	const linkedInUsername = contact.linkedin
		.replace(/\/$/, "")
		.split("/")
		.pop();
	const githubUsername = contact.github.replace(/\/$/, "").split("/").pop();

	return (
		<section
			id={ID}
			className="flex min-h-screen flex-col gap-4 py-2 sm:py-16 md:gap-8"
		>
			<SectionTitle id={ID} />
			<div className="flex flex-col gap-4 md:mt-4 md:flex-row md:justify-between md:gap-8">
				<div className="space-y-12 pb-8">
					<div className="space-y-4">
						<p>I am currently looking for new opportunities.</p>
						<p>Feel free to reach out!</p>
					</div>
					<div className="space-y-4">
						<p>
							Email:{" "}
							<a
								className="hover:underline"
								href={
									"mailto:" +
									contact.email +
									"?subject=Hello!"
								}
								target="_blank"
								rel="noreferrer"
							>
								{contact.email}
							</a>
						</p>
						<p>
							LinkedIn:{" "}
							<a
								className="hover:underline"
								href={contact.linkedin}
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
								href={contact.github}
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
						<Link href="/cv">View my CV</Link>
					</Button>
				</div>
				<ContactForm />
			</div>
			<PageViews />
		</section>
	);
}
