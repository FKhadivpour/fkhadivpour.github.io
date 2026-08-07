# Portfolio redesign — design spec

**Date:** 2026-08-06
**Repo:** `FKhadivpour/fkhadivpour.github.io` (public, GitHub Pages user site)
**Branch:** `redesign`
**Status:** approved design, ready for implementation planning

---

## 1. Problem

The existing site is a CV rendered as HTML on a 2015-era jQuery/Bootstrap template:
a full-bleed hero photo under a blue overlay, a wall-of-bullets About, a 36-item skills
list that includes Sublime Text and PyCharm, seven education blocks (three of them
Coursera certificates), and four project cards with four more commented out in place.
It ships ~1.4 MB of dependencies to render text.

Two problems, one structural and one presentational:

- **Presentational.** The design signals nothing about its author except that they used
  a template.
- **Structural.** It is an inventory, not an argument. It lists everything and therefore
  emphasises nothing.

A third problem underlies both: **the strongest work is not public.** The production
GenAI systems are proprietary; the public repos are small, undescribed, unstarred and
mostly stale. A "projects" section built from repo links actively undercuts the author's
seniority. The redesign has to prove capability without linking code.

## 2. Goals

- Read as intelligent, restrained and specific — a calling card, not an application.
- Make one memorable claim and support it with three pieces of evidence.
- Prove seniority through *thinking about problems*, not through repo counts.
- Load instantly, work in both colour schemes, remain accessible.
- Stay cheap to extend: adding a fourth essay is one Markdown file.

## 3. Non-goals

- No signalling of job-seeking, availability, or "open to work".
- No blog, CMS, analytics, contact form, or newsletter.
- No manual theme toggle — the visitor's system preference is respected and that is all.
- No work history, education timeline, or skills list on the site. That is the CV's job.
- No interactive demo in v1. The architecture must not preclude one later.

## 4. Audience and posture

End audience is hiring managers at AI companies. The posture is deliberately *not*
addressed to them: the site behaves as a memorable professional calling card and lets
the reader draw their own conclusion. Nothing on the page asks for anything.

## 5. Voice

Four rules, applied everywhere:

1. **No adjectives about the author.** "Results-driven", "proven ability", "strong
   background" are claims a weak candidate also makes. Banned.
2. **Specificity replaces claims.** A concrete consequence outperforms any sentence
   containing "scalable".
3. **Withholding.** Three things on a page implies thirty more exist. Thirty implies
   that is everything.
4. **A thesis, not a list.** The site argues a point of view about the field.

## 6. Content architecture

```
/                     hero · about · research · work index
/work/<slug>          one essay per work piece (3 pages)
/cv.pdf               static asset, linked not embedded
```

Home page order is **hero → about → research → work**. About sits in a left-hand column
at roughly 58% width with the right side open; text measure capped near 65 characters.

Rationale for the hybrid (single home page + a page per essay): inlining three essays
would turn a confident page into a long scroll and destroy the withholding principle.
Separate routes also give each essay its own URL, share-preview card and search listing.

**Content model**

| Source | Shape |
|---|---|
| `src/content/work/*.md` | frontmatter: `title`, `order`, `summary`; body is the essay |
| `src/data/research.ts` | typed array: `title`, `venue`, `year`, `url` |
| `src/data/site.ts` | nav items, contact links, email |

Adding work later requires no layout changes.

## 7. Copy — approved

### Hero

```
AI / ML Engineer

I work on the boundary between people and machines —
making each legible to the other.
```

`legible` is one of only two accented words on the home page.

### About

> I started as a civil and environmental engineer. The crossing happened inside that work —
> a thesis on bioenergy that turned out to be a data problem — and what held me afterwards
> was the mathematics and the code, not the plant.
>
> A model produces an answer; a person has to decide whether to trust it. My research
> proposed one way in — instead of asking which features mattered, ask which training
> examples were responsible. Inspect the process, not the output. It became a second thesis
> and two papers.
>
> Then I went to industry. Now the work is putting AI in the hands of energy engineers —
> people who have no use for a confident wrong answer.
>
> Which makes it production work more than modelling work. An inference service other
> products depend on. Model choice and provider routing behind a versioned interface, so
> what's underneath can change without anyone downstream noticing. Retrieval that returns
> the right passage rather than a plausible one. Output validated before a human ever sees
> it. Evaluation offline, quality monitoring online, latency and cost tracked like any
> other budget. Prompts in version control, because they're code.
>
> None of that is glamorous. It's the difference between a model that works in a notebook
> and one someone trusts at three in the morning.

