---
title: Reading a photograph of a machine
summary: Extraction from evidence nobody meant a machine to read.
order: 1
---

Somewhere on a roof, a technician holds up a phone and photographs a metal plate bolted to a machine. The light is bad. The plate is scratched, or painted over, or half hidden behind a conduit nobody is going to move. Six months later someone needs the model number from that plate in a spreadsheet, and needs to be able to defend it.

Everything difficult about the work lives between those two moments.

The naive version of the problem is character recognition, and character recognition is the part that already works. Given a clean crop and enough resolution, reading letters is close to solved. What is not solved is everything around the letters: which of the eleven numbers on the plate is the model, which is the serial, which is a certification code, and which is a manufacturer's internal part number that resembles a model number closely enough to fool anything matching on shape alone.

A person does not solve this by reading harder. They solve it by knowing what a plate *is*. They know the model is usually set in the largest type. They know a serial has a certain look to it. They know that if the voltage reads 208/230 and the plate says three-phase, this is a commercial unit and whole families of model numbers become impossible. None of that is written on the plate. It is context the reader brings.

So the interesting question was never how to read the image. It is how to give a model the same context — and then how to stop it from inventing things once that context runs out.

The second half turns out to be the entire job.

A model asked to extract a model number from an unreadable plate will produce a model number. It will be well formed. It will match the manufacturer's naming convention. It will be wrong, and nothing about the output will indicate that it is wrong, because the shape of a confident answer and the shape of a correct answer are identical.

The fix is not a better prompt. It is making abstention a first-class output — something the system is asked for explicitly, measured on, and rewarded for. *What is on this plate*, and separately, *how much of it could you actually see.* A field left empty because the evidence was not there is worth more than a field filled with a plausible guess. The empty one costs a technician five minutes. The guess costs an engineer their credibility in a report that someone else will act on.

That inverts the usual scoreboard. Accuracy across the answered subset is easy to move and tells you almost nothing. The number that matters is what fraction of the confident answers are right, and the only way to improve it is to build a system willing to say less.

The rest is unglamorous. Deciding what counts as the same unit when two photographs disagree. Choosing which source wins when an image contradicts a database — and it should be the image, because somebody stood in front of the machine. Keeping that disagreement visible instead of quietly resolving it, so a human can see there was ever a question.

From the outside none of this looks like machine learning. It looks like an argument about what it means to know something.
