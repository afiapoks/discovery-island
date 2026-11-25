# Discovery Island

An Encarta Kids-inspired learning world where children explore illustrated scenes,
ask questions, and discover scientific ideas through experiments and games.

**Status: working local Space prototype, built with Codex. Live AI, actual Kiro development, and public deployment are still pending.**
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
The planning documents and first local prototype were prepared with Codex.
Kiro has not implemented this project yet. Root .kiro files alone do not establish
actual Kiro usage for the submission. Actual Kiro work and review results will be recorded in
[docs/BUILD-LOG.md](docs/BUILD-LOG.md).

The prototype uses React, TypeScript, Vite, and original SVG/CSS illustrations.
It includes both experiments, a three-question quiz, and a clearly labeled
**Library guide** with prepared explanations at two reading levels. That guide
matches supported questions to bundled passages. It is not a live AI model.

## Run it locally

Use Node.js 22.12 or newer (tested with 22.20.0) and npm:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5180/. No API keys or Kiro credits are needed to run it.
The development server uses your own computer; this is not a public judge URL.

```sh
npm test
npm run build
npm run preview
```

The production preview is at http://127.0.0.1:4180/. Stop either server with Ctrl+C.
See [docs/CODE-GUIDE.md](docs/CODE-GUIDE.md) for beginner explanations of the code.
The app uses system fonts and bundled original graphics, with no analytics,
account requirement, persistent question history, or external inference requests.

## Hackathon submission

The [submission checklist](docs/SUBMISSION.md) tracks the public GitHub repo,
root `.kiro` directory, working app URL, public YouTube demo under three minutes,
and write-up explaining actual Kiro usage. Target submission: December 2.
Official deadline: **December 4, 2026, 4 PM Central / 2 PM Pacific**.

## License and content

Project code is licensed under [MIT](LICENSE). External assets and source material
retain their own licenses and must be attributed in [docs/CONTENT.md](docs/CONTENT.md).
Encarta is referenced as inspiration; this project is not affiliated with Microsoft.
