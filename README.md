# Discovery Island

An Encarta Kids-inspired learning world where children explore illustrated scenes,
ask questions, and discover scientific ideas through experiments and games.

**Status: project setup and build instructions only. The app is not implemented or deployed yet.**
Discovery Island is a working name. This is a new, independent project for
[Kiroween 2026](https://kiroween.devpost.com/) in the **Resurrection** category.

## What we are bringing back

Microsoft's discontinued Encarta Kids experience made an encyclopedia feel like
a place children could explore through pictures, connected subjects, and games.
We are rebuilding that discovery experience with new code and original or
properly licensed content, rather than copying Microsoft's software or articles.

The modern addition is a source-grounded AI guide that connects a child's own
question to an explanation at their chosen reading level and an activity they
can try. The illustrated scenes and games revive Encarta's approach; they are
not presented as new inventions.

## First version: Space

- Explore one illustrated scene with clickable Earth, Moon, and Sun.
- Rotate Earth to investigate day and night.
- Move the Moon around Earth to investigate Moon phases.
- Complete one short learning game with explanations for each answer.
- Ask a guide a Space question, see its sources, and open a related activity.

The activities will be built and checked ahead of time. AI will select from those
activities instead of generating executable code or new simulations.

## Building with Kiro

Start with [KIRO-START.md](KIRO-START.md). The root [.kiro](https://github.com/afiapoks/discovery-island/tree/main/.kiro) directory
contains the product and development guidance and a draft implementation spec.
These initial documents were prepared with Codex; Kiro has not implemented this
project yet. Actual Kiro work and review results will be recorded in
[docs/BUILD-LOG.md](docs/BUILD-LOG.md).

The proposed stack is React, TypeScript, and Vite, using SVG and CSS for lightweight
interactive scenes. A small server endpoint will protect any AI provider key.
Run and deployment instructions will be added after the scaffold exists and is
verified. There are no app installation commands to run at this setup stage.

## Hackathon submission

The [submission checklist](docs/SUBMISSION.md) tracks the public GitHub repo,
root `.kiro` directory, working app URL, public YouTube demo under three minutes,
and write-up explaining actual Kiro usage. Target submission: December 2.
Official deadline: **December 4, 2026, 4 PM Central / 2 PM Pacific**.

## License and content

Project code is licensed under [MIT](LICENSE). External assets and source material
retain their own licenses and must be attributed in [docs/CONTENT.md](docs/CONTENT.md).
Encarta is referenced as inspiration; this project is not affiliated with Microsoft.
