export type Stat = {
  /** The number that counts up. Rendered with thousands separators. */
  value: number;
  /** Fixed text after the number: "+", "%", "s". */
  suffix: string;
  caption: string;
};

export const stats: Stat[] = [
  { value: 6, suffix: '+', caption: 'years in machine learning, from research to production' },
  { value: 10000, suffix: 's', caption: 'of buildings in the portfolios my agentic system serves' },
  {
    value: 800000,
    suffix: '+',
    caption: 'loan applications and credit records behind my credit risk models',
  },
  { value: 95, suffix: '%', caption: 'faster and cheaper LLM data import, by redesign' },
];
