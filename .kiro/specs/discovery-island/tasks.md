# Implementation tasks

All tasks are initially unchecked. Work on one task per authorized Kiro session.

- [ ] 1. Review the draft spec and scaffold the visual Space explorer.
  - Create a minimal React/TypeScript/Vite app and configure type check/build.
  - Show original Earth, Moon, Sun illustrations and three accessible hotspots.
  - Verify the scene, keyboard selection, type check, and production build.
  - Explain the main files and record actual results in the build log.

- [ ] 2. Review sources and write the first content library.
  - Check facts and rights against authoritative sources in docs/CONTENT.md.
  - Write original explanations, source metadata, and three game questions.
  - Mark reviewed material accurately and connect topic panels to source links.

- [ ] 3. Implement the day/night experiment.
  - Document geometry; add pure calculations, slider, diagram, labels, and Reset.
  - Verify known positions, keyboard operation, and the rotation explanation.

- [ ] 4. Implement the Moon phases experiment.
  - Document geometry; add an Earth-view inset, orbit control, labels, and Reset.
  - Verify named phases and distinguish phases from Earth-shadow eclipses.

- [ ] 5. Implement the learning game and connected discovery flow.
  - Add checked questions, explanations, retry, and links to the two activities.
  - Verify a complete explorer-to-experiment-to-game interaction.

- [ ] 6. Implement the guide with checked sources and explicit fallback.
  - Choose a provider and budget before activating live inference.
  - Add the server endpoint, bounded requests, source/activity validation,
    chosen reading level, timeout handling, and a labeled curated fallback.
  - Test unsupported questions, invalid IDs, model failures, and factual examples.

- [ ] 7. Verify the complete experience and deploy.
  - Check mobile layout, keyboard navigation, reduced motion, and performance.
  - Run relevant tests and production build; inspect the deployed demo path.
  - Add verified run instructions, environment placeholders, and working app URL.

- [ ] 8. Prepare the submission.
  - Complete docs/SUBMISSION.md using the final working implementation.
  - Record a public YouTube demo under three minutes and the actual Kiro write-up.
  - Check links, licenses, root .kiro tracking, and the final deadline.
