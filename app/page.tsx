import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, sortExecutives } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { StatLine } from '@/components/StatLine';
import { FieldNote } from '@/components/FieldNote';

/**
 * Home.
 *
 * Reading order is the argument the site makes: state the position, show the
 * record, then show the people — evidence before personality. That is why the
 * board sits below the projects rather than above them.
 */
export default function HomePage() {
  const featured = byDateDesc(projects.filter((project) => project.featured)).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 4);

  return (
    <>
      {/* Masthead ------------------------------------------------------- */}
      <section className="wrap pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">
          {club.district} · Chartered {new Date(club.charterDate ?? '').getFullYear() || '—'}
        </p>

        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.02] font-semibold text-ink md:text-display">
          {club.tagline}
        </h1>

        <div className="mt-10 grid gap-10 border-t border-rule pt-8 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-7">
            {club.description}
          </p>
          <div className="flex flex-wrap items-start gap-4 md:col-span-5 md:justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs uppercase tracking-[0.18em] text-page transition-colors hover:bg-accent"
            >
              The record
              <ArrowRight aria-hidden size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-page"
            >
              Join the club
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <Photo image={club.heroImage} ratio="wide" priority sizes="100vw" />
      </section>

      {/* Ledger --------------------------------------------------------- */}
      <div className="wrap band">
        <StatLine stats={club.stats} label="Club record to date" />
      </div>

      {/* Position ------------------------------------------------------- */}
      <section className="border-y border-rule bg-panel" aria-labelledby="position-heading">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2
              id="position-heading"
              className="font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl"
            >
              How we work
            </h2>
          </div>
          <div className="md:col-span-8">
            <ol className="grid gap-px bg-rule sm:grid-cols-2">
              {club.about.values.map((value, index) => (
                <li key={value.title} className="bg-panel p-6">
                  <Reveal delay={index * 60}>
                    <span className="entry-number text-sm font-semibold" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {value.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Entries -------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="entries-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="entries-heading"
            className="font-serif text-3xl font-semibold text-ink md:text-4xl"
          >
            Recent entries
          </h2>
          <Link
            href="/projects"
            className="text-xs uppercase tracking-[0.18em] text-accent hover:text-accent-strong"
          >
            All {projects.length} entries →
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-14">
          {featured.map((project, index) => (
            <FieldNote key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* People --------------------------------------------------------- */}
      <section className="border-t border-rule" aria-labelledby="board-heading">
        <div className="wrap band grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2
              id="board-heading"
              className="font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl"
            >
              Who keeps the record
            </h2>
            <p className="measure mt-4 text-ink-muted">
              The board for {leadership[0]?.term ?? 'this year'}. Every member runs at least one
              project before their term ends.
            </p>
            <Link
              href="/board"
              className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-accent hover:text-accent-strong"
            >
              The full board →
            </Link>
          </div>

          <ul className="md:col-span-8">
            {leadership.map((member, index) => (
              <li
                key={member.id}
                className="flex items-baseline justify-between gap-6 border-b border-rule py-4 first:border-t"
              >
                <Reveal delay={index * 50} className="contents">
                  <span className="font-serif text-lg font-semibold text-ink">{member.name}</span>
                  <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-ink-faint">
                    {member.position}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              There is room for more hands.
            </h2>
            <p className="measure mt-3 text-on-inverse/75">
              Membership is open to anyone aged 12 to 30 living or studying near Arawwala. No
              experience needed — you will be running a project soon enough.
            </p>
          </div>
          <Link
            href="/join"
            className="group inline-flex shrink-0 items-center gap-2 bg-page px-6 py-3 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-accent hover:text-page"
          >
            Join the club
            <ArrowRight aria-hidden size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
