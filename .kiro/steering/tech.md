---
inclusion: always
---

# Technical approach

- Proposed client: React, TypeScript, Vite, SVG, and CSS.
- Prefer small dependencies and ordinary HTML controls over a game engine or 3D.
- Keep science calculations separate from React components so they can be checked.
- Support mouse, touch, and keyboard. Sliders must accompany dragging controls.
- Animate with browser-friendly transforms; pause work when the view is inactive.
- Use bundled curated content for facts and the learning game.
- Record each source, reviewed claim, license decision, and asset attribution.
- A future /api/guide endpoint keeps AI credentials on the server.
- Never expose API secrets in browser code, VITE_* variables, or the repository.
- Choose a provider and spending limit before activating paid model calls.
- Bound input, retrieved passages, output, and server requests. Do not retry forever.
- Guide responses use verified source IDs and allowlisted activity IDs.
- Display source links. Reject invented source IDs and unsupported activity IDs.
- If the model is unavailable, clearly label a curated guide fallback.
- Answer unsupported topics honestly and invite exploration of the available world.
- Do not store children's questions or require their names, emails, or accounts.
- Verify a configured type check, a build, and meaningful experiment/guide tests.
- Do not let a cache, cloud file placeholder, or unending command block a session.
  Investigate it and report the actual check status without claiming success.
