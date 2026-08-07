---
title: Knowing when it's wrong
summary: Evaluation, monitoring, and the difference between a model that works and a system someone relies on.
order: 3
---

The demo works. That is the least informative fact available about a system.

A demo is one sample from a distribution nobody has measured, drawn — usually without meaning to — from the region where the thing behaves. Everything hard about running models in production comes out of the gap between that sample and the distribution.

The first problem is that you cannot improve what you cannot measure, and for generative systems the measuring is the hard part. There is no accuracy to compute when the output is a paragraph, or a structured record with twelve fields where six of them are judgment calls. So the first real work is not modelling. It is building the ruler: a set of examples with answers you actually believe, assembled slowly, argued over, and then treated as more valuable than any model that will be scored against it.

The ruler has to be built by hand, by someone who knows the domain well enough to recognise when the ground truth itself is wrong — because a surprising amount of it is. A benchmark inherits every mistake made by the people who labelled it. A model that scores badly is sometimes right.

The second problem is that offline scores describe yesterday. Inputs drift. A provider updates a model without telling anyone. Somebody edits a prompt to fix one case and quietly breaks nine others, invisibly, because nothing that fails does so loudly. So the ruler has to run against live traffic continuously, not once in a notebook before release, and the numbers it produces have to be watched the way an operations team watches error rates.

The third problem is that quality is not the only axis. Latency is a quality property: an answer that arrives after the person stopped waiting is a wrong answer. Cost is a design constraint rather than an invoice — a system that is right ninety-eight percent of the time at ten times the price is often the worse system, and pretending otherwise is how projects die at the moment somebody finally does the arithmetic. Both belong on the same dashboard as accuracy, because they trade against each other and the trade should be deliberate.

Then the mundane thing that matters more than any of it: prompts are code. They change behaviour, they have versions, they need review, and they belong in the same repository under the same process as everything else capable of breaking production. A prompt edited in a web console at eleven at night is an undocumented deploy.

None of this buys correctness. Nothing buys correctness. What it buys is the ability to *notice* — to know within hours rather than quarters that something has gotten worse, and to know which change did it.

That is the whole difference between a model that works and a system someone can rely on. The first is an achievement. The second is a discipline, and most of it looks like bookkeeping.
