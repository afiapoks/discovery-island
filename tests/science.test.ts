import { describe, expect, it } from "vitest";
import {
  angleFromPoint,
  daylight,
  illuminatedFraction,
  moonPhase,
  normalizeAngle,
  phasePolygon,
  position,
} from "../src/science/geometry";

describe("day/night, Sun fixed on the right", () => {
  it("a place crosses noon, sunset, midnight, and sunrise in that order", () => {
    expect([0, 90, 180, 270, 360].map(daylight)).toEqual([
      "Day",
      "Sunset",
      "Night",
      "Sunrise",
      "Day",
    ]);
    expect(daylight(45)).toBe("Day");
    expect(daylight(135)).toBe("Night");
    expect(daylight(225)).toBe("Night");
    expect(daylight(315)).toBe("Day");
  });
  it("drag and slider share the counterclockwise angle convention", () => {
    for (const angle of [0, 45, 90, 180, 270, 315]) {
      const p = position(angle, 100, 180, 160);
      expect(angleFromPoint(p.x, p.y, 180, 160)).toBeCloseTo(angle);
    }
  });
  it("wraps positions and refuses invalid numeric input", () => {
    expect(normalizeAngle(-90)).toBe(270);
    expect(normalizeAngle(720)).toBe(0);
    expect(() => normalizeAngle(Infinity)).toThrow(RangeError);
    expect(() => normalizeAngle(NaN)).toThrow(RangeError);
  });
});

function polygonArea(points: string): number {
  const vertices = points
    .split(" ")
    .map((point) => point.split(",").map(Number));
  return (
    Math.abs(
      vertices.reduce((area, [x, y], i) => {
        const [nextX, nextY] = vertices[(i + 1) % vertices.length];
        return area + x * nextY - nextX * y;
      }, 0),
    ) / 2
  );
}

describe("Moon phases and the actual drawn illuminated area", () => {
  it("uses new, quarter, full, last quarter at the reference positions", () => {
    expect([0, 90, 180, 270].map(moonPhase)).toEqual([
      "New Moon",
      "First quarter",
      "Full Moon",
      "Last quarter",
    ]);
    expect(
      [0, 90, 180, 270].map((a) => Math.round(illuminatedFraction(a) * 100)),
    ).toEqual([0, 50, 100, 50]);
  });
  it("grows through waxing phases and shrinks through waning phases", () => {
    expect([45, 135, 225, 315].map(moonPhase)).toEqual([
      "Waxing crescent",
      "Waxing gibbous",
      "Waning gibbous",
      "Waning crescent",
    ]);
    expect(illuminatedFraction(45)).toBeLessThan(illuminatedFraction(135));
    expect(illuminatedFraction(225)).toBeGreaterThan(illuminatedFraction(315));
  });
  it("the SVG bright area matches the physical fraction, including both crescents", () => {
    for (const angle of [0, 45, 90, 135, 180, 225, 270, 315, 360]) {
      expect(
        polygonArea(phasePolygon(angle, 60)) / (Math.PI * 60 ** 2),
      ).toBeCloseTo(illuminatedFraction(angle), 2);
    }
  });
  it("quarter phases illuminate opposite sides in the northern view", () => {
    const first = phasePolygon(90)
      .split(" ")
      .map((p) => Number(p.split(",")[0]));
    const last = phasePolygon(270)
      .split(" ")
      .map((p) => Number(p.split(",")[0]));
    expect(Math.min(...first)).toBeGreaterThanOrEqual(-0.00001);
    expect(Math.max(...last)).toBeLessThanOrEqual(0.00001);
  });
});
