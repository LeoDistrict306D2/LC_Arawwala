import type { Club } from '@/lib/types';

/**
 * Leo Club of Arawwala — club record.
 *
 * TODO(content): charter date, roster, contact details, and photography are
 * placeholders. Every field here is real content the club can supply; nothing
 * in this file affects the design.
 */
export const club: Club = {
  name: 'Leo Club of Arawwala',
  shortName: 'Arawwala',
  tagline: 'Service, in the open.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club serving Arawwala and the surrounding Kottawa–Pannipitiya area. We publish what we do — every project, what it cost, who it reached — because service that cannot be checked is just a photograph.',
  charterDate: '2019-08-12',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Arawwala',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Arawwala emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Members of the Leo Club of Arawwala at a community service project',
    width: 2000,
    height: 1125,
  },

  contact: {
    email: 'leoclubofarawwala@gmail.com',
    address: 'Arawwala, Pannipitiya, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leoclubofarawwala',
    instagram: 'https://www.instagram.com/leoclubofarawwala',
    email: 'leoclubofarawwala@gmail.com',
  },

  siteUrl: 'https://arawwala.leo306d2.org',

  stats: [
    { id: 'years', value: 6, suffix: '+', label: 'Years of service' },
    { id: 'members', value: 38, label: 'Active members' },
    { id: 'projects', value: 47, label: 'Projects completed' },
    { id: 'hours', value: 2400, suffix: '+', label: 'Service hours logged' },
  ],

  about: {
    story: [
      'The Leo Club of Arawwala was chartered in 2019 by a group of students and young professionals who kept noticing the same thing: plenty of service happened in the area, but almost none of it was written down. Nobody could say what had worked, what it had cost, or whether anyone had gone back.',
      'So the club started keeping notes. Every project gets an entry — the date, the place, what was attempted, what actually happened, and the numbers. Some entries record things that did not go to plan. Those are the useful ones.',
      'Six years on, the method has shaped the club. Projects are chosen because the record shows a need, and repeated because the record shows they worked. This website is that record, made public.',
    ],
    mission:
      'To serve Arawwala through work that is documented, measurable, and repeated — and to develop young leaders who expect the same of themselves.',
    vision:
      'A community where service is judged by what it changed, not by how it looked.',
    values: [
      {
        title: 'Record everything',
        description:
          'Every project is written up, including the ones that fall short. An unrecorded project cannot be learned from.',
      },
      {
        title: 'Go back',
        description:
          'One-off visits rarely change anything. We return to the same schools, homes, and streets until the need is actually met.',
      },
      {
        title: 'Count it',
        description:
          'Numbers are not the point of service, but they are the only honest way to describe it. We publish ours.',
      },
      {
        title: 'Share the lead',
        description:
          'Every member runs a project before their term ends. Leadership is practised, not awarded.',
      },
    ],
  },
};
