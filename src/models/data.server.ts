import contentfulContentGateway from "@/lib/contentful";

export async function getAllData() {
	const [intro, cv] = await Promise.all([
		contentfulContentGateway.getHomePage(),
		contentfulContentGateway.getCvPage(),
	]);

	return {
		about: intro?.about,
		educations: cv?.educations,
		projects: intro?.projects,
		experiences: cv?.experiences,
		// messages,
	};
}
