import Link from "next/link";
import { posts } from "../../data/posts";

export default function BlogPost({ post }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center font-semibold text-brand-700 hover:text-brand-600"
      >
        <span aria-hidden="true" className="mr-2">
          &larr;
        </span>
        All posts
      </Link>

      <header className="mt-8 border-b border-slate-200 pb-8">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
          {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {post.description}
        </p>
        <p className="mt-5 text-sm font-medium text-slate-500">
          Written by {post.author}
        </p>
      </header>

      <div className="space-y-6 py-8 text-lg leading-8 text-slate-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

BlogPost.title = "Blog post | My Next.js App";

// Generate one static route for every post in the shared data file.
export function getStaticPaths() {
  return {
    paths: posts.map((post) => ({
      params: { id: post.id },
    })),
    fallback: false,
  };
}

// Next.js calls this for each path above and passes the result as page props.
export function getStaticProps({ params }) {
  const post = posts.find((item) => item.id === params.id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}
