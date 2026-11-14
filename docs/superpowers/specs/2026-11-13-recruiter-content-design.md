# Recruiter-legible content: design

**Date:** 2026-11-13 (revision 3: stats strip reordered by Faraz)
**Repo:** `FKhadivpour/fkhadivpour.github.io`, served at `https://farazkhadivpour.me`
**Status:** built, reviewed by Faraz and published
**Source of facts:** `public/cv.pdf` (the CV dated November 2026). Nothing on the page may claim
more than that CV does.

---

## 1. Intent

A recruiter who opens the site today cannot tell who Faraz is. The page carries a one-line
thesis, a five-paragraph About, three papers and three short essays. It never states an
employer, a title history, dates, results, skills or education; all of that sits only in the
CV PDF.

The page should let a recruiter answer, without opening the CV: what does he do, at what level,
where has he worked and when, what did he ship, how well did it work, and how do I reach him.

**Positioning.** The page presents a senior engineer whose profile fits three role families:
AI engineer, ML engineer and software engineer. It makes two kinds of range explicit:

- **Roles:** agentic AI systems and their harness, machine learning from research to models in
  production, and full-stack software.
- **Environments:** academic research (Amii), enterprise (Scotiabank) and a fast-moving startup
  (SISA Energy, as founding AI engineer).

The reference for content is `https://www.aradmokhtari.com/`: role and employer visible at the
top, a row of headline numbers, an experience timeline, selected projects with outcomes, a
contact block, and motion (sections reveal on scroll, numbers count up). The reference is for
**content and motion only**. The visual design stays Faraz's own.

## 2. Goals, non-goals, anti-goals

**Goals**

- Role, level, employer and location readable in the first screen.
- The headline is about agentic systems, the harness around them, and end-to-end AI
  applications from design to development to production.
- Every employer named and linked: SISA Energy, Scotiabank, Amii, NCBLab.
- The three environments (research, enterprise, startup) stated outright.
- Results stated with the CV's numbers.
- Harness engineering named concretely: evaluation, guardrails, permissions, security, privacy,
  observability.
- Experience, selected work, skills and education all on the page.
- An open invitation to connect, with links.
- Motion: sections reveal on scroll, headline numbers count up.
- The existing look is preserved: IBM Plex Mono, uppercase section labels, hairline-ruled
  rows, amber accent, both colour schemes.

**Non-goals**

- No GPA, scholarship, coursework or other student metrics on the page.
- No statement about job-seeking or availability.
- No new visual language: no cards, pills, gradients, shadows, icons, company logos or
  coloured bands.
- No phone number on the page (it stays in the CV only).
- No products other than SISA AI and CollectFlow (the CV no longer names the others).
- No animation library, analytics, blog or extra pages.

**Anti-goals** (the change has failed if any of these is true)

- The page reads as a junior profile, a résumé dump or a template.
- Any content is invisible when JavaScript is off, or under reduced motion.
- Motion makes a reader wait: nothing takes longer than about 0.6 s to become readable.
- A number appears that the CV does not back.

## 3. What this reverses in the August 2026 spec

`2026-08-06-portfolio-redesign-design.md` is otherwise still the visual reference. This design
supersedes these parts of it:

| August rule | Now |
|---|---|
| §3: no work history, education or skills on the site | All three are on the page |
| §7 constraint: no employer name, product names or system figures | Employers, SISA AI, CollectFlow and the CV's figures are named |
| §8: work proven by employer-free essays | Essays are rewritten into concrete work entries |
| §10 motion: effectively none | Scroll reveal and count-up, off under reduced motion |
| §11: zero client-side JavaScript | One small dependency-free script, progressive enhancement only |
| §10 accent budget and eight type sizes | Still two accented words; one new size for stat figures |

Unchanged: no availability signalling (D1), the environmental-engineering paper stays excluded
(D12), the CV is published unmodified (D11).

## 4. Approaches considered

1. **Full profile on one page (chosen).** The page answers who, where, what and how well by
   itself. Costs a page roughly twice as long.
2. **Facts up top, rest unchanged.** A plain hero and a compact experience table, About and
   essays untouched. Rejected: what he built would stay in essay prose with no numbers and no
   skills.
