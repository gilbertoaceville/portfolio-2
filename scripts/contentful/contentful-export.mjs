import path from "path";
import fs from "fs-extra";
import contentfulExport from "contentful-export";
import dotenv from "dotenv";

dotenv.config({
	path: path.join(process.cwd(), "/.env.local"),
});

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_API_TOKEN = process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT;

if (!SPACE_ID) throw new Error("CONTENTFUL_SPACE_ID token is required.");
if (!MANAGEMENT_API_TOKEN)
	throw new Error("CONTENTFUL_MANAGEMENT_TOKEN token is required.");

const exportsDirPath = "/exports/contentful";
const EXPORT_DIR = path.join(process.cwd(), exportsDirPath);

const options = {
	spaceId: SPACE_ID,
	managementToken: MANAGEMENT_API_TOKEN,
	environmentId: CONTENTFUL_ENVIRONMENT || "portfolio",
	exportDir: EXPORT_DIR,
	contentFile: "contentful-export-portfolio.json",
	saveFile: true,
	skipContentModel: true,
	skipWebhooks: true,
	queryEntries: [
		"content_type=portfolioAbout",
		"content_type=experienceDescriptionItem",
	],
	queryAssets: ["fields.title=null"],
};

const main = () => {
	fs.ensureDirSync(EXPORT_DIR);

	contentfulExport(options).catch(() => {
		// eslint-disable-next-line no-console
		console.log("Oh no! Some errors occurred!");
	});
};

main();

export { main };
