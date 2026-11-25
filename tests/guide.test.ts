import { describe, expect, it } from "vitest";
import { passages } from "../src/content/library";
import { answerFromLibrary, validReferences } from "../src/guide/libraryGuide";

describe("prepared guide, no model calls", () => {
  it("connects supported questions to real sources and an existing activity", () => {
    for (const question of [
      "Why does nighttime happen?",
      "Why does the Moon change shape?",
      "Does the Moon make its own light?",
      "Why does Earth have a year?",
    ]) {
      const answer = answerFromLibrary(question, "short");
      expect(answer.supported).toBe(true);
      expect(validReferences(answer.sourceIds, answer.activityId)).toBe(true);
    }
  });
  it("changes reading detail without changing the source or activity", () => {
    const short = answerFromLibrary("Why does the Moon change shape?", "short");
    const detail = answerFromLibrary(
      "Why does the Moon change shape?",
      "detail",
    );
    expect(short.text).not.toBe(detail.text);
    expect(short.sourceIds).toEqual(detail.sourceIds);
    expect(short.activityId).toBe(detail.activityId);
  });
  it("does not invent answers or sources for unsupported or oversized input", () => {
    for (const question of [
      "",
      "How many craters are on the Moon?",
      "What medicine should I take?",
      "x".repeat(301),
    ]) {
      const answer = answerFromLibrary(question, "short");
      expect(answer.supported).toBe(false);
      expect(answer.sourceIds).toEqual([]);
      expect(answer.activityId).toBeUndefined();
    }
  });
  it("rejects unknown references, inherited names, and executable route strings", () => {
    expect(validReferences(["invented-source"], "day-night")).toBe(false);
    expect(validReferences(["constructor"], "day-night")).toBe(false);
    expect(validReferences([], "day-night")).toBe(false);
    expect(validReferences(["moon-phases"], "javascript:alert(1)")).toBe(false);
    for (const passage of passages)
      expect(validReferences(passage.sourceIds, passage.activityId)).toBe(true);
  });
});