3. **Two pages.** Home as in 1, essays moved whole to their own page. Rejected: an extra page
   and nav item for three short pieces whose substance fits in the work entries.

Faraz picked 1, with the reference site's content pattern (numbers, motion) in the current
visual style.

## 5. Page structure

Order: **hero → numbers → about → experience → selected work → skills → education → research →
contact → footer**.

```
Faraz Khadivpour                         about  experience  work  research  cv
────────────────────────────────────────────────────────────────────────────────
SENIOR AI / ML ENGINEER · VANCOUVER, BC

I build agentic systems and the harness around
them. End-to-end AI applications, from design to
development to production.

I'm Faraz, founding AI engineer at SISA Energy, where I designed,
built and run SISA AI, the agentic service behind CollectFlow. ...

get in touch →    linkedin →    github →    cv →

────────────────────────────────────────────────────────────────────────────────
6+              10,000s           800,000+           95%
years in ML     of buildings my   loan applications  faster, cheaper
                agent serves      modelled           LLM data import
────────────────────────────────────────────────────────────────────────────────

ABOUT                                                          [ portrait ]
four short paragraphs

EXPERIENCE
────────────────────────────────────────────────────────────────────────────────
STARTUP
Founding AI Engineer · SISA Energy                          Jan 2025 – present
  · outcome line
  · outcome line
  Python · React · TypeScript · AWS · LangSmith
────────────────────────────────────────────────────────────────────────────────
ENTERPRISE
Data Scientist · Scotiabank                                Jan 2022 – Jan 2023
...

SELECTED WORK
────────────────────────────────────────────────────────────────────────────────
01  AGENTIC PLATFORM
    SISA AI, the agentic backbone
    paragraph
      Permissions    tool authorization scoped to the signed-in user
      Guardrails     prompt injection firewall, output validation
      Evaluation     golden datasets, benchmarks as a release gate
      ...
    Owned from architecture through ... on-call.
────────────────────────────────────────────────────────────────────────────────

SKILLS       five ruled rows: group name on the left, list on the right
EDUCATION    three ruled rows, years on the right
RESEARCH     short intro and results, then the three papers as today
CONTACT      an invitation to connect, the email at hero size, then links
```

**Nav:** `about · experience · work · research · cv`. Five items is the most that fits on one
line at 390 px. Skills, education and contact are reached by scrolling; contact is also the
first hero action and the footer.

## 6. Copy

Voice rules from the August spec still apply: no adjectives about the author, specifics instead
of claims, no em dashes. En dashes are used only in date ranges. Seniority is shown through
ownership, decisions and scope, never by saying "senior" in the prose.

Links: SISA Energy `https://sisa.energy/` · CollectFlow `https://collectflow.ai` · Scotiabank
`https://www.scotiabank.com/` · Amii `https://www.amii.ca/` · NCBLab
`https://www.ncbl.ualberta.ca/` · RWDI `https://www.rwdi.com`. These are the links the CV uses.
External links open in the same tab with `rel="noopener"`.

### 6.1 Hero

- **Eyebrow:** `Senior AI / ML Engineer · Vancouver, BC`
- **Headline (h1):** I build agentic systems and the **harness** around them. End-to-end AI
  applications, from design to development to production.
  (`harness` is the accented word.)
- **Lede:** I'm Faraz, founding AI engineer at [SISA Energy], where I designed, built and run
  SISA AI, the agentic service behind [CollectFlow]. I have worked at research pace at [Amii],
  at enterprise scale at [Scotiabank] and at startup speed, across AI engineering, machine
  learning and full-stack software.
- **Actions:** `get in touch →` (mailto) · `linkedin →` · `github →` · `cv →` (`/cv.pdf`)

### 6.2 Numbers

Order and figures set by Faraz in review: career, then scale of the agentic system, then scale
of the modelling data, then the redesign result. No employer is named in the strip.

| Figure | Caption |
|---|---|
| `6+` | years in machine learning, from research to production |
| `10,000s` | of buildings in the portfolios my agentic system serves |
| `800,000+` | loan applications and credit records behind my credit risk models |
| `95%` | faster and cheaper LLM data import, by redesign |

`6+` is derived from the CV's dates (first ML role January 2020). `10,000s` is the CV's "tens
of thousands of buildings". The 300-participant study stays in Experience and Research, not in
the strip.

