export type Degree = {
  degree: string;
  school: string;
  years: string;
  note?: string;
};

export const education: Degree[] = [
  {
    degree: 'M.Sc. Computing Science',
    school: 'University of Alberta',
    years: '2023 – 2024',
    note: 'Research at Amii on explainable AI. Thesis: Responsibility in diffusion models.',
  },
  {
    degree: 'M.Sc. Environmental Engineering',
    school: 'University of Tehran',
    years: '2015 – 2018',
  },
  {
    degree: 'B.Sc. Civil Engineering',
    school: 'K. N. Toosi University of Technology',
    years: '2010 – 2015',
  },
];
