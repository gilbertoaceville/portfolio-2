import { CVPage } from "./cv-page";
import { HomePage } from "./home-page";

export interface ContentGateway {
	getHomePage(locale?: string): Promise<HomePage | null>;
	getCvPage(locale?: string): Promise<CVPage | null>;
}