### 6.3 About

> I work on the boundary between people and machines, making each **legible** to the other. A
> model produces an answer; a person has to decide whether to trust it. Everything I build is
> some version of that problem.
>
> I have worked on it in three kinds of place. In research, at [Amii], where an idea has to
> survive peer review and a human study. In a regulated bank, [Scotiabank], where a model has
> to survive governance. And in a startup, [SISA Energy], where it has to survive production.
>
> Today I am the founding AI engineer at SISA Energy. I designed, built and run SISA AI, the
> agentic service behind [CollectFlow], and I work across the whole stack to ship it: the agent
> and its harness, the Python services, the React front end, the evaluation and the monitoring.
> I am also CollectFlow's product owner, so the work starts with a conversation with a client
> and ends when the feature is holding up in production.
>
> None of that is glamorous. It's the difference between a model that works in a notebook and
> one someone trusts at three in the morning.

`legible` is the second accented word. The portrait stays beside About, as today.

### 6.4 Experience

Four entries in the CV's order. Each: an environment kicker, role, company (linked), location,
dates, outcome lines, then one muted stack line.

**`Startup`** · **Founding AI Engineer · [SISA Energy]** · Vancouver, BC · Jan 2025 – present

- Designed, built and operate SISA AI, the agentic service behind [CollectFlow], deployed on
  AWS, with one versioned interface across Anthropic, OpenAI and Google. Own it from
  architecture through evaluation, monitoring and on-call.
- Shipped CollectFlow's conversational AI: an agent that gives users the full capability of
  the platform through chat, used daily by analysts and administrators at enterprise clients.
- Built the harness that makes autonomous action safe: evaluation as a release gate,
  permission-scoped tools, a prompt injection firewall, output validation, multi-tenant
  isolation and request-level tracing.
- Cut field data capture from days to under a few hours with multimodal extraction at 95%+ accuracy,
  and made bulk LLM data import 95% faster and cheaper by redesign.
- Product owner and core engineer on CollectFlow, full stack: top human contributor, from
  client discovery and RFC through to production support.
- Defined the team's AI-native development workflow, with human review of every design and
  plan.

Stack: `Python · React · TypeScript · AWS · LangSmith · Sentry · PagerDuty`

**`Enterprise`** · **Data Scientist · [Scotiabank]** · Edmonton, AB · Jan 2022 – Jan 2023

- Built default and credit risk prediction models on time series data from 800,000+ loan
  applications and credit records in a regulated banking environment, including a deep learning
  model combining LSTM and attention layers.
- Delivered the full pipeline in Python and SQL: data exploration, feature engineering,
  training, hyperparameter tuning and validation.
- Applied explainable AI methods with academic collaborators, improving interpretability
  metrics by 15% in support of model review and governance.

Stack: `Python · SQL · LSTM · attention`

**`Research institute`** · **Machine Learning Researcher · [Amii]** (Alberta Machine
Intelligence Institute) · Edmonton, AB · May 2020 – Jan 2025

- Proposed and published Responsibility, an interpretability method for deep neural networks
  (AIIDE EXAG, arXiv), and designed the evaluation methodology and metrics used to compare it
  with baselines.
- Improved interpretability by 5% on image classification and 20% on text classification.
- Designed and ran a 300-participant human evaluation study, establishing a 30% preference
  over baseline approaches.
- Trained CNNs, diffusion models and transformers end to end on Compute Canada GPU clusters,
  and fine-tuned GPT-2 with LoRA.

Stack: `PyTorch · TensorFlow · Keras · Hugging Face · Slurm · R`

**`Research lab`** · **Machine Learning Researcher · [NCBLab]** (Neuromuscular Control &
Biomechanics Laboratory) · Edmonton, AB · Jan 2020 – May 2020

- Delivered a client project for [RWDI] with a team of 5, two weeks ahead of schedule:
  automated manual spatial data extraction and trained models reaching 94% accuracy on a key
  target variable.

Stack: `PyTorch · XGBoost · scikit-learn · Weights & Biases`

### 6.5 Selected work

