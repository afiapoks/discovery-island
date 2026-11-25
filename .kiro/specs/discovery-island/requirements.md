# Requirements

Status: draft supplied to Kiro for review. No implementation is complete.

## 1. Visual discovery

As a child, I want to explore a picture and choose what interests me.

- The first world shows Earth, Moon, and Sun in an original illustrated Space scene.
- Each object has a named, focusable hotspot that works with touch and keyboard.
- Selecting an object opens a short explanation, a source link, and related activity.
- The scene and its explanation remain usable on a small screen and a slow laptop.
- Controls use plain labels and visible focus. Reduced motion pauses decoration.

## 2. Day and night

As a child, I want to rotate Earth and see why a location changes from day to night.

- A drag control and a keyboard-accessible slider change Earth's rotation.
- Sunlight direction stays consistent and a marked location changes illumination.
- The explanation identifies Earth's rotation as the cause of daily day/night changes.
- The activity does not suggest that one revolution around the Sun makes one day.
- Reset restores the starting state. Diagram sizes and distances are not to scale.

## 3. Moon phases

As a child, I want to move the Moon and see how its visible illuminated part changes.

- A drag control and slider change the Moon's orbital position.
- The scene distinguishes the orbit overview from the Moon as viewed from Earth.
- Reference positions produce new, quarter, and full Moon views consistently.
- Explanations identify viewing geometry and sunlight, not normal Earth shadow,
  as the cause of Moon phases.
- Reset restores the starting position and the diagram is marked not to scale.

## 4. Learning game

As a child, I want to use what I learned and understand an incorrect answer.

- One short game contains three checked questions about the two experiments.
- Every answer receives a friendly explanation rather than just a score.
- Relevant activity links let a child investigate an answer and try again.
- The game is accessible by keyboard and can be restarted without an account.

## 5. Source-grounded guide

As a child, I want to ask a Space question and receive help that I can investigate.

- The guide uses a small reviewed reference library and a selected reading level.
- Responses show source links and may suggest one of the existing activities.
- Source and activity IDs are validated against the known library and app routes.
- The prompt asks the model to stay within supplied material and explain uncertainty.
- Questions beyond the library receive an honest scope message, not invented facts.
- A labeled curated fallback remains useful without a provider or network connection.
- Model failures do not break the experiments or the game.
- Provider credentials stay server-side. Requests have limits and timeouts.
- No child account or persistent question history is required.
- Human review includes factual spot checks; citations alone do not prove correctness.

## 6. Delivery

- Kiro implements the application from these instructions, with truthful provenance.
- The public repository contains the source, assets, setup instructions, MIT license,
  root .kiro directory, and third-party attribution.
- The final app has a working URL and a coherent explore-to-quiz demo path.
- The public YouTube demo is under three minutes and shows the actual working app.
- The write-up distinguishes actual Kiro usage from Codex setup and review.
