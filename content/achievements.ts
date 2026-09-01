import type { Achievement } from '@/lib/types';

/** TODO(content): replace with the club's actual awards record. */
export const achievements: Achievement[] = [
  {
    id: 'a-2025-service',
    title: 'Best Sustained Service Project',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description:
      'Awarded for Exam Year Tutoring, recognised for running across a full academic year rather than a single term.',
  },
  {
    id: 'a-2024-env',
    title: 'Outstanding Environmental Project',
    competition: 'Leo District 306 D2 Convention',
    year: '2024',
    level: 'runner-up',
    description: 'For Canal Clearing and the residents-led maintenance handover that followed it.',
  },
  {
    id: 'a-2023-bulletin',
    title: 'Best Club Bulletin',
    competition: 'Leo District 306 D2 Convention',
    year: '2023',
    level: 'merit',
  },
];
