import replaceUndefinedWithNull from "@/utils/helpers/replaceUndefinedWithNull";
import { IContact } from "../types/contentful";
import { Contact } from "../types/contact";

export const contactAdapter = ({ fields }: IContact): Contact => {
	return replaceUndefinedWithNull({
		managementTitle: fields.managementTitle,
		email: fields.email,
		linkedIn: fields.linkedIn,
		description: fields.description,
		subDescription: fields.subDescription,
		github: fields.github,
		ctaText: fields.ctaText,
		emailText: fields.emailText,
		nameText: fields.nameText,
		message: fields.message,
		successMessage: fields.successMessage,
		submitText: fields.submitText,
		messageText: fields.messageText,
	});
};
