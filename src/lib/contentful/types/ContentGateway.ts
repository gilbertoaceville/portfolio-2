import { HomePage } from "./home-page";

export interface ContentGateway {
	getHomePage(locale?: string): Promise<HomePage | null>;
}
