"use client";

import { useFormState } from "react-dom";

import Submit from "../buttons/SubmitButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Contact } from "@/lib/contentful/types";

async function submitMessage(
	p: any,
	formData: FormData
): Promise<FormResponse> {
	try {
		return { success: "Message sent successfully!" };
	} catch (e) {
		return { error: String(e) };
	}
}

interface ContactFormProps
	extends Pick<
		Contact,
		| "message"
		| "messageText"
		| "submitText"
		| "successMessage"
		| "nameText"
		| "emailText"
	> {}

export default function ContactForm({
	message,
	messageText,
	submitText,
	successMessage,
	nameText,
	emailText,
}: ContactFormProps) {
	const [state, formAction] = useFormState(submitMessage, {});

	return (
		<form
			action={formAction}
			className="flex h-full w-full flex-1 flex-col justify-between md:max-w-[50%]"
		>
			<div className="flex w-full select-none flex-col gap-4">
				<p className="mb-2 text-lg">{message}</p>

				<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
					<Label>{nameText}</Label>
					<Input required name="name" className="md:w-2/3" />
				</div>
				<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
					<Label>{emailText}</Label>
					<Input
						required
						className="md:w-2/3"
						type="email"
						name="email"
					/>
				</div>
				<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
					<Label>{messageText}</Label>
					<Textarea
						required
						name="message"
						className="resize-none md:w-2/3"
						rows={5}
					/>
				</div>
				<Submit>{submitText}</Submit>
				<div className="pt-2 text-center">
					{state?.success && (
						<p className="text-green-500">{state.success}</p>
					)}
					{state?.error && (
						<p className="text-red-500">{state.error}</p>
					)}
				</div>
			</div>
		</form>
	);
}
