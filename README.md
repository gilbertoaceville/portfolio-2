# Personal Website

A second version of [my portfolio](https://gilbert-james.vercel.app) to showcase current projects.

## Project Status

Being the second version of my portfolio, I've incorporated some new concepts; chat static files are gotten from [Contentful](https://www.contentful.com/) with two locales ([English](https://gilbert-james.vercel.app/en) & [Spanish](https://gilbert-james.vercel.app/es)). Internationalization in the web application has been implemented and its handled by the "[Next-Intl](https://github.com/vriad/next-intl)" library with translations in both locales discussed earlier.

For the admin, AI chatbot has been setup and instructed to respond to messages using my profile and experiences as base.

## New Technologies

This new concepts/packages were incorporated:

-   [Contentful](https://www.contentful.com/): Content management systems for static concepts
-   [Next-Intl](https://github.com/vriad/next-intl): For Internationalization and language translations
-   [OpenAI](https://openai.com): For chatbot setup

## Technologies

-   [Next.js 14](https://nextjs.org): A framework for building React applications
-   [TypeScript](https://www.typescriptlang.org/): A strongly-typed superset of JavaScript
-   [TailwindCSS](https://tailwindcss.com): A utility-first CSS framework
-   [Vercel](https://vercel.com): A cloud platform for static sites and Serverless Functions
-   [Plausible](https://plausible.io): A simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics system

## Getting Started

First, install the necessary dependencies:

```bash
npm install
```

then, run the development server

```bash
npm run dev
```

## Data for Chatbot

Using [Contentful export tool](https://www.npmjs.com/package/contentful-export), queried data based on tool options was retrieved from Contentful to instruct the chatbot.

```bash
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
    console.log("Oh no! Some errors occurred!");
  });
};

main();

export { main };

// package.json
  "scripts": {
    "dev": "run-s contentful:export start:dev",
    "contentful:export": "ts-node ./scripts/contentful/contentful-export.mjs",
  }
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the index page.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
