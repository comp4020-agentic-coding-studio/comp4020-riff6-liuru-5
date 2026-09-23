---
title: "What a model sees"
description:
  Stroke-level machine learning as a second, tireless opinion --- and
  exactly what it can't tell you.
week: 9
date: 2027-05-03
teachers:
  - nina-pikseleva
slides: /decks/week-09/
related:
  - sessions/09-model-audit
  - people/nina-pikseleva
---

Guest week, taught by Nina Pikseleva. Stroke-level attribution models --- the
line of work that includes Ahmed Elgammal's stroke-based analysis of
Picasso and Matisse drawings, and brush-stroke classifiers trained
specifically on Chinese ink-wash painting --- learn to separate hands from
low-level features of how a line is drawn: curvature, pressure variation,
the fine texture a human eye tends to read holistically rather than measure.
Applied to a securely attributed training set, a model like this can flag a
disputed painting as closer to one hand than another with a precision no
connoisseur would claim for their own eye.

That precision is exactly the trap. The model only ever tells you what it
was trained to recognise, which means it inherits every misattribution
already baked into its training set, states its answer with total
confidence regardless of whether the question was fair, and cannot explain
its reasoning in terms a human argument can weigh against the seal or the
colophon. Nina's own framing, used all week: a model that agrees with the
connoisseurs is not yet interesting, and one that disagrees is not yet
trustworthy.

## Outline

- how stroke-level attribution models actually work, at a level you could
  explain to a non-technical reader
- what training-set bias does to a model's apparent confidence
- running a small classifier against this course's own shortlisted
  paintings, live
- where computational and human methods should and shouldn't be combined
