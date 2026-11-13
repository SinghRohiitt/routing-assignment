const skills = ["Responsive UI", "React", "Next.js", "JavaScript", "CSS"];
const technologies = ["Next.js", "React", "Tailwind CSS", "Git", "Node.js"];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-600">
          About
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          A little about the developer
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Hello! I&apos;m a frontend developer who enjoys turning ideas into
          accessible, easy-to-use web experiences. I like learning by building
          and sharing what I discover along the way.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-ink">Skills</h2>
          <p className="mt-2 leading-7 text-slate-600">
            The areas I enjoy working on most.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-ink">Experience</h2>
          <p className="mt-2 leading-7 text-slate-600">
            I build projects that bring together thoughtful design and reliable
            frontend code. I value clear communication, continuous learning,
            and making the web work well for everyone.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:col-span-2">
          <h2 className="text-xl font-bold text-ink">Technologies</h2>
          <p className="mt-2 leading-7 text-slate-600">
            Tools used in this project and in my frontend workflow.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 font-medium text-slate-700"
              >
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                {technology}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

About.title = "About | My Next.js App";
