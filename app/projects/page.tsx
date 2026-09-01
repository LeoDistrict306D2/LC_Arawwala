import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { FieldNote } from '@/components/FieldNote';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Every project run by ${club.name}, recorded in full.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} entries`}
        title="The record."
        standfirst="Every project the club has run, newest first — including the ones that did not go to plan."
      />

      <div className="wrap band flex flex-col gap-14">
        {entries.map((project, index) => (
          <FieldNote key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
