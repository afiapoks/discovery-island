export type TopicId = "earth" | "moon" | "sun";
export type ActivityId = "day-night" | "moon-phases";
export type ReadingLevel = "short" | "detail";
export type SourceId =
  | "earth-facts"
  | "day-night"
  | "moon-phases"
  | "sun-facts";

export const sources: Record<
  SourceId,
  { title: string; url: string; checked: string }
> = {
  "earth-facts": {
    title: "NASA: Facts about Earth",
    url: "https://science.nasa.gov/earth/facts/",
    checked: "2026-11-25",
  },
  "day-night": {
    title: "NASA Space Place: Earth’s spin and tilt",
    url: "https://spaceplace.nasa.gov/seasons/en/",
    checked: "2026-11-25",
  },
  "moon-phases": {
    title: "NASA: Moon phases",
    url: "https://science.nasa.gov/moon/moon-phases/",
    checked: "2026-11-25",
  },
  "sun-facts": {
    title: "NASA: Sun facts",
    url: "https://science.nasa.gov/sun/facts/",
    checked: "2026-11-25",
  },
};

export const topics: Record<
  TopicId,
  {
    name: string;
    tag: string;
    title: string;
    short: string;
    detail: string;
    question: string;
    source: SourceId;
    activity: ActivityId;
  }
> = {
  earth: {
    name: "Earth",
    tag: "Our spinning home",
    title: "Your world is always turning.",
    short:
      "Earth spins. Your part of Earth has daytime when it faces the Sun. As it turns away from the Sun, it becomes nighttime.",
    detail:
      "Earth turns around its axis, an imaginary line through its center. That rotation carries places into and out of sunlight. Earth also travels around the Sun, but that journey takes about a year.",
    question: "Why does nighttime happen?",
    source: "day-night",
    activity: "day-night",
  },
  moon: {
    name: "Moon",
    tag: "A changing view",
    title: "One Moon. So many shapes.",
    short:
      "The Moon reflects sunlight. As it travels around Earth, we see different amounts of its bright half. Those changing views are Moon phases.",
    detail:
      "Sunlight lights half the Moon. From Earth, our view of that bright half changes as the Moon orbits us. Ordinary phases happen because of our viewing angle, not because Earth’s shadow covers the Moon.",
    question: "Why does the Moon change shape?",
    source: "moon-phases",
    activity: "moon-phases",
  },
  sun: {
    name: "Sun",
    tag: "Our nearest star",
    title: "Meet the light behind it all.",
    short:
      "The Sun is a star that gives us light and heat. It lights Earth and the Moon. The Moon reflects that light, like a ball beside a lamp.",
    detail:
      "The Sun sends energy into space. It shines with its own light, while the Moon reflects sunlight. Watching where that light lands helps us understand both day and night and Moon phases.",
    question: "Does the Moon make its own light?",
    source: "sun-facts",
    activity: "moon-phases",
  },
};

export const passages = [
  {
    id: "earth-rotation",
    title: "Why we have day and night",
    sourceIds: ["day-night", "earth-facts"],
    activityId: "day-night",
    short: topics.earth.short,
    detail: topics.earth.detail,
  },
  {
    id: "moon-view",
    title: "Why the Moon seems to change shape",
    sourceIds: ["moon-phases"],
    activityId: "moon-phases",
    short: topics.moon.short,
    detail: topics.moon.detail,
  },
  {
    id: "reflected-light",
    title: "Where moonlight comes from",
    sourceIds: ["moon-phases", "sun-facts"],
    activityId: "moon-phases",
    short:
      "The Moon does not make its own light. Sunlight hits it and bounces toward us. That reflected light is what we call moonlight.",
    detail:
      "The Sun shines with its own light. The Moon’s surface reflects some sunlight into space, including toward Earth. Its bright part changes in our view as the Moon travels around us.",
  },
  {
    id: "earth-year",
    title: "A day and a year are different journeys",
    sourceIds: ["earth-facts"],
    activityId: "day-night",
    short:
      "Earth spins to give us day and night. Earth also travels around the Sun. One trip around the Sun takes about one year.",
    detail:
      "Rotation means spinning around an axis. Orbiting means traveling around another object. Earth does both: daily rotation changes our view of sunlight, while an orbit around the Sun takes about 365 days.",
  },
] as const;

export const quizQuestions: {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  activity: ActivityId;
}[] = [
  {
    question: "What makes your part of Earth change from day to night?",
    options: [
      "Earth turns away from sunlight.",
      "The Sun switches its light off.",
      "Earth completes a whole trip around the Sun.",
    ],
    correct: 0,
    explanation:
      "Earth keeps turning. Your place moves out of sunlight while other places turn into it. A trip around the Sun takes about a year.",
    activity: "day-night",
  },
  {
    question: "Where does moonlight come from?",
    options: [
      "The Moon has a giant lamp inside.",
      "The Moon reflects light from the Sun.",
      "Earth lights the whole Moon with streetlights.",
    ],
    correct: 1,
    explanation:
      "The Moon reflects sunlight. It does not shine with its own light like the Sun does.",
    activity: "moon-phases",
  },
  {
    question: "Why do we usually see different Moon phases?",
    options: [
      "The Moon grows and shrinks.",
      "Earth’s shadow covers it every night.",
      "Our view of the Moon’s bright half changes.",
    ],
    correct: 2,
    explanation:
      "The Moon travels around Earth, so we see different amounts of its sunlit half. Earth’s shadow can cause a lunar eclipse, but it is not the cause of ordinary phases.",
    activity: "moon-phases",
  },
];
