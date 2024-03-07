import type OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

import openai from "@/lib/openai";
import { NextResponse } from "next/server";
import contentfulData from "../../../../exports/contentful/contentful-export-portfolio.json";
import { getDataEntries } from "@/utils/helpers/getDataEntries";

export const runtime = "edge";

type ResponseMessages = {
	messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[];
};

type SystemMessage = OpenAI.Chat.Completions.ChatCompletionSystemMessageParam;

export async function POST(request: Request) {
	try {
		const { messages } = (await request.json()) as ResponseMessages;

		const { about, experiences } = getDataEntries(contentfulData);

		const dataString = `I have these experiences: ${JSON.stringify(
			experiences
		)}.\n\n`;

		const systemInstruction: SystemMessage = {
			role: "system",
			content:
				`You are a helpful assistant for ${about?.name}. Here's some information about them: with title ${about.title} and ${about?.description}.\n\n` +
				dataString +
				"Responses should be technical.",
		};

		messages.unshift(systemInstruction);

		const response = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			stream: true,
			messages,
		});

		const stream = OpenAIStream(response);
		return new StreamingTextResponse(stream);
	} catch (error) {
		return new NextResponse(
			(error as any)?.message || "Something went haywire",
			{
				status: 500,
			}
		);
	}
}
