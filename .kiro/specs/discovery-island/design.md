# Design

Status: proposed architecture for Kiro to review during implementation.

## Experience

Open directly into a welcoming Space scene. Three objects invite discovery.
A compact discovery panel shows a child's selected topic without covering the
whole world. An Explore / Try / Ask / Play structure makes the next action clear.
Use short explanations, strong contrast, and optional decorative motion.

Day/night and Moon phases open focused activity panels with a slider, a diagram,
an explanation, and Reset. A labeled Earth-view inset makes the phases readable.
The guide and game link into these same activities instead of duplicating them.

## Proposed files

- src/app/: the app shell and navigation state.
- src/worlds/space/: illustrated scene, hotspot panels, and activity components.
- src/science/: pure geometry and illumination calculations, with documented units.
- src/content/: checked, original explanation text and source metadata.
- src/guide/: client interface and labeled curated fallback.
- api/guide.ts: a future server endpoint, adapted to the chosen deployment host.
- tests/: meaningful science, guide validation, and key interaction checks.

The actual scaffold can adjust these folders if that simplifies the app. Explain
the choice before adding layers. Do not add an abstraction for only one caller.

## State and science

Keep selection, activity position, reading level, and game progress as separate
state. Derive visual illumination from one calculation rather than keeping
contradictory copies in component state. Document viewpoint, angle conventions,
and the starting geometry for both experiments before coding the formulas.

Check Moon views at the named reference positions and check day/night at known
rotation positions. Add a short explanation that the diagrams simplify scale.

## Content and guide

Each content passage has a stable ID, an original summary, its source URL, and
the reviewed claims it supports. The initial source candidates and review process
are in docs/CONTENT.md. Nothing is marked reviewed until someone checks it.

The server retrieves relevant checked passages, sends a bounded context plus a
reading-level instruction to the selected model, and validates the structured
answer. Only supported source IDs and existing activity IDs reach the client.
The AI response is untrusted text, rendered without executing HTML or code.

No provider is configured at setup. Add the live guide only after choosing the
provider and budget. Bundle a curated guide with a clear fallback label for local
development and outages. It must never be described as a live AI response.

## Verification and delivery

Use type checking and a production build once the scaffold exists. Test the
science calculations at reference positions, guide source/activity validation,
timeouts, and the core child-facing flow. Inspect mobile layout, keyboard access,
reduced motion, and responsiveness in a browser. Keep a short reproducible demo.

Hosting is a later task. Keep the UI portable and adapt the small backend when a
host is chosen. Document required variables with empty placeholders, never keys.
