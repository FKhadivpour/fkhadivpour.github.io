export type WorkItem = {
  title: string;
  body: string;
};

export const work: WorkItem[] = [
  {
    title: 'Everything arrives in the wrong shape',
    body: "A technician photographs the nameplate on a device in bad light; a utility bill turns up as a scan of a table; a spreadsheet carries six years of one person's private conventions. None of it was written for a machine. Character recognition, the part people assume is hard, is the part that already works; the hard part is judgment, because a model asked for an answer it cannot see will produce a well-formed, convincing, wrong one. So the work is making abstention a first-class output, and then designing an interface that assembles itself around whatever was actually found, showing a person what was read, what was inferred, and what to check first.",
  },
  {
    title: 'What a network is responsible for',
    body: 'Most explainability asks which parts of an input a model looked at. My research asked a different question: which training examples were responsible for the decision. Recording how a prediction moves during training, rather than discarding that history, lets you name the examples present at the moments the behaviour settled. What comes back is not a heatmap but a precedent: this is classified this way because of these forty images, which is much closer to how people actually justify a judgment to each other.',
  },
  {
    title: "Knowing when it's wrong",
    body: 'The demo works is the least informative fact available about a system. For generative output there is no accuracy to compute, so the first real work is not modelling. It is building the ruler: examples with answers you actually believe, argued over, and worth more than any model that will be scored against them. Offline scores describe yesterday, so the ruler has to run against live traffic, with latency and cost on the same dashboard as quality because they trade against each other. And prompts are code: one edited in a web console at eleven at night is an undocumented deploy.',
  },
];
