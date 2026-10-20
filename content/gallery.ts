import type { GalleryItem } from '@/lib/types';

/**
 * Photo gallery.
 *
 * Illustrative entries only — every item points at the shared placeholder
 * until the club supplies real photography. The shape (album, projectSlug,
 * date) is what matters; swap `src`/`alt` for real images as they arrive.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1067,
});

export const gallery: GalleryItem[] = [
  {
    id: 'g-001',
    ...placeholder('Volunteers sorting books during the Library Restart project'),
    album: 'Library Restart',
    projectSlug: 'library-restart',
    date: '2025-08-16',
  },
  {
    id: 'g-002',
    ...placeholder('New shelving installed in the reopened reading room'),
    album: 'Library Restart',
    projectSlug: 'library-restart',
    date: '2025-08-16',
  },
  {
    id: 'g-003',
    ...placeholder('An O/L tutoring session in progress'),
    album: 'Exam Year Tutoring',
    projectSlug: 'exam-year-tutoring',
    date: '2025-05-03',
  },
  {
    id: 'g-004',
    ...placeholder('Tutors and students reviewing a model paper'),
    album: 'Exam Year Tutoring',
    projectSlug: 'exam-year-tutoring',
    date: '2025-05-24',
  },
  {
    id: 'g-005',
    ...placeholder('Residents and Leos clearing the storm drain together'),
    album: 'Canal Clearing',
    projectSlug: 'canal-clearing',
    date: '2024-09-21',
  },
  {
    id: 'g-006',
    ...placeholder('Donors at the Arawwala blood drive'),
    album: 'Blood Drive',
    projectSlug: 'blood-drive',
    date: '2024-06-08',
  },
  {
    id: 'g-007',
    ...placeholder('Supply packs prepared for distribution to three schools'),
    album: 'School Supplies',
    projectSlug: 'school-supplies',
    date: '2024-01-11',
  },
  {
    id: 'g-008',
    ...placeholder('Members planting saplings along the Arawwala–Kottawa road'),
    album: 'Roadside Planting',
    projectSlug: 'tree-planting',
    date: '2023-10-14',
  },
  {
    id: 'g-009',
    ...placeholder('The full board at the 2025/26 installation'),
    album: 'Club Life',
    date: '2025-07-05',
  },
  {
    id: 'g-010',
    ...placeholder('Members at the Leo District 306 D2 Convention'),
    album: 'Club Life',
    date: '2025-03-14',
  },
];
