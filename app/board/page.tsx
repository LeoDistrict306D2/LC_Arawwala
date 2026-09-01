import type { Metadata } from 'next';
import { club } from '@/content/club';
import { board } from '@/content/board';
import { sortExecutives, getInitials } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Executive Board',
  description: `The executive board of ${club.name}.`,
  alternates: { canonical: '/board' },
};

export default function BoardPage() {
  const members = sortExecutives(board);
  const officers = members.slice(0, 4);
  const rest = members.slice(4);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Board ${term}` : 'Board'}
        title="Who keeps the record."
        standfirst="The elected board and directors. Every member runs at least one project before their term ends."
      />

      <div className="wrap band">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 60}>
                {member.photo ? (
                  <Photo
                    image={member.photo}
                    ratio="portrait"
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex aspect-[3/4] items-center justify-center bg-panel font-serif text-4xl font-semibold text-ink-faint"
                  >
                    {getInitials(member.name)}
                  </div>
                )}
                <p className="mt-4 font-serif text-lg font-semibold text-ink">{member.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-faint">
                  {member.position}
                </p>
                {member.bio ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{member.bio}</p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ul>

        {rest.length > 0 ? (
          <section className="mt-16" aria-labelledby="directors">
            <h2 id="directors" className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">
              Directors and officers
            </h2>
            <ul className="mt-6">
              {rest.map((member) => (
                <li
                  key={member.id}
                  className="flex flex-col gap-1 border-b border-rule py-4 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-serif text-lg font-semibold text-ink">{member.name}</span>
                  <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-ink-faint">
                    {member.position}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
