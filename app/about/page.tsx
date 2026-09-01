import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { StatLine } from '@/components/StatLine';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="A club that writes things down."
        standfirst={club.about.mission}
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p
              key={index}
              className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-5">
          <Photo image={club.heroImage} ratio="landscape" sizes="(min-width: 768px) 40vw, 100vw" />

          <dl className="mt-8 border-t border-rule">
            {[
              { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
              { term: 'District', value: club.district },
              { term: 'Multiple district', value: club.multipleDistrict },
              { term: 'Sponsoring club', value: club.sponsoringLionsClub ?? '—' },
              { term: 'Base', value: club.contact.address ?? '—' },
            ].map((row) => (
              <div key={row.term} className="flex justify-between gap-6 border-b border-rule py-3">
                <dt className="text-xs uppercase tracking-[0.16em] text-ink-faint">{row.term}</dt>
                <dd className="text-right text-sm text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="border-y border-rule bg-panel">
        <div className="wrap band grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">Mission</h2>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink">{club.about.mission}</p>
          </div>
          <div>
            <h2 className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">Vision</h2>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink">{club.about.vision}</p>
          </div>
        </div>
      </section>

      <div className="wrap band">
        <StatLine stats={club.stats} label="Club record to date" />
      </div>
    </>
  );
}
