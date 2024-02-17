import { getCvPage } from "./requests/getCvPage";
import { getHomePage } from "./requests/getHomePage";
import { CVPage } from "./types";
import { ContentGateway } from "./types/ContentGateway";
import { HomePage } from "./types/home-page";

class ContentfulContentGateway implements ContentGateway {
	async getHomePage(locale?: string): Promise<HomePage | null> {
		return getHomePage(locale);
	}
	async getCvPage(locale?: string): Promise<CVPage | null> {
		return getCvPage(locale);
	}
}

const contentfulContentGateway = new ContentfulContentGateway();

export default contentfulContentGateway;
