# Recruiter-legible content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the home page so a recruiter can read role, level, employers, results, skills
and contact from the page itself, in the existing visual style, with scroll reveal and count-up.

**Architecture:** Typed data files hold everything list-shaped; `index.astro` renders them and
carries the prose that has inline links. Motion is one dependency-free inline script in
`Base.astro`, gated by a `js` class on `<html>` so the page is complete without it.

**Tech Stack:** Astro 5 (static), TypeScript, plain CSS in `src/styles/global.css`, no new
dependencies.

**Spec:** `docs/superpowers/specs/2026-11-13-recruiter-content-design.md` (all copy is in §6;
copy it verbatim, do not paraphrase).

## Global Constraints

- Every figure and claim comes from `public/cv.pdf`. Nothing on the page claims more.
- Not on the page: GPA, scholarship, coursework, phone number, any availability or job-seeking
  wording, any product other than SISA AI and CollectFlow.
- No em dashes in copy. En dashes only in date ranges.
- Exactly two accented words on the home page: `harness` (headline) and `legible` (About).
- Existing colour tokens only. One new size token: `--f-stat` (34px, 28px at ≤768px).
- No cards, pills, gradients, shadows, icons or logos. No new dependencies.
- External links: same tab, `rel="noopener"`.
- Stats strip, in this order: `6+`, `10,000s`, `800,000+`, `95%`; no employer named in it.
- Without JavaScript, under `prefers-reduced-motion: reduce`, without `IntersectionObserver`
  and in print, all content is visible and every number shows its final value.
- **No commits and no push during the build.** Pushing `main` publishes the live site. One
  commit at the end, only after Faraz has seen screenshots and said so.

## Review Focus

1. The motion script throws or never runs after the `js` class is set: content must still
   become visible (failsafe). Test in Task 4.
2. A 320px-wide viewport (narrower than the 390px target): no horizontal scroll. Test in Task 3.
3. Print: every revealable element visible, stats at final values. Test in Task 4.
4. Deep link to `/#research`: the heading clears the sticky bar and the section is visible.
   Test in Task 4.
5. Light colour scheme: dates and captions stay readable (use `--text-muted`, never
   `--text-faint`, for anything a recruiter needs to read). Checked by eye in Task 3.

## File map

| File | Change |
|---|---|
| `src/data/site.ts` | role, headline + accent, email, description, `links`, five-item nav, contact order |
| `src/data/stats.ts` | new |
| `src/data/experience.ts` | new |
| `src/data/work.ts` | reshaped, five entries |
| `src/data/skills.ts` | new |
| `src/data/education.ts` | new |
| `src/pages/index.astro` | rebuilt in the spec's section order |
| `src/layouts/Base.astro` | masthead wrapper for the sticky bar, `head` slot, `js` gate, motion script |
| `src/styles/global.css` | new section styles, reveal states, sticky bar, print |
| `src/data/research.ts`, `src/pages/404.astro` | unchanged |

Verification scripts live outside the repo, in the session scratchpad (`$SCRATCH/tools/`),
because they depend on a Playwright install from another project and on strings that will age.

---

### Task 1: Verification tools

**Files:**
- Create: `$SCRATCH/tools/check-page.mjs`, `$SCRATCH/tools/browser.cjs`

**Interfaces:**
- Produces: `node check-page.mjs <dist/index.html>` exits non-zero and prints each failed
  assertion. `node browser.cjs <baseUrl> <outDir>` writes screenshots and prints PASS/FAIL per
  behavioural check.

