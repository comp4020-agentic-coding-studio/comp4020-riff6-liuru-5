---
title: "Model audit"
description:
  Running Nina's stroke-level classifier against the semester's shortlist,
  then trying to break it.
week: 9
date: 2027-05-03
teachers:
  - nina-pikseleva
spec:
  - you can state what the classifier's training set actually contained, and
    one way that could bias its output
  - you have found at least one input that makes the classifier confidently
    wrong
related:
  - lectures/week-09
  - people/nina-pikseleva
---

## Before the seminar

No reading. Bring a laptop if you have one; the seminar shares a small
number if not.

## In the seminar

Nina runs the stroke-level classifier from lecture live against the
semester's shortlisted paintings and a few securely attributed controls.
Working in pairs, try to construct an input --- a cropped detail, a
mirrored image, a securely attributed painting from outside the training
set --- that makes the model confidently wrong, and note what that reveals
about what it actually learned.

## Afterwards

Keep your "broke the model" example. If your final project touches on
computational methods at all, it needs to state their limits as concretely
as this seminar just demonstrated one, not as a general disclaimer.