Five numbered entries. Each: a small uppercase kicker, a title, a paragraph, and a result line
in primary text colour. Entry 01 also carries the harness list. Work entries carry no stack
line. The three existing essays are folded in: 03 keeps its essay title, the evaluation essay
becomes part of the harness list in 01, and the research essay moves to the Research intro
(§6.8).

**01 · Agentic platform · SISA AI, the agentic backbone**

SISA AI is the service every AI feature in CollectFlow runs on, built from the ground up and
deployed on AWS. One versioned interface routes across Anthropic, OpenAI and Google, so new
capabilities ship without rebuilding model access, retrieval or evaluation. Most of the
engineering is not the model. It is the harness around the agent, the parts that decide whether
it can be trusted with real work:

| Principle | What I built |
|---|---|
| Tools and planning | Tool and function calling with multi-step planning and execution |
| Context and state | Context construction and state management across a conversation |
| Permissions | Tool authorization scoped to the signed-in user, so the agent can only do what that user is entitled to do |
| Guardrails | A prompt injection firewall, and structured output validation that rejects rather than passes through |
| Security and privacy | OAuth, multi-tenant data isolation and auditable request-level tracing |
| Evaluation | Golden datasets curated from production data, synthetic test data, an LLM reviewer agent, and offline benchmarks as a release gate |
| Observability | LangSmith tracing, Sentry and PagerDuty; triage separates retrieval misses, wrong tool selection and provider failures |
| Feedback | Every production failure becomes a regression case; suggestions users reject extend the ground truth |

*Result:* Owned from architecture through deployment, evaluation, monitoring and on-call.

**02 · Conversational AI · The whole platform, through chat**

The assistant inside CollectFlow, built on SISA AI. Users ask in plain language and it acts:
it creates, edits and deletes entities, writes calculations, generates charts and dashboards,
connects data points across a portfolio, and answers questions about the platform and the
user's own data. Every action runs through the harness above, so it is planned in steps,
checked against the user's permissions and traceable afterwards.

*Result:* Used daily by analysts and administrators at enterprise clients, managing portfolios
of tens of thousands of buildings.

**03 · Multimodal extraction · Everything arrives in the wrong shape**

A technician photographs a nameplate in bad light; a utility bill turns up as a scan of a
table. A single hospital site visit can produce 100+ pieces of equipment with four or five
images each. I built OCR and multimodal extraction that turns nameplates, site photos,
blueprints, PDFs and spreadsheets into validated structured records. Character recognition is
the part that already works; the hard part is judgment, so abstention is a first-class output,
and the interface shows a person what was read, what was inferred and what to check first.

*Result:* Field data capture cut from days to under a few hours, at 95%+ accuracy on noisy field
imagery.

**04 · System design · The measurement, not the demo**

Customer exports arrive in every schema. The first import sent each row to an LLM. It passed
every accuracy check and was still unshippable at real volume. The redesign has the model infer
the schema mapping once, then deterministic code executes it across tens of thousands of rows.

*Result:* 95% faster and 95% cheaper.

**05 · Product engineering · CollectFlow, full stack**

Core engineer and product owner on CollectFlow, SISA Energy's field data platform on AWS: the
Python backend, the React and TypeScript front end, database design and the deployment
pipeline. I run discovery and demos with clients, write the RFC, build it and support it in
production. I also defined the team's AI-native development workflow: rules, reusable skills
and hooks for Claude Code, with human review of every design and plan.

*Result:* Top human contributor, with about 64% of human-authored commits over the last six
months.

### 6.6 Skills

Five rows, group name left, list right. Condensed from the CV's Core Expertise, regrouped so
the AI, ML and software strands are each visible.

- **Agentic systems and harness:** tool and function calling, multi-step planning and
  execution, context and state management, multi-agent coordination, permission-scoped
  autonomous action, human-in-the-loop controls, prompt injection defense, MCP servers,
  LangChain, CrewAI
- **LLM engineering:** prompt design and versioned prompt templates, structured output
  validation, RAG, embeddings, vector retrieval (Chroma, FAISS), chunking and context
  construction, multi-provider routing and failover, model selection against capability,
  latency and cost
- **Evaluation and observability:** golden evaluation datasets, synthetic test data, LLM
  reviewer agents, offline benchmarking as a release gate, regression suites from production
  failures, online quality monitoring, trace-based failure triage, LangSmith, Sentry, PagerDuty