`responsible` is the second accented word.

The fourth paragraph ("Which makes it production work…") deliberately breaks rhythm into
verbless fragments — it is the only place on the site that talks like an engineer rather
than an essayist, and it is the paragraph a technical reader will stop on.

**Constraint:** no employer name, no product names, no figures that identify a system.

## 8. Work — three essays

Each essay is prose: the problem, the constraint, the idea that resolved it, what it
cost. No code, no architecture diagrams, no employer, no metrics traceable to a real
system. Target 400–700 words each.

| # | Title | Direction | Brief |
|---|---|---|---|
| 01 | Reading a photograph of a machine | world → machine | Extraction from evidence that was never meant to be machine-read. Judgment under partial information; deciding what something probably is; knowing when you don't know and saying so rather than guessing. |
| 02 | What a network is responsible for | machine → human | The research thread. Instead of asking which input features mattered, ask which *training examples* were responsible — inspect the process, not the output. Why example-based explanation suits how people actually reason about trust. |
| 03 | Knowing when it's wrong | how you verify both | Evaluation and trust: offline benchmarking against ground truth, online quality monitoring, custom metrics for accuracy and reliability, latency and cost treated as budgets, prompts kept in version control. The least-written-about and most senior of the three. |

Drafted by Claude, corrected by Faraz. Voice rules in §5 apply.

## 9. Research

Listed as a plain table of three items, newest first — title, venue, year, link:

1. *Responsibility: an example-based explainable AI approach via training process
   inspection* — arXiv:2209.03433, 2022 (Khadivpour, Banerjee, Guzdial)
2. *Explainability via Responsibility* — AIIDE EXAG, 2020 (Khadivpour, Guzdial)
3. *Responsibility in diffusion models* — M.Sc. thesis, University of Alberta, 2024

The 2020 environmental-engineering publication is **excluded** — real and published, but
from a different field and it dilutes the thesis. Decision may be revisited.

## 10. Visual system

Direction: monospace as a **typographic** choice, not a costume. Explicitly forbidden:
fake window chrome, `$` prompt characters, blinking cursors, ASCII art, neon-on-black
code-editor palettes.

**Type.** One family: IBM Plex Mono (SIL OFL), self-hosted as subsetted `woff2`. No
Google Fonts CDN — it is a third-party request that blocks render and leaks visitor IPs.
Eight sizes maximum; the constraint is what makes it feel designed.

| Role | Size | Treatment |
|---|---|---|
| Section label | 10px | uppercase, 0.2em tracking |
| Hero eyebrow | 11px | uppercase, 0.14em tracking |
| Nav, meta | 12px | — |
| Small body | 12.5–13px | — |
| Body | 14px | line-height 1.92 |
| List item | 15.5px | — |
| Essay body | 15px | line-height 1.9, measure 62ch |
| Hero | 25px | line-height 1.62, -0.006em |

**Risk:** long-form prose in monospace is more tiring than proportional type. Mitigated
by larger size, looser leading and a narrower measure on essay pages. If review shows it
still reads poorly, fall back to iA Writer Quattro (a duospace face that keeps the
monospace character while setting prose properly) for essay bodies only.

**Colour — dark (default)**

| Token | Value |
|---|---|
| ground | `#0a0a0b` |
| text primary | `#e6e4de` |
| text secondary | `#a9aeb5` |
| text muted | `#7c8088` |
| text faint | `#4a4e55` |
| hairline | `#1c1e21` |
| hairline faint | `#141618` |
| accent | `#e8a33d` (warm amber) |

**Colour — light**

| Token | Value |
|---|---|
| ground | `#faf9f7` |
| text primary | `#14151a` |
| text secondary | `#4a4e55` |
| text muted | `#6b7078` |
| hairline | `#e4e2dd` |
| accent | `#a8641a` |

