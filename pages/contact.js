import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-600">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
          Have a question, some feedback, or just want to say hello? Fill out the
          form and you&apos;ll see a confirmation when it&apos;s submitted.
        </p>
        <div className="mt-8 rounded-2xl bg-brand-50 p-5 text-sm leading-6 text-brand-700">
          This demo form validates in your browser. It does not send or store
          your information.
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
      >
        {submitted && (
          <div
            role="status"
            className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
          >
            Thanks for your message! Your form was submitted successfully.
          </div>
        )}

        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              maxLength={80}
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500"
              onChange={() => submitted && setSubmitted(false)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500"
              onChange={() => submitted && setSubmitted(false)}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              placeholder="What would you like to say?"
              className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500"
              onChange={() => submitted && setSubmitted(false)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

Contact.title = "Contact | My Next.js App";