- **Software engineering:** Python services (FastAPI, Flask, Celery), React, TypeScript,
  Vue.js, PostgreSQL, TimescaleDB, Redis, Docker, Kubernetes, CI/CD with GitHub Actions,
  automated testing, OAuth, multi-tenant architecture, AWS, Azure, Google Cloud
- **Machine learning:** PyTorch, TensorFlow, Keras, Hugging Face, XGBoost, scikit-learn,
  transformers, LoRA fine-tuning, CNN, RNN/LSTM, diffusion models, computer vision and OCR,
  NLP, explainable AI, experimental design and human evaluation studies

### 6.7 Education

No GPA, scholarship or coursework.

| Degree | Where | Years |
|---|---|---|
| M.Sc. Computing Science (research at Amii on explainable AI; thesis: Responsibility in diffusion models) | University of Alberta | 2023 – 2024 |
| M.Sc. Environmental Engineering | University of Tehran | 2015 – 2018 |
| B.Sc. Civil Engineering | K. N. Toosi University of Technology | 2010 – 2015 |

### 6.8 Research

Intro, then the three existing rows unchanged:

> Most explainability asks which parts of an input a model looked at. Responsibility asks which
> training examples were responsible for the decision. What comes back is not a heatmap but a
> precedent: this is classified this way because of these forty images.
>
> The method improved interpretability by 5% on image classification and 20% on text
> classification, and a 300-participant human evaluation study showed a 30% preference over
> baseline approaches.

### 6.9 Contact

- Label `Contact`.
- One line: *Always open to connecting with people working on AI systems. Email is the fastest
  way to reach me.*
- The address `farazkhadivpour@gmail.com` as a `mailto:` link at hero size.
- Below it: `linkedin → · github → · cv →`.
- Nothing about roles, hiring or availability.

### 6.10 Metadata

- `<title>`: `Faraz Khadivpour · Senior AI / ML Engineer`
- Description: `Faraz Khadivpour, senior AI/ML engineer in Vancouver. Founding AI engineer at
  SISA Energy, building agentic systems and end-to-end AI applications from design to
  production.`
- A static JSON-LD `Person` block: name, url, jobTitle, worksFor (SISA Energy), alumniOf
  (University of Alberta), address locality, `sameAs` (LinkedIn, GitHub). No phone number.

## 7. Visual treatment (existing system only)

- **Hero:** eyebrow and headline as today. The lede is body size (14 px) in `--text-2`, measure
  about 62ch. Actions are nav-size (12 px) text links; the first in `--text`, the rest in
  `--text-muted`, accent on hover.
- **Numbers:** a four-column strip between hairlines. Figure in `--text` at one new size token,
  `--f-stat` (34 px, 28 px on mobile); caption at 12 px in `--text-muted`. Two by two on
  mobile. No section label.
- **Experience and work:** the existing `.rows` / `.row.entry` pattern. Dates sit in the
  existing right-hand `.meta` slot and drop under the title on mobile. Outcome lines are a list
  at 13 px in `--text-2` with a faint hanging marker. The stack line (experience entries only)
  is 12 px in `--text-faint`. Kickers (environment on experience, category on work) reuse the
  section-label style. The result line is 13 px in `--text`.
- **Harness list (work 01):** a two-column list inside the entry, principle on the left at
  12 px in `--text-muted`, description on the right at 13 px in `--text-2`, rows separated by
  `--rule-faint` hairlines. Stacked on mobile.
- **Skills and education:** the existing `.row` pattern, two columns, stacked on mobile.
- **Contact:** email at `--f-hero`.
- Company names are links in `--text` that take the accent on hover, like the existing rows.
- No new colours. Every new text/background pair uses existing tokens.

## 8. Motion

All motion is progressive enhancement from one small inline script with no dependencies.

- **Reveal on scroll.** Hero children, each section's label and blocks, and each row start at
  opacity 0 and 8 px low, and settle over 500 ms ease-out once at least 10% is in view. Rows
  in a group stagger by 60 ms, capped at five steps. Each element animates once. Anything
  already in view on load reveals immediately, so the hero animates in on arrival.
