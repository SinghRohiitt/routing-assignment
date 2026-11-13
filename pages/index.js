import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-700">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              A simple place to start
            </p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Ideas become better when you{" "}
              <span className="text-brand-600">build them.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Welcome! This small website is a friendly introduction to Next.js,
              with a few pages, a working contact form, and a blog to explore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Explore the blog
                <span aria-hidden="true" className="ml-2">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                About this site
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-7 -top-7 h-32 w-32 rounded-full bg-brand-100 blur-2xl" />
            <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-indigo-100 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-7">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="ml-auto text-xs font-medium text-slate-400">
                  your-next-idea.js
                </span>
              </div>
              <div className="space-y-4 py-7 font-mono text-sm sm:text-base">
                <p className="text-slate-400">{"// Your next project starts here"}</p>
                <p>
                  <span className="text-violet-600">const</span>{" "}
                  <span className="text-ink">idea</span> ={" "}
                  <span className="text-emerald-700">&quot;something great&quot;</span>;
                </p>
                <p>
                  <span className="text-violet-600">const</span>{" "}
                  <span className="text-ink">nextStep</span> ={" "}
                  <span className="text-brand-700">build</span>(idea);
                </p>
                <p className="pt-2 text-slate-500">
                  {"// Learn a little. Make a lot."}
                </p>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm">
                <span className="font-medium text-slate-600">Ready when you are</span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                  LET&apos;S GO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-3">
        {[
          {
            title: "A few pages",
            text: "Get comfortable with file-based routing and shared layouts.",
          },
          {
            title: "Real blog routes",
            text: "Browse three posts with statically generated detail pages.",
          },
          {
            title: "A friendly form",
            text: "Try native form validation and a client-side success message.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 font-bold text-brand-700">
              +
            </div>
            <h2 className="text-lg font-bold text-ink">{item.title}</h2>
            <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-ink px-7 py-9 text-white sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="text-2xl font-bold">Have a question or an idea?</h2>
            <p className="mt-2 text-slate-300">
              I&apos;d love to hear from you. Send a note through the contact page.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-xl bg-white px-5 py-3 font-semibold text-ink transition hover:bg-brand-50"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

Home.title = "Home | My Next.js App";
