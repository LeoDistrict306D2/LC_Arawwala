import Link from 'next/link';

/**
 * The heading block for every page except the home page.
 *
 * Deliberately not a coloured banner: a rule, a kicker, the title, and an
 * optional standfirst. Keeping the page on the same paper as its content is
 * what makes the site read as one continuous document.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="wrap border-b border-rule pt-14 pb-10 md:pt-20 md:pb-14">
      {breadcrumb ? (
        <nav aria-label="Breadcrumb" className="mb-5">
          <Link
            href={breadcrumb.href}
            className="text-xs uppercase tracking-[0.18em] text-ink-muted hover:text-accent"
          >
            ← {breadcrumb.label}
          </Link>
        </nav>
      ) : null}

      <p className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">{kicker}</p>

      <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] text-ink md:text-title">
        {title}
      </h1>

      {standfirst ? (
        <p className="measure mt-5 text-lg leading-relaxed text-ink-muted">{standfirst}</p>
      ) : null}
    </div>
  );
}
