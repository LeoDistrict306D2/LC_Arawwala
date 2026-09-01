import type { Project } from '@/lib/types';

/**
 * Project entries.
 *
 * TODO(content): these are illustrative entries in the club's real format.
 * Replace with actual project records; the shape is what matters.
 * `heroImage` points at the shared placeholder until real photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1067,
});

export const projects: Project[] = [
  {
    id: 'p-047',
    slug: 'library-restart',
    title: 'Library Restart',
    summary:
      'Reopening the Arawwala community library reading room after four years closed, with a catalogue that works.',
    category: 'education',
    year: '2025/26',
    date: '2025-08-16',
    location: 'Arawwala Community Library',
    featured: true,
    heroImage: placeholder('Volunteers sorting books at the Arawwala community library'),
    story: [
      'The reading room had been shut since 2021. The books were still there, stacked in three rooms with no order, and the handwritten catalogue had not been updated since 2019.',
      'Eleven members spent four weekends sorting, discarding water-damaged stock, and entering everything into a spreadsheet the library staff could actually maintain. We bought shelving for the two rooms that had none.',
      'The reading room reopened on 16 August. The catalogue is now 3,120 titles and the staff update it themselves — which was the point. We go back monthly to check it is holding.',
    ],
    objectives: [
      'Sort and catalogue the entire collection',
      'Replace shelving in the two unusable rooms',
      'Leave the staff with a catalogue they can maintain without us',
    ],
    impact: [
      { id: 'titles', value: 3120, label: 'Titles catalogued' },
      { id: 'hours', value: 264, label: 'Volunteer hours' },
      { id: 'shelves', value: 14, label: 'Shelving units installed' },
    ],
    partners: [{ name: 'Lions Club of Arawwala' }],
  },
  {
    id: 'p-046',
    slug: 'exam-year-tutoring',
    title: 'Exam Year Tutoring',
    summary:
      'Weekly maths and science tutoring for O/L students, run every Saturday through the full academic year.',
    category: 'education',
    year: '2025/26',
    date: '2025-05-03',
    location: 'Arawwala',
    featured: true,
    heroImage: placeholder('An O/L tutoring session in progress'),
    story: [
      'This is the third year we have run it. The first year we tutored 14 students for one term and stopped, and the results were unchanged — which taught us the useful lesson that a term is not long enough.',
      'Now it runs the full year, every Saturday, with the same tutors kept on the same students. Attendance is recorded; students who miss three consecutive weeks get a home visit rather than a removal from the list.',
    ],
    objectives: [
      'Cover the full O/L maths and science syllabus across the academic year',
      'Keep tutor–student pairings stable for the whole term',
      'Track attendance and follow up absences directly',
    ],
    impact: [
      { id: 'students', value: 42, label: 'Students enrolled' },
      { id: 'sessions', value: 38, label: 'Sessions run' },
      { id: 'attendance', value: 87, suffix: '%', label: 'Average attendance' },
    ],
  },
  {
    id: 'p-044',
    slug: 'canal-clearing',
    title: 'Canal Clearing',
    summary:
      'Clearing the storm drain along the Arawwala main road before the October monsoon, with the residents who use it.',
    category: 'environment',
    year: '2024/25',
    date: '2024-09-21',
    location: 'Arawwala main road',
    featured: true,
    heroImage: placeholder('Volunteers clearing a blocked storm drain'),
    story: [
      'The drain floods the lower end of the road every heavy season. It had been cleared twice before by outside groups, and both times it silted up again within a year because nobody local was involved.',
      'This time we ran it with the residents’ association. Thirty-one residents worked alongside twenty-two Leos, and the association now clears it twice yearly on their own schedule. It has not flooded since.',
    ],
    objectives: [
      'Clear the full 400 m drain run before the monsoon',
      'Hand ongoing maintenance to the residents’ association',
    ],
    impact: [
      { id: 'metres', value: 400, suffix: ' m', label: 'Drain cleared' },
      { id: 'volunteers', value: 53, label: 'Volunteers, incl. residents' },
      { id: 'households', value: 96, label: 'Households no longer flooding' },
    ],
  },
  {
    id: 'p-041',
    slug: 'blood-drive',
    title: 'Blood Drive',
    summary:
      'A donation drive with the National Blood Transfusion Service, held at the community hall.',
    category: 'health',
    year: '2024/25',
    date: '2024-06-08',
    location: 'Arawwala Community Hall',
    heroImage: placeholder('Donors at the Arawwala blood drive'),
    impact: [
      { id: 'units', value: 118, label: 'Units collected' },
      { id: 'first-time', value: 43, label: 'First-time donors' },
    ],
    partners: [{ name: 'National Blood Transfusion Service' }],
  },
  {
    id: 'p-038',
    slug: 'school-supplies',
    title: 'School Supplies',
    summary:
      'Term-start supply packs for 120 students across three schools, repeated each January.',
    category: 'community-service',
    year: '2023/24',
    date: '2024-01-11',
    location: 'Arawwala, Kottawa',
    heroImage: placeholder('Supply packs prepared for distribution'),
    impact: [
      { id: 'packs', value: 120, label: 'Packs distributed' },
      { id: 'schools', value: 3, label: 'Schools' },
    ],
  },
  {
    id: 'p-035',
    slug: 'tree-planting',
    title: 'Roadside Planting',
    summary:
      'Two hundred saplings along the Arawwala–Kottawa road, with a watering roster that ran eighteen months.',
    category: 'environment',
    year: '2023/24',
    date: '2023-10-14',
    location: 'Arawwala–Kottawa road',
    heroImage: placeholder('Saplings planted along a roadside'),
    story: [
      'Planting is easy; keeping saplings alive is not. We planted 200 and rostered members to water them through two dry seasons.',
      '164 survived to eighteen months. We record that number rather than the planting number, because it is the one that means anything.',
    ],
    impact: [
      { id: 'planted', value: 200, label: 'Saplings planted' },
      { id: 'survived', value: 164, label: 'Alive at 18 months' },
    ],
  },
];
