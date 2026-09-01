import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="entry-number text-sm font-semibold">404</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ink md:text-title">
        No entry at that address.
      </h1>
      <p className="measure mt-4 text-lg text-ink-muted">
        The page you asked for is not in the record. It may have been renamed, or never existed.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center border border-ink px-6 py-3 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-page"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center border border-rule-strong px-6 py-3 text-xs uppercase tracking-[0.18em] text-ink-muted transition-colors hover:border-ink hover:text-ink"
        >
          The record
        </Link>
      </div>
    </div>
  );
}
