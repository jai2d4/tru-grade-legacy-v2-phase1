import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-4rem)] max-w-6xl px-6 py-16 sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        TruGrade workspace
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink">
        Dashboard
      </h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-600">
        Your grading workspace is ready. Create a rubric to start building
        transparent, consistent assessments.
      </p>
      <Link
        className="mt-8 inline-flex rounded-lg border border-slate-300 px-5 py-3 font-semibold text-ink transition hover:border-brand hover:text-brand"
        href="/"
      >
        Back to home
      </Link>
    </main>
  );
}
