# My Next.js App

A beginner-friendly example website built with the **Next.js Pages Router**. It includes a responsive home page, About and Contact pages, a client-side validated contact form, and a blog with three statically generated detail pages.

## Technologies

- Next.js 16 (Pages Router)
- React 19 and JavaScript
- Tailwind CSS 3
- PostCSS and Autoprefixer

## Installation

Install Node.js 20.9 or newer, then install the project dependencies:

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create and run the production build:

```bash
npm run build
npm start
```

## Project structure

```text
.
|-- components/
|   |-- Footer.js
|   |-- Header.js
|   `-- Layout.js
|-- data/
|   `-- posts.js
|-- pages/
|   |-- blog/
|   |   |-- [id].js
|   |   `-- index.js
|   |-- _app.js
|   |-- about.js
|   |-- contact.js
|   `-- index.js
|-- styles/
|   `-- globals.css
|-- eslint.config.mjs
|-- next.config.js
|-- package-lock.json
|-- package.json
|-- postcss.config.js
`-- tailwind.config.js
```

## Routing and pages

The `pages/` directory uses file-based routing: `pages/index.js` is `/`, `pages/about.js` is `/about`, `pages/contact.js` is `/contact`, and `pages/blog/index.js` is `/blog`. The shared `_app.js` wraps every page in `Layout`, which supplies the common header, footer, and document metadata.

The `Header` uses Next.js `Link` for internal navigation, highlights the current route (including blog detail routes), and provides a toggleable mobile menu.

## Dynamic routing and static generation

The file `pages/blog/[id].js` defines a dynamic route. The `[id]` segment is supplied by the URL, for example `/blog/getting-started-with-nextjs`. The three sample posts live in `data/posts.js`, which is shared by the blog listing and detail page.

- `getStaticPaths()` reads the post IDs and returns a route for each one. Next.js builds those three pages during `npm run build`. With `fallback: false`, other IDs use Next.js's 404 page.
- `getStaticProps({ params })` finds the post matching the route ID and returns it as a page prop. It returns `{ notFound: true }` when there is no matching post.

## Contact form

The contact form uses browser validation (`required`, email input type, and length limits) and React state to show a success message. It is a frontend-only demonstration and does not transmit or store form submissions.

## Push to GitHub

Create an empty repository on GitHub, then run these commands from the project directory (replace the URL with your repository's URL):

```bash
git init
git add .
git commit -m "Build Next.js routing assignment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If Git is already initialized, skip `git init`. If an `origin` remote already exists, update it or use its existing URL instead of adding it again.

## Deploy to Vercel

1. Push the project to GitHub using the steps above.
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import the GitHub repository and leave the detected Next.js build settings at their defaults.
4. Choose **Deploy**. Vercel runs the production build and provides a URL; later pushes to the connected branch trigger new deployments.

You can also deploy from the command line with the Vercel CLI (`npx vercel`), following its prompts to link and deploy the project.
