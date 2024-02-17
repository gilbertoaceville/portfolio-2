import type { Block, Inline } from "@contentful/rich-text-types";

import styles from "../rich-text.module.scss";

const Paragraph = (node: Block | Inline, children: React.ReactNode) => {
	const paragraphs = (Array.isArray(children) ? children : [children]).filter(
		child => child !== ""
	);
	return paragraphs.length ? <p className="block">{paragraphs}</p> : null;
};

const Heading1 = (node: Block | Inline, children: React.ReactNode) => (
	<h1>{children}</h1>
);

const Heading2 = (node: Block | Inline, children: React.ReactNode) => (
	<h2>{children}</h2>
);

const Heading3 = (node: Block | Inline, children: React.ReactNode) => (
	<h3>{children}</h3>
);

const ListItem = (node: Block | Inline, children: React.ReactNode) => (
	<li>{children}</li>
);

const UnorderedList = (node: Block | Inline, children: React.ReactNode) => (
	<ul className={styles["rich-text__unordered-list"]}>{children}</ul>
);

const OrderedList = (node: Block | Inline, children: React.ReactNode) => (
	<ol className={styles["rich-text__ordered-list"]}>{children}</ol>
);

const HorizontalRule = () => <hr className={styles["rich-text__hr"]} />;

const ExternalLink = (node: Block | Inline, children: React.ReactNode) => (
	<a className="cursor-pointer" href={node.data?.uri}>
		{children}
	</a>
);

const InternalLink = (node: Block | Inline, children: React.ReactNode) => {
	const targetSlug = node.data?.target.fields?.slug || "";
	if (!targetSlug) return null;

	return <a href={targetSlug}>{children}</a>;
};

const BoldText = (text: React.ReactNode | string) => (
	<b className={styles["rich-text__bold"]}>{text}</b>
);

const ItalicText = (text: React.ReactNode | string) => (
	<i className={styles["rich-text__italic"]}>{text}</i>
);

export {
	Paragraph,
	Heading1,
	Heading2,
	Heading3,
	HorizontalRule,
	UnorderedList,
	OrderedList,
	ListItem,
	ExternalLink,
	InternalLink,
	BoldText,
	ItalicText,
};
