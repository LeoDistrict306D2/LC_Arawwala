import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Awards',
  description: `District and national recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} awards` : 'Awards'}
        title="Recognition."
        standfirst="Awards are a by-product, not the aim — but they are part of the record, so they are listed here."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="measure text-ink-muted">
            No awards recorded yet. This page will list them as they come.
          </p>
        ) : (
          <ol className="border-t-2 border-ink">
            {awards.map((award, index) => (
              <li key={award.id} className="border-b border-rule">
                <Reveal delay={Math.min(index, 4) * 50}>
                  <div className="grid gap-3 py-7 md:grid-cols-12 md:gap-8">
                    <p className="entry-number text-xl font-semibold md:col-span-2">{award.year}</p>
                    <div className="md:col-span-6">
                      <h2 className="font-serif text-xl font-semibold text-ink">{award.title}</h2>
                      {award.competition ? (
                        <p className="mt-1 text-sm text-ink-faint">{award.competition}</p>
                      ) : null}
                      {award.description ? (
                        <p className="measure mt-2 text-sm leading-relaxed text-ink-muted">
                          {award.description}
                        </p>
                      ) : null}
                    </div>
                    <div className="md:col-span-4 md:text-right">
                      {award.level ? (
                        <span className="inline-block border border-rule-strong px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
                          {levelLabel[award.level] ?? award.level}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}
