import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Transparent rubrics",
    description:
      "Give every student a clear view of the criteria before they submit their work."
  },
  {
    number: "02",
    title: "Actionable feedback",
    description:
      "Connect every score to specific comments that help students understand what to improve."
  },
  {
    number: "03",
    title: "Consistent assessment",
    description:
      "Use shared criteria to make grading more reliable across assignments and classrooms."
  }
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:px-10 sm:pt-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Better feedback starts here
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-ink sm:text-7xl">
            Make every grade a step forward.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            TruGrade helps educators assess work with clear rubrics and gives
            students the meaningful feedback they need to grow.
          </p>
          <Link
            className="mt-9 inline-flex items-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            href="/dashboard"
          >
            Explore the dashboard
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>

        <div className="mt-20 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.number}>
              <p className="text-sm font-semibold text-brand">
                {feature.number}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-ink">
                {feature.title}
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
