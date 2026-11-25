import {
  passages,
  sources,
  type ActivityId,
  type ReadingLevel,
  type SourceId,
} from "../content/library";

export type GuideAnswer = {
  title: string;
  text: string;
  sourceIds: SourceId[];
  activityId?: ActivityId;
  supported: boolean;
};

/** Validate references before the UI turns them into links. Reuse for future AI. */
export function validReferences(
  sourceIds: readonly string[],
  activityId?: string,
): boolean {
  return (
    sourceIds.length > 0 &&
    sourceIds.every((id) => Object.hasOwn(sources, id)) &&
    (activityId === undefined ||
      activityId === "day-night" ||
      activityId === "moon-phases")
  );
}

// A small, explicit question matcher, not a language model or a web search.
export function answerFromLibrary(
  question: string,
  level: ReadingLevel,
): GuideAnswer {
  const text = question.trim().toLowerCase();
  const unsupported = (): GuideAnswer => ({
    title: "Let’s explore what’s in our library.",
    supported: false,
    sourceIds: [],
    text: "I have prepared answers about day and night, Moon phases, moonlight, and Earth’s year. I don’t have a checked answer for that question yet. Try one of the questions below.",
  });
  if (!text || text.length > 300) return unsupported();
  let id: (typeof passages)[number]["id"] | undefined;
  // Require a question about one of the supported ideas, not just “Moon”.
  if (
    /\bmoon(?:light)?\b/.test(text) &&
    /\b(light|shine|glow|reflect|bright)\b/.test(text) &&
    !/\b(phase|shape|full|quarter|crescent|shadow)\b/.test(text)
  )
    id = "reflected-light";
  else if (
    /\bmoon\b/.test(text) &&
    /\b(phase|phases|shape|shapes|full|quarter|crescent|shadow)\b/.test(text)
  )
    id = "moon-view";
  else if (
    /\bearth\b/.test(text) &&
    /\b(year|orbit|orbits|around)\b/.test(text)
  )
    id = "earth-year";
  else if (
    /\b(night|nighttime|daytime)\b/.test(text) ||
    (/\bearth\b/.test(text) &&
      /\b(spin|spins|turn|turns|rotate|rotation|day)\b/.test(text))
  )
    id = "earth-rotation";
  if (!id) return unsupported();
  const entry = passages.find((p) => p.id === id)!;
  if (!validReferences(entry.sourceIds, entry.activityId)) return unsupported();
  return {
    title: entry.title,
    text: entry[level],
    sourceIds: [...entry.sourceIds],
    activityId: entry.activityId,
    supported: true,
  };
}
