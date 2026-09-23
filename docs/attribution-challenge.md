# Six-painting challenge: sources and generation

The student gallery uses neutral labels. This file is the answer key for maintainers; the public page reveals sources after students enter six verdicts. This is an open educational exercise, not a secure exam.

All six final files are in `src/assets/images/attribution-challenge/`. Museum images are CC0, downloaded from the Cleveland Museum of Art Open Access API on 23 September 2026 and encoded as AVIF, preserving the complete reproduction. Maximum edge 2560px. Generated images use the built-in image-generation tool and are newly invented imitations, not historical forgeries.

## Answer key

- A: generated, Mountain retreat (`painting-a.avif`).
- B: historical, *Listening to the Qin*, attributed to Tang Yin, late 1400s–early 1500s. https://www.clevelandart.org/art/1977.199
- C: historical, *Mount Hua*, Tang Yin, 1506. https://www.clevelandart.org/art/1969.116
- D: generated, Moonlit music pavilion (`painting-d.avif`).
- E: generated, Autumn river retreat (`painting-e.avif`).
- F: historical, *Scholar-Hermits in the Autumn Mountains*, Tang Yin, 1500–1510. https://www.clevelandart.org/art/1976.94

Museum object records, image URLs, attribution qualifiers and credit lines are preserved in `challenge-museum-sources.json`. The qualified attribution for B must remain qualified.

## Exact generation prompts

### Painting A

Use case: stylized-concept
Asset type: a fictional imitation for a university real-versus-generated painting exercise.
Primary request: Generate one original Tang Yin-inspired Chinese ink painting. A tall vertical Chinese mountain landscape: monumental angular peaks stacked above mist, small trees on rocky ledges, a narrow waterfall and tiny mountain dwellings. Portrait 1:3 composition, painting on softly aged warm tan paper.
Style: nuanced traditional brushwork, dry texture strokes, atmospheric diluted ink, restrained mineral color, subtle irregularities of hand-painted lines. Museum reproduction photographed flat with even lighting, full painting visible.
Constraints: original invented composition, not an exact copy of a known work; no modern objects, no frame, no external labels, no watermark. Include a small decorative red seal-like square, but no legible artist signature or written attribution. The site will disclose its generated origin in the answer reveal.

### Painting D

Use case: stylized-concept
Asset type: a fictional imitation for a university real-versus-generated painting exercise.
Primary request: Generate one original Tang Yin-inspired Chinese ink painting. A quiet Chinese garden scene at dusk: a scholar playing a qin inside a small open pavilion, three visitors listening beneath a gnarled bare tree, a pale moon in a misty sky. Portrait 3:4 composition, ink and very light color on warm aged silk.
Style: nuanced traditional brushwork, dry texture strokes, atmospheric diluted ink, restrained mineral color, subtle irregularities of hand-painted lines. Museum reproduction photographed flat with even lighting, full painting visible.
Constraints: original invented composition, not an exact copy of a known work; no modern objects, no frame, no external labels, no watermark. Include a small decorative red seal-like square, but no legible artist signature or written attribution. The site will disclose its generated origin in the answer reveal.

### Painting E

Use case: stylized-concept
Asset type: a fictional imitation for a university real-versus-generated painting exercise.
Primary request: Generate one original Tang Yin-inspired Chinese ink painting. A broad Chinese autumn landscape handscroll: a winding river, low rocky ridges, sparse trees, a tiny boat and two scholar hermits beside a rustic dwelling. Wide horizontal 3:1 composition, ink and pale ochre on softly aged silk.
Style: nuanced traditional brushwork, dry texture strokes, atmospheric diluted ink, restrained mineral color, subtle irregularities of hand-painted lines. Museum reproduction photographed flat with even lighting, full painting visible.
Constraints: original invented composition, not an exact copy of a known work; no modern objects, no frame, no external labels, no watermark. Include a small decorative red seal-like square, but no legible artist signature or written attribution. The site will disclose its generated origin in the answer reveal.
