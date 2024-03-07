"use client";

import { Trash } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { deleteContact } from "@/models/contact.server";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function DeleteButton({ id }: { id: number }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const locale = useLocale();

	const onClick = async () => {
		setLoading(true);
		await deleteContact(id);
		setLoading(false);
		router.push(`${locale}/admin/messages`);
		router.refresh();
	};

	return (
		<Button
			onClick={onClick}
			size="icon"
			disabled={loading}
			variant="destructive"
		>
			<Trash />
		</Button>
	);
}
