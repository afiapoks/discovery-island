import { useId, useState, type PointerEvent } from "react";
import {
  angleFromPoint,
  daylight,
  illuminatedFraction,
  moonPhase,
  phasePolygon,
  position,
} from "../science/geometry";
import { sources, type ActivityId } from "../content/library";
import { SunArt } from "./Illustrations";

function dragAngle(
  event: PointerEvent<SVGSVGElement>,
  cx: number,
  cy: number,
): number | undefined {
  const svg = event.currentTarget;
  const matrix = svg.getScreenCTM();
  if (!matrix) return;
  // Convert pointer coordinates into this SVG's coordinates, even on mobile.
  const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(
    matrix.inverse(),
  );
  if (Math.hypot(point.x - cx, point.y - cy) < 12) return;
  return Math.round(angleFromPoint(point.x, point.y, cx, cy));
}

export default function Experiments({
  activity,
  onChange,
  onPlay,
}: {
  activity: ActivityId;
  onChange: (id: ActivityId) => void;
  onPlay: () => void;
}) {
  const [earthAngle, setEarthAngle] = useState(0);
  const [moonAngle, setMoonAngle] = useState(90);
  const clip = useId().replace(/:/g, "");
  const earthMode = activity === "day-night";
  const angle = earthMode ? earthAngle : moonAngle;
  const setAngle = earthMode ? setEarthAngle : setMoonAngle;
  const marker = position(angle, earthMode ? 63 : 115, 180, 160);
  const state = earthMode ? daylight(angle) : moonPhase(angle);
  const source = earthMode ? sources["day-night"] : sources["moon-phases"];
  const update = (event: PointerEvent<SVGSVGElement>) => {
    const result = dragAngle(event, 180, 160);
    if (result !== undefined) setAngle(result);
  };
  return (
    <section className="activity-page" aria-labelledby="activity-title">
      <div className="section-top">
        <div>
          <p className="eyebrow">The little Space lab</p>
          <h2 id="activity-title">Move it. Notice what changes.</h2>
        </div>
        <div className="segmented" aria-label="Choose an experiment">
          <button
            aria-pressed={earthMode}
            onClick={() => onChange("day-night")}
          >
            Day & night
          </button>
          <button
            aria-pressed={!earthMode}
            onClick={() => onChange("moon-phases")}
          >
            Moon phases
          </button>
        </div>
      </div>
      <div className="experiment-grid">
        <div className="experiment-board">
          <span className="board-label">
            {earthMode
              ? "Looking down above Earth’s North Pole"
              : "Orbit overview, looking down from above"}
          </span>
          <svg
            className="interactive-diagram"
            viewBox="0 0 460 320"
            role="img"
            aria-label={
              earthMode
                ? `Your marked place is at ${state.toLowerCase()}. Sunlight comes from the right.`
                : `${state}. Move the Moon around Earth. Sunlight comes from the right.`
            }
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              update(e);
            }}
            onPointerMove={(e) => {
              if (e.currentTarget.hasPointerCapture(e.pointerId)) update(e);
            }}
            onPointerUp={(e) => {
              if (e.currentTarget.hasPointerCapture(e.pointerId))
                e.currentTarget.releasePointerCapture(e.pointerId);
            }}
          >
            <defs>
              <clipPath id={clip}>
                <circle cx="180" cy="160" r={earthMode ? 76 : 34} />
              </clipPath>
            </defs>
            <g stroke="#efcf81" opacity=".55" strokeWidth="2">
              {[115, 160, 205].map((y) => (
                <g key={y}>
                  <path d={`M330 ${y}H285`} />
                  <path d={`M293 ${y - 5}l-8 5 8 5`} fill="none" />
                </g>
              ))}
            </g>
            <g transform="translate(325 100)">
              <SunArt size={120} />
            </g>
            <text x="382" y="230" textAnchor="middle" fill="#f6d988">
              Sunlight
            </text>
            {!earthMode && (
              <circle
                cx="180"
                cy="160"
                r="115"
                fill="none"
                stroke="#8994b0"
                strokeDasharray="5 8"
              />
            )}
            <circle cx="180" cy="160" r={earthMode ? 76 : 34} fill="#83c9e9" />
            {earthMode && (
              <g
                transform={`rotate(${-angle} 180 160)`}
                clipPath={`url(#${clip})`}
              >
                <path
                  d="M123 119l28-20 26 8 4 25-27 15-23-11zM185 161l33-2 22 28-33 25-21-22z"
                  fill="#79b891"
                />
              </g>
            )}
            <path
              d={
                earthMode
                  ? "M180 84a76 76 0 0 0 0 152z"
                  : "M180 126a34 34 0 0 0 0 68z"
              }
              fill="#111a35"
              opacity=".78"
            />
            {earthMode ? (
              <g>
                <circle
                  cx={marker.x}
                  cy={marker.y}
                  r="10"
                  fill="#f8d277"
                  stroke="#fff5d8"
                  strokeWidth="3"
                />
                <text x="180" y="274" textAnchor="middle" fill="#f6edd9">
                  Yellow dot = your place on Earth
                </text>
              </g>
            ) : (
              <g>
                <circle cx={marker.x} cy={marker.y} r="19" fill="#e9e6da" />
                <path
                  d={`M${marker.x} ${marker.y - 19}a19 19 0 0 0 0 38z`}
                  fill="#525a73"
                />
                <text x="180" y="216" textAnchor="middle" fill="#d9e2f6">
                  Earth
                </text>
              </g>
            )}
          </svg>
          <p className="diagram-tip">
            Drag on the picture, or use the slider below.
          </p>
          <label className="slider-label" htmlFor="orbit-slider">
            {earthMode ? "Turn Earth" : "Move the Moon"} <span>{angle}°</span>
          </label>
          <input
            id="orbit-slider"
            type="range"
            min="0"
            max="360"
            step="1"
            value={angle}
            aria-valuetext={`${angle} degrees, ${state}`}
            onChange={(e) => setAngle(Number(e.target.value))}
          />
          <div className="position-buttons">
            {(earthMode
              ? ["Noon", "Sunset", "Midnight", "Sunrise"]
              : ["New", "First quarter", "Full", "Last quarter"]
            ).map((name, i) => (
              <button key={name} onClick={() => setAngle(i * 90)}>
                {name}
              </button>
            ))}
          </div>
        </div>
        <div className="experiment-notes">
          <p className="eyebrow">What do you notice?</p>
          {!earthMode && (
            <div className="earth-view">
              <svg
                viewBox="-70 -70 140 140"
                width="144"
                height="144"
                role="img"
                aria-label={`${state}, ${Math.round(illuminatedFraction(angle) * 100)} percent of the visible disc lit`}
              >
                <circle r="60" fill="#444e6a" />
                <polygon points={phasePolygon(angle)} fill="#f0eadb" />
              </svg>
              <span>Moon as seen from Earth</span>
            </div>
          )}
          <h3 aria-live="polite">{state}</h3>
          <p>
            {earthMode
              ? state === "Day"
                ? "Your place faces toward the Sun. Sunlight can reach it, so it is daytime."
                : state === "Night"
                  ? "Your place faces away from the Sun. It is on Earth’s unlit side, so it is nighttime."
                  : `Your place is crossing the edge between day and night. In this simplified model, it is ${state.toLowerCase()}.`
              : `We can see about ${Math.round(illuminatedFraction(angle) * 100)}% of the Moon’s face lit from here. The Moon keeps its round shape. Our view of its bright half changes.`}
          </p>
          <div className="wonder-note">
            <span aria-hidden="true">✦</span>
            <p>
              {earthMode
                ? "Earth’s spin causes day and night. It does not need to travel all the way around the Sun to make a day."
                : "Moon phases are not usually Earth’s shadow. The Moon’s orbit is tilted, so it usually passes above or below that shadow."}
            </p>
          </div>
          <p className="small-note">
            {earthMode
              ? "Simplified equator model. Real sunrise, sunset, and day length vary with location and season."
              : "Simplified northern view. The bright side can look turned around from other places. This model does not show eclipses."}{" "}
            Sizes and distances are not to scale.
          </p>
          <a
            className="source-link"
            href={source.url}
            target="_blank"
            rel="noreferrer"
          >
            Check the science at NASA ↗
          </a>
          <div className="action-row">
            <button
              className="button secondary"
              onClick={() => setAngle(earthMode ? 0 : 90)}
            >
              Reset experiment
            </button>
            <button className="button primary" onClick={onPlay}>
              Try the quiz →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
