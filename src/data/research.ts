export type Paper = {
  title: string;
  venue: string;
  year: number;
  href?: string;
  note?: string;
};

export const research: Paper[] = [
  {
    title: 'Responsibility in diffusion models',
    venue: 'University of Alberta',
    year: 2024,
    note: 'M.Sc. thesis',
    href: 'https://ualberta.scholaris.ca/server/api/core/bitstreams/fef0e66d-0f77-4093-a508-74d6783c7ad7/content',
  },
  {
    title:
      'Responsibility: an example-based explainable AI approach via training process inspection',
    venue: 'arXiv',
    year: 2022,
    href: 'https://arxiv.org/abs/2209.03433',
  },
  {
    title: 'Explainability via Responsibility',
    venue: 'AIIDE EXAG',
    year: 2020,
    href: 'https://arxiv.org/abs/2010.01676',
  },
];
