export const posts = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description:
      "A beginner-friendly look at building fast, modern websites with Next.js.",
    content: [
      "Next.js is a React framework that gives your application useful building blocks for routing, rendering, and performance. It lets you focus on your pages while the framework takes care of much of the surrounding setup.",
      "This project uses the Pages Router. Each file inside the pages directory becomes a route, so pages/index.js is the home page and pages/about.js is the About page. A file named [id].js creates a route whose value can change for each request.",
      "Start small: make a page, link it to another page with next/link, and then add data-fetching features as your project needs them. Running npm run build is a useful way to check that pages are ready for production.",
    ],
    author: "Alex Morgan",
    date: "2025-02-14",
  },
  {
    id: "building-reusable-components",
    title: "Building Reusable Components",
    description:
      "Learn how a few small components can make a site easier to build and maintain.",
    content: [
      "A component is a reusable piece of a user interface. A site header, footer, or button can each be written once and used in several places instead of being copied from page to page.",
      "Good components have a clear job and a small, understandable interface. For example, this project's Layout component puts the shared header and footer around every page, while each page stays focused on its own content.",
      "As you build, look for repeated patterns and extract them when doing so makes the code easier to understand. Reuse should make the project simpler, not add layers that are difficult to follow.",
    ],
    author: "Jordan Lee",
    date: "2025-02-21",
  },
  {
    id: "understanding-static-generation",
    title: "Understanding Static Generation",
    description:
      "See how Next.js can prepare blog pages ahead of time with static generation.",
    content: [
      "Static generation means a page's HTML is prepared during the build rather than being created from scratch for every visitor. For content that does not change on every request, this can make pages fast and straightforward to host.",
      "In the Pages Router, getStaticPaths tells Next.js which dynamic routes to build. This project's blog detail page returns one path for each post in the shared data array.",
      "Next.js then calls getStaticProps for each path. The function uses the route's id to find the right post and passes it to the page as a prop. If no post matches, it returns notFound so Next.js can show its 404 page.",
    ],
    author: "Taylor Kim",
    date: "2025-03-03",
  },
];
