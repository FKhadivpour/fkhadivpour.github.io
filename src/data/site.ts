export const site = {
  name: 'Faraz Khadivpour',
  role: 'Senior AI / ML Engineer',
  location: 'Vancouver, BC',
  /** The hero headline, one entry per display line. */
  headline: [
    'I build agentic systems and the harness around them.',
    'End-to-end AI applications,',
    'from design to development to production.',
  ],
  /** The word accented in the headline. Must appear verbatim in one of its lines. */
  headlineAccent: 'harness',
  email: 'farazkhadivpour@gmail.com',
  description:
    'Faraz Khadivpour, senior AI/ML engineer in Vancouver. Founding AI engineer at SISA Energy, building agentic systems and end-to-end AI applications from design to production.',
} as const;

/** Every outbound address the page uses, in one place. */
export const links = {
  sisa: 'https://sisa.energy/',
  collectflow: 'https://collectflow.ai',
  scotiabank: 'https://www.scotiabank.com/',
  amii: 'https://www.amii.ca/',
  ncblab: 'https://www.ncbl.ualberta.ca/',
  rwdi: 'https://www.rwdi.com',
  linkedin: 'https://www.linkedin.com/in/farazkhadivpour/',
  github: 'https://github.com/FKhadivpour',
  // A personal address, deliberately not the employer domain, so the site
  // survives a change of job.
  mailto: `mailto:${site.email}`,
  cv: '/cv.pdf',
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'about', href: '/#about' },
  { label: 'experience', href: '/#experience' },
  { label: 'work', href: '/#work' },
  { label: 'research', href: '/#research' },
  { label: 'cv', href: links.cv },
];

export type ContactLink = { label: string; href: string };

export const contact: ContactLink[] = [
  { label: 'email', href: links.mailto },
  { label: 'linkedin', href: links.linkedin },
  { label: 'github', href: links.github },
  { label: 'cv', href: links.cv },
];
