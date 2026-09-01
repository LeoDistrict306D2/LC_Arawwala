import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to anyone aged 12 to 30 near Arawwala.`,
  alternates: { canonical: '/join' },
};

const reasons = [
  {
    title: 'You will run something',
    body: 'Every member leads at least one project before their term ends. Not helps with — leads. That is the whole point of a Leo club.',
  },
  {
    title: 'You will learn to measure',
    body: 'Budgets, headcounts, follow-ups, write-ups. Unglamorous skills that turn out to matter everywhere else too.',
  },
  {
    title: 'You will meet the district',
    body: 'Arawwala is one of 19 clubs in Leo District 306 D2, and part of a movement of over 200,000 Leos worldwide.',
  },
  {
    title: 'You will be held to it',
    body: 'Attendance is recorded and projects are published. That is the deal — and it is why the record means something.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="There is room for more hands."
        standfirst="Open to anyone aged 12 to 30 living or studying near Arawwala. No experience needed."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-6" aria-labelledby="why">
          <h2 id="why" className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">
            What you are signing up for
          </h2>
          <ol className="mt-6 border-t border-rule">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="border-b border-rule py-5">
                <span className="entry-number text-sm font-semibold" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 font-serif text-xl font-semibold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6" aria-labelledby="enquiry">
          <h2 id="enquiry" className="text-[0.7rem] uppercase tracking-[0.22em] text-accent">
            Get in touch
          </h2>
          <p className="measure mt-4 mb-8 text-ink-muted">
            Fill this in and it will open an email to the club secretary, pre-written. We answer
            everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
