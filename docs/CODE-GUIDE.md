# How the first prototype works

## Start with the screen

`src/App.tsx` chooses which screen to show: Explore, Try a lab, Ask, or Play.
React's `useState` remembers small pieces of information, such as the selected
planet and reading level. When you click a button, we update that value and React
redraws the relevant part of the screen. We do not rebuild the entire app by hand.

The experiments and quiz have their own components because their controls and
state belong together. There is no need for a complicated navigation library
for four screens in this first version.

## Keep the science separate from the picture

`src/science/geometry.ts` contains functions that do not depend on React or the
browser. Give a function an angle and it returns a result. That makes it possible
to test the science without opening a window or clicking a slider.

In both experiments, the Sun stays on the right. Zero degrees points right;
90 degrees points up; 180 points left; 270 points down. SVG coordinates grow
downward, so we subtract the vertical part when drawing counterclockwise motion.
The slider and drag control both update this same angle. They cannot silently
disagree about where the Moon or the marked place should be.

For day/night, a place facing right is in sunlight. A place facing left is in
darkness. The halfway crossings are sunrise and sunset in this simplified model.
We are teaching Earth's rotation, not predicting the local sunrise in a real town.

For phases, the bright fraction is `(1 - cos(angle)) / 2`. It gives 0 at new Moon,
one half at a quarter Moon, and 1 at full Moon. The Earth-view picture uses that
same geometry to draw the bright part. The tests check both the number and the
area of the actual SVG polygon, so a correct label cannot hide a wrong picture.

## Give facts a home

`src/content/library.ts` holds original explanations, two reading levels, source
links, and quiz questions. Stable source IDs let us connect a passage to a real
NASA URL. Keeping the text here makes it easier to review or improve an
explanation without changing the drawing code. See CONTENT.md for the source
checks and the limits of the simplified diagrams.

## What the guide does today

`src/guide/libraryGuide.ts` is a small question matcher. It picks a related,
prepared passage from our library. It does not call an AI model or search the web.
That is why the screen says Library guide and Prepared answers.

Unknown topics get an honest scope message. Source and activity IDs are checked
against our known list before they become links. A future AI endpoint can reuse
this check, but will also need server-side request limits, a timeout, output
validation, and factual review. That live endpoint is not implemented yet.

Questions stay in the current page's memory and disappear when it reloads.
There are no accounts, stored question histories, API keys, or inference charges.

## Why use SVG and ordinary controls?

SVG pictures are shapes and paths, not large downloaded images. They stay sharp
when the layout changes size. Plain buttons and sliders also give us keyboard
access without building custom controls for every interaction. The illustrations
are in `src/components/Illustrations.tsx`; their styling is in `src/styles.css`.

## Where Kiro fits next

Codex wrote this first prototype after Afia authorized coding while the grant was
pending. No Kiro session or credits were used. Kiro still needs to make a meaningful,
documented application contribution before the hackathon submission. The next
prepared prompt in KIRO-START.md starts from the existing work and tells Kiro to
record what it actually changes.
