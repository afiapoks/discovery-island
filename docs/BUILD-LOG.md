# Build log

## November 24, 2026: repository setup

- Tool: Codex.
- Scope: new project repository, README, MIT license, ignore rules, Kiro steering,
  draft requirements/design/tasks, kickoff prompt, and submission/content notes.
- App implementation: not started.
- Kiro use on this project: none yet. These files are starter inputs for Kiro.
- Kiro credits spent on this setup: zero.
- Paid inference: none configured.
- Public repository: https://github.com/afiapoks/discovery-island
- Setup checks: local links, steering metadata, unchecked task status, private-ID
  exclusion, and Git whitespace checks passed. GitHub showed root .kiro and MIT.
- Type check, app tests, browser checks, deployment: not applicable yet.
- Earlier unrelated experiments are not part of this project or its Kiro provenance.

## Entry format for later work

Record date, tool, requested task, changed files, commands/checks actually run,
their results, remaining concerns, and credit usage if visible. Keep failed or
interrupted checks explicit. Add a brief explanation of the important code choices.

## November 25, 2026: first local Space prototype

- Tool: Codex. Afia authorized coding while awaiting Kiro credits.
- Added React/TypeScript/Vite setup, original SVG illustrations, the Space scene,
  two experiments, a three-question quiz, a prepared library guide, and tests.
- Added original science explanations with NASA source links. Source checks were
  performed by Codex, not represented as a human factual review.
- Added CODE-GUIDE.md and revised the README, spec, task status, content notes,
  submission checklist, and next Kiro prompt to match the actual implementation.
- The library guide is explicitly labeled as prepared answers, not live AI.
  It bounds input and validates known source/activity IDs. No provider is enabled.
- Important choices: pure science helpers allow checks without a browser; the
  slider and pointer drag share one angle; content and sources are separate from
  rendering; original SVG and system fonts avoid heavy graphics and font downloads.
- `npm install --no-audit --no-fund`: completed with 44 packages.
- First `npm run build`: failed with TS2882 on the stylesheet import. Added the
  Vite client type declaration. Subsequent type check and production build passed.
- First test run: 12 passed. Removed a low-value quiz data-shape test. Final
  `npm test`: 11 passed in two files. Checks include phase names/fractions,
  the area and orientation of the drawn Moon polygon, rotation/drag geometry,
  unsupported questions, reading levels, and invalid source/activity references.
- Final `npm run build`: passed. No deployed URL or live AI is claimed.
- Browser checks with the local app: topic selection, keyboard Moon-to-Sun
  selection, both pointer drags, Moon slider keyboard End, full/new/quarter views,
  resets, day/night states, source links, guide reading levels and unsupported
  input, guide-to-lab-to-quiz path, incorrect/correct answer explanations,
  a 2-of-3 final score, and quiz restart passed.
- Inspected 390px and 320px phone layouts. Fixed overlapping planet labels and
  checked that document width equals viewport width at both sizes. Restored the
  normal browser viewport after checking. Reduced-motion CSS is present; a full
  assistive-technology audit and human factual review remain pending.
- The Documents starter copy contained iCloud dataless placeholders and could
  not be reliably read. Used a fresh resident clone of the public starter repo
  for this work; left the original folder intact. The clone started at d7c1c0b.
- Kiro work on Discovery Island: none yet. Kiro credits used for this work: zero.
  Paid inference, public deployment, and final submission: not performed.
