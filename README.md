
# HeatRiskBot (Next.js)

This is a [Next.js](https://nextjs.org) project for the HeatRiskBot chatbot, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

1. **Install dependencies:**

	```bash
	npm install
	```

2. **Run the development server:**

	```bash
	npm run dev
	```

	The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Project structure:**

	- Main app code: `src/app/page.tsx`
	- Static assets: `public/` and `src/app/`
	- Configuration: `next.config.ts`, `tsconfig.json`, `package.json`

4. **Notes:**
	- This project uses [lucide-react](https://lucide.dev/) for icons. If you add new icons, install the package with `npm install lucide-react`.
	- The chatbot widget is loaded via Tidio (see `page.tsx`).

## Editing

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Build for Production

To build the app for production:

```bash
npm run build
npm start
```

## Learn More

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
