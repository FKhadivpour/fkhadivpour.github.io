export type WorkItem = {
  title: string;
  body: string;
};

export const work: WorkItem[] = [
  {
    title: 'Reading a photograph of a machine',
    body: "A technician photographs a nameplate on a roof in bad light; six months later somebody needs that model number in a spreadsheet, and has to be able to defend it. Character recognition is the part that already works — the hard part is knowing which of eleven numbers on the plate is the model, and what to do when the plate can't be read at all. A model asked for an answer it cannot see will produce a well-formed, convincing, wrong one. So most of the work is making abstention a first-class output: a field left empty costs a technician five minutes, a confident guess costs an engineer their credibility.",
  },
  {
    title: 'What a network is responsible for',
    body: 'Most explainability asks which parts of an input a model looked at. My research asked a different question — which training examples were responsible for the decision. Recording how a prediction moves during training, rather than discarding that history, lets you name the examples present at the moments the behaviour settled. What comes back is not a heatmap but a precedent: this is classified this way because of these forty images, which is much closer to how people actually justify a judgment to each other.',
  },
  {
    title: "Knowing when it's wrong",
    body: 'The demo works is the least informative fact available about a system. For generative output there is no accuracy to compute, so the first real work is not modelling — it is building the ruler: examples with answers you actually believe, argued over, and worth more than any model that will be scored against them. Offline scores describe yesterday, so the ruler has to run against live traffic, with latency and cost on the same dashboard as quality because they trade against each other. And prompts are code: one edited in a web console at eleven at night is an undocumented deploy.',
  },
];