Every value above is a **starting point, not a commitment**: each foreground/background
pair is verified against WCAG AA during implementation and adjusted upward if it fails.
Muted and faint tones on the dark ground are the likely offenders. Faint tones are used
only for non-essential ornament (row numbers, arrows) which is permitted below AA.

**Accent budget:** at most two accented words per page.

**Spacing.** 8px base unit. Section rhythm 96px desktop, 56px below 768px. Page gutter
64px desktop, 24px mobile.

**Responsive.** Single column below 768px; the About column goes full width. Four nav
items fit on one line at mobile widths — no hamburger menu.

**Motion.** Effectively none. No scroll-triggered reveals or fade-ins; those are the
tell of a template. Cross-document view transitions only, disabled under
`prefers-reduced-motion`.

## 11. Build and deploy

- Astro 5, TypeScript, `output: 'static'`, `site: 'https://fkhadivpour.github.io'`,
  no `base` prefix (user sites publish at root).
- Zero client-side JavaScript on every route. This is a hard constraint, not a target.
- `.github/workflows/deploy.yml`: checkout → setup-node → `npm ci` → `astro build` →
  `upload-pages-artifact` → `deploy-pages`, triggered on push to `main`.
- GitHub Pages `build_type` switches from `legacy` to `workflow` as a one-time change.
- The existing site stays live on `main` until the redesign builds green and is merged.

## 12. Verification

Claims of completion require evidence, not assertion:

- `astro check` — clean.
- `npm run build` — succeeds.
- Playwright smoke test: every route (`/`, three essays, 404) returns 200, renders its
  expected `<title>`, and produces no console errors.
- axe-core scan on `/` and one essay page — zero serious or critical violations.
- Scripted contrast check of every token pair in §10 against WCAG AA.
- Screenshots at 1280px and 390px in both colour schemes, reviewed by eye — a passing
  test suite does not prove a page looks right.

## 13. Deletions and retentions

**Deleted:** jQuery, Bootstrap, Font Awesome, `scss/`, `css/`, `js/`, the old
`index.html`, `Faraz_CV_old.pdf`, and the unused project images.

**Retained:** `images/photo.png` — kept in the repo, referenced nowhere, by explicit
instruction.

**Added:** `Faraz_CV.pdf` replaced with the current CV, published as-is.

## 14. Decisions

| # | Decision | Rationale |
|---|---|---|
| D1 | Posture is a calling card; no availability signalling | Confidence reads stronger than solicitation |
| D2 | Hero is a thesis about people and machines | Gives the site a point of view rather than a summary |
| D3 | Work proven by essays, not repo links | Best work is proprietary; public repos are weak |
| D4 | Essays stay employer- and metric-free | Explicit instruction; also removes any leak risk |
| D5 | Astro + TypeScript, static, zero client JS | Right tool for text; React would be a runtime for nothing |
| D6 | Home page + one route per essay | Preserves withholding; gives each essay a URL |
| D7 | About before Research before Work | Explicit instruction |
| D8 | Monospace as typography, never as costume | Avoids the generic dev-portfolio read |
| D9 | Warm amber accent, two words per page maximum | Reads considered rather than code-editor |
| D10 | No CV content on the site | The site argues; the PDF records |
| D11 | CV published unmodified | Faraz's decision, after the phone-number and product-name exposure was raised twice |
| D12 | Environmental-engineering paper excluded | Different field; dilutes the thesis |
| D13 | Photo not used in the design | Explicit instruction, reversed from an earlier direction |
| D14 | About opens with the civil/environmental origin | Requested; placed first so the section runs chronologically. The switch is told through the bioenergy thesis that turned out to be a data problem rather than through the word "passion", which is the cliché the voice rules exist to avoid. "A second thesis" in the next paragraph disambiguates the two degrees and quietly signals both. |

## 15. Required input before launch

**Personal contact email.** A personal address was chosen over
`khadivpour@sisaenergy.com`, so that a permanent personal site does not depend on a
current employer's domain — but no address has been supplied yet. `src/data/site.ts`
carries a single `email` constant; the site cannot be published until it holds a real
value. This is the only unresolved input in the design.

## 16. Later, explicitly not now

- An interactive Responsibility demo as a fourth work piece — a React island dropped into
  the existing work route. The architecture supports it; v1 does not include it.
- A custom domain in place of `fkhadivpour.github.io`.
