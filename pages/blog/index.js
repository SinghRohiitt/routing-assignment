import Link from "next/link";
import { posts } from "../../data/posts";

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-600">
          The blog
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Notes for curious builders.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A few short reads about learning Next.js, writing reusable components,
          and understanding how pages get built.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
          >
            <p className="text-sm font-semibold text-brand-600">
              {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </p>
            <h2 className="mt-3 text-xl font-bold leading-snug text-ink">
              {post.title}
            </h2>
            <p className="mt-3 flex-1 leading-7 text-slate-600">
              {post.description}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-sm text-slate-500">By {post.author}</span>
              <Link
                href={`/blog/${post.id}`}
                className="font-semibold text-brand-700 hover:text-brand-600"
              >
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

Blog.title = "Blog | My Next.js App";
