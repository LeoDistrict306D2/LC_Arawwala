import type { Executive } from '@/lib/types';

/**
 * Executive board, 2025/26.
 *
 * TODO(content): real names, positions, and photographs. Members without a
 * `photo` render with initials, so this file is safe to ship incomplete.
 */
export const board: Executive[] = [
  { id: 'pres', name: 'Leo Dinuka Wijesinghe', position: 'President', rank: 'president', term: '2025/26' },
  { id: 'ipp', name: 'Leo Sanduni Perera', position: 'Immediate Past President', rank: 'immediate-past-president', term: '2025/26' },
  { id: 'vp1', name: 'Leo Kavindu Silva', position: 'First Vice President', rank: 'vice-president', term: '2025/26' },
  { id: 'vp2', name: 'Leo Hasini Fernando', position: 'Second Vice President', rank: 'vice-president', term: '2025/26' },
  { id: 'sec', name: 'Leo Tharindu Bandara', position: 'Secretary', rank: 'secretary', term: '2025/26' },
  { id: 'asec', name: 'Leo Nethmi Jayasuriya', position: 'Assistant Secretary', rank: 'assistant-secretary', term: '2025/26' },
  { id: 'tres', name: 'Leo Ashan Gunaratne', position: 'Treasurer', rank: 'treasurer', term: '2025/26' },
  { id: 'atres', name: 'Leo Ishara Madushani', position: 'Assistant Treasurer', rank: 'assistant-treasurer', term: '2025/26' },
  { id: 'edit', name: 'Leo Ravindu Alwis', position: 'Club Editor', rank: 'editor', term: '2025/26' },
  { id: 'dir-svc', name: 'Leo Piumi Rathnayake', position: 'Director — Community Service', rank: 'director', term: '2025/26' },
  { id: 'dir-env', name: 'Leo Chamod Weerasekara', position: 'Director — Environment', rank: 'director', term: '2025/26' },
  { id: 'dir-mem', name: 'Leo Amaya Ekanayake', position: 'Director — Membership', rank: 'director', term: '2025/26' },
];