- **Count-up.** Each stat figure counts from 0 to its value over about 900 ms ease-out the
  first time the strip is half in view. Prefix and suffix (`+`, `%`, `s`) stay fixed; `10,000`
  and `800,000` keep their thousands separators while counting. The real value is in the HTML, so crawlers and
  no-JS readers see it.
- **Sticky masthead** on viewports wider than 768 px, on an opaque `--ground` bar with the
  existing hairline. Static on mobile, where it wraps to two lines.
- **Anchors.** Smooth scrolling for nav links, with `scroll-margin-top` so headings clear the
  sticky bar.
- **Hover.** Existing 150 ms colour transitions, extended to the new links.

**Fallbacks (hard requirements):**

- No JavaScript: every element is visible and every number shows its final value. The hidden
  pre-reveal state exists only under a class the script adds to `<html>`.
- `prefers-reduced-motion: reduce`: no reveal, no count-up, no smooth scroll.
- No `IntersectionObserver`: reveal everything at once.
- Print: everything visible.

## 9. Content model

| File | Holds |
|---|---|
| `src/data/site.ts` | name, role, location, headline + accent word, description, nav, contact links |
| `src/data/stats.ts` | figure value, prefix/suffix, caption |
| `src/data/experience.ts` | environment, role, company, href, location, dates, outcome lines, stack |
| `src/data/work.ts` | kicker, title, body, result, optional principle list (reshaped from today's `title`/`body`) |
| `src/data/skills.ts` | group, items |
| `src/data/education.ts` | degree, school, years, note |
| `src/data/research.ts` | unchanged |

Prose that carries inline links (lede, About, Research intro) is written directly in
`index.astro`, as About is today. `public/cv.pdf` is already replaced with the new CV and ships
with this change.

## 10. Verification

- `astro check` clean; `npm run build` succeeds.
- Screenshots at 1440 px and 390 px, in both colour schemes, reviewed by eye.
- One render with JavaScript disabled and one with reduced motion: all content visible, all
  numbers at final values.
- No horizontal scroll at 390 px; nav on one line.
- Every external link returns 200.
- Every figure on the page traced to a line in the CV.
- The page contains no GPA, scholarship or availability wording.

## 11. Calls made by Claude, for Faraz to check

1. The headline wording, and `harness` as its accented word.
2. The stats: `6+` years is derived from dates. Faraz set the rest: `10,000s` buildings second,
   `800,000+` third with no employer named, `95%` last.
3. Each experience entry is labelled with its environment: Startup, Enterprise, Research
   institute, Research lab.
4. Harness engineering is shown as a principle-by-principle list inside work entry 01.
5. A fifth work entry covers the software engineering strand (CollectFlow, full stack).
6. Two new sentences are in Faraz's voice and not from the CV: "Everything I build is some
   version of that problem" and "Most of the engineering is not the model".
7. Tech appears as one muted line per job, not pills; no cards, logos or icons.
8. The scholarship and the teaching assistant role are left off the page (they stay in the CV).
9. The "about 64% of human-authored commits over the last six months" line is included as the
   CV states it, though it will age.
10. The masthead is sticky on desktop only; the nav has five items; a JSON-LD `Person` block is
    added for search engines.

## 11a. As built (differences from the sections above)

- Work entry 04, "The measurement, not the demo", was removed at Faraz's request after he saw
  the build. Selected work has four entries; the 95% import result stays in the stats strip and
  in the SISA Energy experience entry.
- The headline is set on three lines: sentence two breaks after "applications,".
- Each work entry's closing line carries a small label, `Result` (`Scope` on entry 01).
- Kickers, dates and stack lines use `--text-muted`, not `--text-faint`; principle names use
  `--text`. A recruiter has to be able to read them.
- Outcome lines are marked with a small square, not a tick that reads as a dash.
- `--f-stat` has a third step, 24 px at 360 px and narrower, and the nav may wrap there.
- On phones every row stacks its year or venue under the title.
- The running count is drawn over the real figure, so the HTML always holds the final value.
- Print turns transitions off as well as forcing everything visible.

## 12. Left to the builder

Exact spacing, class names, the markup of the sticky bar, the script's structure, and the
marker glyph for outcome lines, within the constraints above.

## 13. Later, not now

- A share-preview image for LinkedIn and chat links.
- The interactive Responsibility demo from the August spec.
