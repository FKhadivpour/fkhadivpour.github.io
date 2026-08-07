export const site = {
  name: 'Faraz Khadivpour',
  role: 'AI / ML Engineer',
  location: 'Vancouver, BC',
  thesis: 'I work on the boundary between people and machines, making each legible to the other.',
  /** The word accented in the hero. Must appear verbatim in `thesis`. */
  thesisAccent: 'legible',
  description:
    'Faraz Khadivpour, AI / ML engineer working on the boundary between people and machines.',
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'about', href: '/#about' },
  { label: 'research', href: '/#research' },
  { label: 'work', href: '/#work' },
  { label: 'cv', href: '/cv.pdf' },
];

export type ContactLink = { label: string; href: string };

// A personal address, deliberately not the employer domain, so the site
// survives a change of job.
export const contact: ContactLink[] = [
  { label: 'email', href: 'mailto:farazkhadivpour@gmail.com' },
  { label: 'github', href: 'https://github.com/FKhadivpour' },
  { label: 'linkedin', href: 'https://ca.linkedin.com/in/farazkhadivpour' },
  { label: 'cv', href: '/cv.pdf' },
];
