export interface ExperienceItem {
  start: string;
  end: string;
  company: string;
  meta?: string;
  role: string;
  bullets: string[];
  links?: { label: string; href: string }[];
}

export const experience: ExperienceItem[] = [
  {
    start: 'Sep 2025',
    end: 'Present',
    company: 'Kourion Studio',
    meta: 'Cyprus · Remote',
    role: 'Playable Ads Developer',
    bullets: [
      'Independent implementation of commercial HTML5 playable ads in Cocos Creator — 2D and 3D.',
      'Gameplay, interaction, UI, animation, asset handling, performance, and packed HTML builds for ad networks.',
      'Working within playable constraints: build size, HTML5, asset loading, and network requirements (Moloco, Facebook, AppLovin, Unity, ironSource).',
      'Draft playables typically assembled in about two days, then iterated to a production build.',
      'AI-assisted development used to speed up implementation; architecture, debugging, and shipping stay in my hands.',
    ],
  },
  {
    start: 'May 2022',
    end: 'Aug 2025',
    company: 'Walnut Team',
    meta: 'walnut.team · Product company',
    role: 'Frontend Developer',
    bullets: [
      'Client-side development and support of web applications in a product team (backend, design, task breakdown).',
      'Feature implementation from spec, interactive UI, REST API integration, bugfixing, optimization, and refactoring.',
    ],
    links: [
      { label: 'VkusVill Food', href: 'https://food.vkusvill.ru/' },
      { label: 'VkusVill Prazdnik', href: 'https://prazdnik.vkusvill.ru/' },
    ],
  },
  {
    start: 'Mar 2022',
    end: 'Apr 2022',
    company: 'TheMembers',
    meta: 'themembers.com',
    role: 'Frontend Developer',
    bullets: [
      'Landing pages from design, CSS animation, Bootstrap, module integration, and bug analysis.',
    ],
  },
  {
    start: 'Sep 2021',
    end: 'Feb 2022',
    company: 'MAXIMUM EDUCATION',
    meta: 'maximumeducation.com',
    role: 'Frontend Developer',
    bullets: [
      'Company sites (maximumtest.ru, maximumeducation.com), landings, blog, and magazine. Vue, Scrum, CRM/CMS, responsive UI.',
    ],
  },
];

export const frontendProjects = [
  {
    title: 'VkusVill Food',
    href: 'https://food.vkusvill.ru/',
    urlLabel: 'food.vkusvill.ru',
    note: 'Commercial web project at Walnut Team.',
  },
  {
    title: 'VkusVill Prazdnik',
    href: 'https://prazdnik.vkusvill.ru/',
    urlLabel: 'prazdnik.vkusvill.ru',
    note: 'Commercial web project at Walnut Team.',
  },
] as const;

export const education = [
  {
    period: 'Sep 2020 – Aug 2021',
    title: 'Yandex Practicum — Frontend Developer program',
    detail: 'HTML, CSS, SCSS, JavaScript, Vue, React, Git, Node.js, MongoDB',
  },
  {
    period: '2018',
    title: 'Russian State University of Tourism and Service, Moscow',
    detail: 'Tourism',
  },
  {
    period: '2010',
    title: 'Moscow Technical University of Communications and Informatics',
    detail: 'Cybernetics and Information Security (incomplete)',
  },
] as const;
