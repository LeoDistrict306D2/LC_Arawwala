import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photographs from projects run by ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Photographs"
        title="From the field."
        standfirst="Pictures taken during the work, filed against the entry they belong to."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="measure">
            <p className="text-ink-muted">
              The gallery is empty while the club’s photography is being collected and
              catalogued. Project photographs are already published against each entry.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block text-xs uppercase tracking-[0.18em] text-accent hover:text-accent-strong"
            >
              Go to the record →
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <Photo
                key={item.id}
                image={item}
                ratio="landscape"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