- [ ] **Step 1: Write `check-page.mjs`** asserting on the built HTML (text with tags stripped):
  - contains: `Senior AI / ML Engineer`, `harness`, `from design to development to production`,
    `founding AI engineer`, `SISA Energy`, `Scotiabank`, `Amii`, `NCBLab`, `CollectFlow`,
    `10,000s`, `800,000+`, `95%`, `6+`, `Startup`, `Enterprise`, `Research institute`,
    `Research lab`, `Guardrails`, `Permissions`, `Security and privacy`, `Evaluation`,
    `Always open to connecting`, `farazkhadivpour@gmail.com`
  - stats order: the four `data-count` values appear as `6`, `10000`, `800000`, `95`
  - nav labels in order: about, experience, work, research, cv
  - exactly two `class="accent"` elements; their text is `harness` and `legible`
  - does not contain (case-insensitive): `gpa`, `scholarship`, `available`, `availability`,
    `open to work`, `hiring`, `—`, `+1`, `(604`, `(780`
  - the stats strip text does not contain `Scotiabank`
  - one `application/ld+json` block that parses and has `"@type":"Person"` and no `telephone`
- [ ] **Step 2: Write `browser.cjs`** (Playwright core from
  `/home/faraz/platform/frontend/node_modules/.pnpm/playwright-core@1.64.1/node_modules/playwright-core`,
  Chromium from `~/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome`). Checks are listed
  in the tasks that own them (Tasks 3 and 4). Full-page screenshots after scrolling the page
  top to bottom so every element has revealed.
- [ ] **Step 3: Run `npm run build` then `check-page.mjs`.** Expected: FAIL (old page).

### Task 2: Data and markup

**Files:**
- Modify: `src/data/site.ts`, `src/data/work.ts`, `src/pages/index.astro`, `src/layouts/Base.astro`
- Create: `src/data/stats.ts`, `src/data/experience.ts`, `src/data/skills.ts`, `src/data/education.ts`

**Interfaces (produced, used by Tasks 3 and 4):**

```ts
// site.ts
site: { name; role: 'Senior AI / ML Engineer'; location; headline: readonly [string, string];
        headlineAccent: 'harness'; email: 'farazkhadivpour@gmail.com'; description }
links: { sisa; collectflow; scotiabank; amii; ncblab; rwdi; linkedin; github; cv; mailto }
nav: NavItem[]        // about, experience, work, research, cv
contact: ContactLink[] // email, linkedin, github, cv

// stats.ts
type Stat = { value: number; suffix: string; caption: string }
// experience.ts — `points` are trusted HTML strings (they carry inline links)
type Job = { env; role; company; href; note?; location; dates; points: string[]; stack: string[] }
// work.ts
type WorkItem = { kicker; title; body; principles?: { name: string; detail: string }[];
                  resultLabel: 'Result' | 'Scope'; result }
// skills.ts
type SkillGroup = { group: string; items: string[] }
// education.ts
type Degree = { degree: string; school: string; years: string; note?: string }
```

Markup hooks the later tasks rely on:
- `data-reveal` on every element that reveals (hero children, each stat, section labels, prose
  blocks, portrait, every row, contact parts).
- Stat figure: `<span class="figure" data-count="800000" data-suffix="+">800,000+</span>`.
- Section ids: `about`, `experience`, `work`, `skills`, `education`, `research`, `contact`.
- Masthead: `<header class="masthead"><div class="wrap masthead-inner">…</div></header>`.
- Class names: `.lede`, `.actions`, `.stats` / `.stat` / `.figure` / `.caption`, `.job`,
  `.kicker`, `.note`, `.points`, `.stack`, `.principles`, `.result` / `.result-label`,
  `.pair` (skills rows), `.contact-line`, `.contact-email`.

