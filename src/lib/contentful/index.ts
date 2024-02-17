import { getHomePage } from "./requests/getHomePage";
import { ContentGateway } from "./types/ContentGateway";
import { HomePage } from "./types/home-page";

class ContentfulContentGateway implements ContentGateway {
	async getHomePage(locale?: string): Promise<HomePage | null> {
		return getHomePage(locale);
	}
}

const contentfulContentGateway = new ContentfulContentGateway();

export default contentfulContentGateway;
