import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

/**
 * A project, presented as a numbered journal entry.
 *
 * This is the signature component of the site — it is why there are no project
 * cards anywhere. An entry is: a number, a rule, a meta line, a headline, the
 * summary, and one wide photograph. Reading the projects page should feel like
 * turning pages in a logbook, not scanning a grid of tiles.
 *
 * The number is derived from the project id (`p-047` → `047`) so entries keep
 * their real archive number rather than a position in an array.
 */
export function FieldNote({ project, index = 0 }: { project: Project; index?: number }) {
  const entryNumber = project.id.replace(/^\D*/, '').padStart(3, '0');

  const meta = [
    formatDate(project.date, { year: 'numeric', month: 'long' }),
    project.location,
    project.year,
  ].filter(Boolean);

  return (
    <Reveal delay={Math.min(index, 3) * 80}>
      <article className="grid gap-6 border-t border-rule pt-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-2">
          <span className="entry-number text-3xl font-semibold md:text-4xl" aria-hidden>
            {entryNumber}
          </span>
          <span className="sr-only">Entry {entryNumber}.</span>
        </div>

        <div className="md:col-span-5">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-faint">
            {meta.join(' · ')}
          </p>

          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-ink md:text-3xl">
            <Link href={`/projects/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>

          <p className="measure mt-3 leading-relaxed text-ink-muted">{project.summary}</p>

          {project.impact && project.impact.length > 0 ? (
            <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {project.impact.slice(0, 3).map((stat) => (
                <div key={stat.id}>
                  <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-faint">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-xl font-semibold text-ink">
                    {stat.prefix}
                    {typeof stat.value === 'number' ? stat.value.toLocaleString('en-LK') : stat.value}
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="group mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
          >
            Read the entry
            <ArrowRight
              aria-hidden
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="md:col-span-5">
          <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden>
            <Photo
              image={project.heroImage}
              ratio="landscape"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
