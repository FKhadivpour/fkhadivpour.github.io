export type Principle = { name: string; detail: string };

export type WorkItem = {
  /** The kind of work: shown as a small label above the title. */
  kicker: string;
  title: string;
  body: string;
  /** Rendered as a ruled two-column list between the body and the result. */
  principles?: Principle[];
  resultLabel: 'Result' | 'Scope';
  result: string;
};

export const work: WorkItem[] = [
  {
    kicker: 'Agentic platform',
    title: 'SISA AI, the agentic backbone',
    body: 'SISA AI is the service every AI feature in CollectFlow runs on, built from the ground up and deployed on AWS. One versioned interface routes across Anthropic, OpenAI and Google, so new capabilities ship without rebuilding model access, retrieval or evaluation. Most of the engineering is not the model. It is the harness around the agent, the parts that decide whether it can be trusted with real work:',
    principles: [
      {
        name: 'Tools and planning',
        detail: 'Tool and function calling with multi-step planning and execution',
      },
      {
        name: 'Context and state',
        detail: 'Context construction and state management across a conversation',
      },
      {
        name: 'Permissions',
        detail:
          'Tool authorization scoped to the signed-in user, so the agent can only do what that user is entitled to do',
      },
      {
        name: 'Guardrails',
        detail:
          'A prompt injection firewall, and structured output validation that rejects rather than passes through',
      },
      {
        name: 'Security and privacy',
        detail: 'OAuth, multi-tenant data isolation and auditable request-level tracing',
      },
      {
        name: 'Evaluation',
        detail:
          'Golden datasets curated from production data, synthetic test data, an LLM reviewer agent, and offline benchmarks as a release gate',
      },
      {
        name: 'Observability',
        detail:
          'LangSmith tracing, Sentry and PagerDuty; triage separates retrieval misses, wrong tool selection and provider failures',
      },
      {
        name: 'Feedback',
        detail:
          'Every production failure becomes a regression case; suggestions users reject extend the ground truth',
      },
    ],
    resultLabel: 'Scope',
    result: 'Owned from architecture through deployment, evaluation, monitoring and on-call.',
  },
  {
    kicker: 'Conversational AI',
    title: 'The whole platform, through chat',
    body: "The assistant inside CollectFlow, built on SISA AI. Users ask in plain language and it acts: it creates, edits and deletes entities, writes calculations, generates charts and dashboards, connects data points across a portfolio, and answers questions about the platform and the user's own data. Every action runs through the harness above, so it is planned in steps, checked against the user's permissions and traceable afterwards.",
    resultLabel: 'Result',
    result:
      'Used daily by analysts and administrators at enterprise clients, managing portfolios of tens of thousands of buildings.',
  },
  {
    kicker: 'Multimodal extraction',
    title: 'Everything arrives in the wrong shape',
    body: 'A technician photographs a nameplate in bad light; a utility bill turns up as a scan of a table. A single hospital site visit can produce 100+ pieces of equipment with four or five images each. I built OCR and multimodal extraction that turns nameplates, site photos, blueprints, PDFs and spreadsheets into validated structured records. Character recognition is the part that already works; the hard part is judgment, so abstention is a first-class output, and the interface shows a person what was read, what was inferred and what to check first.',
    resultLabel: 'Result',
    result:
      'Field data capture cut from days to under a few hours, at 95%+ accuracy on noisy field imagery.',
  },
  {
    kicker: 'Product engineering',
    title: 'CollectFlow, full stack',
    body: "Core engineer and product owner on CollectFlow, SISA Energy's field data platform on AWS: the Python backend, the React and TypeScript front end, database design and the deployment pipeline. I run discovery and demos with clients, write the RFC, build it and support it in production. I also defined the team's AI-native development workflow: rules, reusable skills and hooks for Claude Code, with human review of every design and plan.",
    resultLabel: 'Result',
    result:
      'Top human contributor, with about 64% of human-authored commits over the last six months.',
  },
];
