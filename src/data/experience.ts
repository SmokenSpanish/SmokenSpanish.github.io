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
    meta: 'Cyprus · Remote · 14 months',
    role: 'Playable Ads Developer',
    bullets: [
      'Shipped around 60 commercial HTML5 playable ads in 14 months (up to 10 a month), working independently from brief to network-ready build.',
      'Built 2D and 3D gameplay in Cocos Creator 3.8 with TypeScript: card and slot mechanics, hidden-object scenes, deduction boards, ragdoll physics, runners.',
      'Delivered single-file packed builds for AppLovin, Google, Mintegral, TikTok, Moloco, Facebook, Unity, and ironSource within the size and API requirements of each network.',
      'Produced one-tap, two-tap, and full variants, reskins, and localized versions from a single codebase through config-driven builds.',
      'Assemble a playable draft in about two days, then iterate to a production build.',
      'Use AI-assisted development to speed up implementation; architecture, debugging, and shipping stay in my hands.',
    ],
  },
  {
    start: 'May 2022',
    end: 'Aug 2025',
    company: 'Walnut Team',
    meta: 'walnut.team · Product company',
    role: 'Frontend Developer',
    bullets: [
      'Developed and supported client-side web applications in a product team alongside backend, design, and product.',
      'Implemented features from spec: interactive UI, REST API integration, bug fixing, optimization, and refactoring.',
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
      'Built landing pages from design: CSS animation, Bootstrap, module integration, and bug analysis.',
    ],
  },
  {
    start: 'Sep 2021',
    end: 'Feb 2022',
    company: 'MAXIMUM EDUCATION',
    meta: 'maximumeducation.com',
    role: 'Frontend Developer',
    bullets: [
      'Developed company sites (maximumtest.ru, maximumeducation.com), landing pages, blog, and magazine with Vue in a Scrum team; CRM/CMS integration, responsive UI.',
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
