import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10"
      >
        <Link className="text-lg font-bold tracking-tight text-ink" href="/">
          TruGrade
        </Link>
        <Link
          className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-brand"
          href="/dashboard"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
