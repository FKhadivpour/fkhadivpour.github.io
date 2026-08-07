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

// Email intentionally absent until a personal address is chosen — a personal
// site should not depend on a current employer's domain.
export const contact: ContactLink[] = [
  { label: 'github', href: 'https://github.com/FKhadivpour' },
  { label: 'linkedin', href: 'https://ca.linkedin.com/in/farazkhadivpour' },
  { label: 'cv', href: '/cv.pdf' },
];