- [ ] **Step 1: Write the data files** with the spec's copy (§6.2, §6.4 to §6.7). LinkedIn URL
  becomes `https://www.linkedin.com/in/farazkhadivpour/` (the CV's). Work 03's result reads
  "Field data capture cut from days to a few hours, at 95%+ accuracy on noisy field imagery."
  Work 01's `resultLabel` is `Scope`; the rest are `Result`.
- [ ] **Step 2: Rebuild `index.astro`** in the order hero, numbers, about, experience, selected
  work, skills, education, research, contact. Headline renders as two block lines, accent on
  `headlineAccent`. Lede, About and Research intro are written inline with links from `links`.
  JSON-LD `Person` goes into the layout's `head` slot.
- [ ] **Step 3: Update `Base.astro`**: masthead wrapper, `<slot name="head" />`.
- [ ] **Step 4: Verify.** `npx astro check` (0 errors), `npm run build`, `check-page.mjs`.
  Expected: all pass.

### Task 3: Styles

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add to `browser.cjs`**: screenshots at 1440×900 and 390×844 in dark and light;
  `document.documentElement.scrollWidth <= innerWidth` at 1440, 390 and 320; nav on a single
  line at 390 (all nav links share one `offsetTop`); no console errors.
- [ ] **Step 2: Style the new sections** per spec §7: `--f-stat`; four-column stats strip
  between `--rule` hairlines, two by two at ≤768px; `.job` as a grid (kicker full width, title
  left, location and dates right in `--text-muted`, points and stack full width; single column
  at ≤768px); points at 13px `--text-2` with a hairline tick marker; stack at 12px
  `--text-faint`; `.principles` two columns with `--rule-faint` hairlines, stacked at ≤768px;
  `.result` at 13px `--text` with a label-style `.result-label`; `.pair` two columns, stacked on
  mobile; contact email at `--f-hero`; inline prose links in `--text` with a hairline underline
  and accent on hover; headline `max-width` widened and `text-wrap: balance`.
- [ ] **Step 3: Sticky masthead** above 768px: full-width opaque `--ground` bar, existing
  hairline, `[id] { scroll-margin-top }` to clear it. Static at ≤768px.
- [ ] **Step 4: Run `browser.cjs`, read all four screenshots**, fix what looks wrong, repeat.

### Task 4: Motion and fallbacks

**Files:**
- Modify: `src/layouts/Base.astro`, `src/styles/global.css`

- [ ] **Step 1: Add behavioural checks to `browser.cjs`:**
  - default: on load the hero is revealed and below-the-fold rows are not; after scrolling to
    the bottom every `[data-reveal]` has computed opacity 1; stat figures end at `6+`,
    `10,000s`, `800,000+`, `95%`
  - JavaScript disabled: every `[data-reveal]` opacity 1 on load, figures at final values
  - `reducedMotion: 'reduce'`: same, and `<html>` has no `js` class
  - `IntersectionObserver` deleted before load: same
  - `IntersectionObserver` replaced by a constructor that throws: every `[data-reveal]` opacity
    1 within 3.5 s (failsafe)
  - print media emulation: every `[data-reveal]` opacity 1
  - load `/#research` at 1440: the Research label's top is below the sticky bar's bottom
- [ ] **Step 2: Head gate.** Inline script in `<head>`: add `js` to `<html>` only when
  `IntersectionObserver` exists and reduced motion is not requested; arm a 3 s failsafe that
  removes `js` unless the body script has set `window.__motion = true`.
- [ ] **Step 3: CSS states.** `.js [data-reveal]` hidden (opacity 0, 8px down); `.in` visible;
  500 ms ease-out; print forces visible; smooth scroll only under `no-preference`.
- [ ] **Step 4: Body script.** One observer (`threshold: 0`, bottom root margin −10%) reveals
  each element once; elements intersecting in the same callback stagger by 60 ms, capped at
  five steps. Stat figures show `0` + suffix until the strip is half in view, then count up over
  900 ms ease-out with `toLocaleString('en-US')`. Whole body in `try/catch`; on error remove
  `js`.
- [ ] **Step 5: Run `browser.cjs`.** Expected: every check PASS.

### Task 5: Final verification and handoff

- [ ] **Step 1:** `npx astro check`, `npm run build`, `check-page.mjs`, `browser.cjs`: all pass.
- [ ] **Step 2:** Every external `href` in `dist/index.html` returns 200 (LinkedIn blocks
  scripted requests; report its status as is).
- [ ] **Step 3:** Trace every figure on the page to the CV text (`pdftotext public/cv.pdf`).
- [ ] **Step 4:** Read the final screenshots at both widths and schemes.
- [ ] **Step 5:** Show Faraz the screenshots and how to preview locally. Commit and push only
  on his word; the commit includes `public/cv.pdf`, the spec and this plan.
