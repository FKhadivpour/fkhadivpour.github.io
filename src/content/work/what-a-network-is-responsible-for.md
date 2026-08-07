---
title: What a network is responsible for
summary: Explaining a decision by the examples that produced it, not the features it looked at.
order: 2
---

Ask a neural network why it made a decision and you are asking about something it has no representation of. It has weights. The weights came out of a process. The decision falls out of the weights. There is no reason inside it — only a history.

Most explainability accepts that and looks at the input instead. Which pixels mattered? Which tokens moved the logit? Saliency maps, attention weights, gradient attributions: different machinery, same question. *What part of this input was the model looking at?*

Those answers are useful and also slightly strange, because they explain a decision using something the person already has. You show a radiologist a heatmap over the region they were already staring at. You have told them where. You have not told them why.

My research asked a different question. Not which features mattered — which *training examples* were responsible.

The idea comes from watching the process instead of the product. During training, a network's prediction for a given input moves around, sometimes reversing several times before it settles. Each of those movements follows some batch of examples. If you record that history rather than throwing it away, you can ask which examples were present at the moments the behaviour on this input became what it is. Those examples are responsible for the decision in a specific and measurable sense.

What comes back is not a heatmap. It is a set of things the model has seen before. *This is classified the way it is because of these forty images.*

That is much closer to how people justify judgments to each other. Nobody explains a diagnosis by listing which parts of a scan they looked at. They say: I have seen this before, and it looked like this. Precedent is an explanation format humans already trust — it is the one that medicine, law, and apprenticeship all run on.

It also fails in a useful way. When the responsible examples are incoherent — forty pictures with nothing in common — that is information. Usually it means the model has latched onto something in the data that is not the thing you meant, and the explanation surfaces it as an obvious mess rather than as a plausible-looking heatmap. An explanation capable of looking wrong is worth more than one that always looks reasonable.

I extended the method to diffusion models for my thesis, where the question gets stranger: an image arrives through many steps, so responsibility has to be attributed across a trajectory rather than to a single decision. Two papers came out of the earlier work, along with a study of three hundred people testing whether the explanations helped anyone at all — because an explanation nobody can use is not an explanation, it is a diagram.

The thread that survived into everything since: an answer and a reason to trust the answer are two separate deliverables. A system that produces only the first is unfinished.
