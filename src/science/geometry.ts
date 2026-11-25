/** Degrees increase counterclockwise in a top view. Sun is fixed on the right. */
export function normalizeAngle(degrees: number): number {
  if (!Number.isFinite(degrees)) throw new RangeError("Angle must be finite.");
  return ((degrees % 360) + 360) % 360;
}

export function position(degrees: number, radius: number, cx = 0, cy = 0) {
  const radians = (normalizeAngle(degrees) * Math.PI) / 180;
  // SVG y grows downward, so subtract sin to draw counterclockwise motion.
  return {
    x: cx + radius * Math.cos(radians),
    y: cy - radius * Math.sin(radians),
  };
}

export function angleFromPoint(x: number, y: number, cx: number, cy: number) {
  return normalizeAngle((Math.atan2(cy - y, x - cx) * 180) / Math.PI);
}

export function daylight(
  degrees: number,
): "Day" | "Night" | "Sunrise" | "Sunset" {
  const a = normalizeAngle(degrees);
  if (Math.abs(a - 90) < 0.001) return "Sunset";
  if (Math.abs(a - 270) < 0.001) return "Sunrise";
  return Math.cos((a * Math.PI) / 180) > 0 ? "Day" : "Night";
}

export function illuminatedFraction(degrees: number): number {
  return (1 - Math.cos((normalizeAngle(degrees) * Math.PI) / 180)) / 2;
}

export function moonPhase(degrees: number): string {
  const a = normalizeAngle(degrees);
  if (a === 0) return "New Moon";
  if (a === 90) return "First quarter";
  if (a === 180) return "Full Moon";
  if (a === 270) return "Last quarter";
  if (a < 90) return "Waxing crescent";
  if (a < 180) return "Waxing gibbous";
  if (a < 270) return "Waning gibbous";
  return "Waning crescent";
}

/** Original SVG polygon for the bright part as seen from Earth, northern view.
 * At each height, the circle edge is sqrt(r²-y²). The terminator is that edge
 * multiplied by cos(angle), giving a thin crescent, half disc, or full disc.
 */
export function phasePolygon(degrees: number, radius = 60): string {
  const a = normalizeAngle(degrees);
  const waxing = a <= 180;
  const side = waxing ? 1 : -1;
  const cos = Math.cos((a * Math.PI) / 180);
  const edge: string[] = [];
  const boundary: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const y = -radius + (2 * radius * i) / 40;
    const x = Math.sqrt(Math.max(0, radius * radius - y * y));
    edge.push(`${side * x},${y}`);
    boundary.unshift(`${side * cos * x},${y}`);
  }
  return [...edge, ...boundary].join(" ");
}
