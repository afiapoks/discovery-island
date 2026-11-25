import { useState, type FormEvent } from "react";
import {
  sources,
  topics,
  type ActivityId,
  type ReadingLevel,
  type TopicId,
} from "./content/library";
import { answerFromLibrary } from "./guide/libraryGuide";
import {
  EarthArt,
  MoonArt,
  RocketArt,
  SunArt,
} from "./components/Illustrations";
import Experiments from "./components/Experiments";
import Quiz from "./components/Quiz";

type View = "explore" | "try" | "ask" | "play";
const topicIds: TopicId[] = ["earth", "moon", "sun"];
const questions = [
  "Why does nighttime happen?",
  "Why does the Moon change shape?",
  "Does the Moon make its own light?",
  "Why does Earth have a year?",
];

export default function App() {
  const [view, setView] = useState<View>("explore");
  const [topicId, setTopicId] = useState<TopicId>("earth");
  const [activity, setActivity] = useState<ActivityId>("day-night");
  const [level, setLevel] = useState<ReadingLevel>("short");
  const [visited, setVisited] = useState<TopicId[]>([]);
  const [question, setQuestion] = useState("");
  const [asked, setAsked] = useState<string | null>(null);
  const topic = topics[topicId];
  const answer = asked === null ? null : answerFromLibrary(asked, level);
  const tryActivity = (id: ActivityId) => {
    setActivity(id);
    setView("try");
  };
  const pickTopic = (id: TopicId) => {
    setTopicId(id);
    setVisited((list) => (list.includes(id) ? list : [...list, id]));
  };
  const ask = (text: string) => {
    setQuestion(text);
    setAsked(text);
    setView("ask");
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (question.trim()) setAsked(question);
  };
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to discoveries
      </a>
      <header className="site-header">
        <button
          className="brand"
          onClick={() => setView("explore")}
          aria-label="Discovery Island home"
        >
          <span className="brand-symbol" aria-hidden="true">
            ✦
          </span>
          <span>
            discovery<span className="brand-second">island</span>
          </span>
        </button>
        <nav aria-label="Main navigation">
          {(["explore", "try", "ask", "play"] as View[]).map((item) => (
            <button
              key={item}
              aria-current={view === item ? "page" : undefined}
              onClick={() => setView(item)}
            >
              {item === "try" ? (
                "Try a lab"
              ) : item === "ask" ? (
                <>
                  <span className="desktop-label">Ask a question</span>
                  <span className="mobile-label">Ask</span>
                </>
              ) : item === "play" ? (
                "Play"
              ) : (
                "Explore"
              )}
            </button>
          ))}
        </nav>
        <span className="world-badge">
          <span aria-hidden="true">◌</span> SPACE WORLD
        </span>
      </header>
      <main id="main-content">
        {view === "explore" && (
          <section aria-labelledby="explore-title">
            <div className="intro">
              <div>
                <p className="eyebrow">A little curiosity, a whole world</p>
                <h1 id="explore-title">
                  Ready for a little <span>space adventure?</span>
                </h1>
              </div>
              <p>
                Follow what makes you wonder.
                <br /> Pick a world, try an idea, discover why.
              </p>
            </div>
            <div className="explorer-grid">
              <div
                className="space-scene"
                aria-label="Explore Earth, Moon, and Sun"
              >
                <div className="scene-heading">
                  <span className="scene-number">01</span>
                  <span>THE SPACE NEIGHBORHOOD</span>
                </div>
                <svg
                  className="scene-decoration"
                  viewBox="0 0 720 450"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="350"
                    cy="230"
                    rx="250"
                    ry="130"
                    transform="rotate(-19 350 230)"
                    fill="none"
                    stroke="#8c96b7"
                    strokeDasharray="4 9"
                    opacity=".35"
                  />
                  {[
                    [60, 90],
                    [110, 270],
                    [205, 58],
                    [315, 105],
                    [420, 46],
                    [502, 303],
                    [640, 247],
                    [630, 65],
                    [360, 350],
                    [75, 380],
                    [220, 330],
                    [600, 390],
                    [478, 177],
                  ].map(([x, y], i) => (
                    <g
                      key={i}
                      transform={`translate(${x} ${y})`}
                      fill="#e8dbc0"
                      opacity={i % 2 ? ".4" : ".85"}
                    >
                      {i % 3 ? (
                        <circle r="2" />
                      ) : (
                        <path d="M0-5l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" />
                      )}
                    </g>
                  ))}
                </svg>
                <button
                  className={`planet earth ${topicId === "earth" ? "active" : ""}`}
                  aria-pressed={topicId === "earth"}
                  onClick={() => pickTopic("earth")}
                >
                  <EarthArt size={200} />
                  <span className="planet-name">
                    Earth <span aria-hidden="true">↗</span>
                  </span>
                </button>
                <button
                  className={`planet moon ${topicId === "moon" ? "active" : ""}`}
                  aria-pressed={topicId === "moon"}
                  onClick={() => pickTopic("moon")}
                >
                  <MoonArt size={92} />
                  <span className="planet-name">
                    Moon <span aria-hidden="true">↗</span>
                  </span>
                </button>
                <button
                  className={`planet sun ${topicId === "sun" ? "active" : ""}`}
                  aria-pressed={topicId === "sun"}
                  onClick={() => pickTopic("sun")}
                >
                  <SunArt size={125} />
                  <span className="planet-name">
                    Sun <span aria-hidden="true">↗</span>
                  </span>
                </button>
                <div className="rocket">
                  <RocketArt />
                </div>
                <p className="scene-invitation">
                  Go on. Choose something that makes you curious.
                </p>
                <span className="scene-scale">
                  A picture to explore. Not to scale.
                </span>
              </div>
              <aside
                className="discovery-panel"
                aria-labelledby="discovery-title"
              >
                <p className="eyebrow">{topic.tag}</p>
                <h2 id="discovery-title">{topic.title}</h2>
                <div className="reading-control">
                  <span id="reading-label">Tell me</span>
                  <div
                    className="segmented"
                    role="group"
                    aria-labelledby="reading-label"
                  >
                    <button
                      aria-pressed={level === "short"}
                      onClick={() => setLevel("short")}
                    >
                      Simply
                    </button>
                    <button
                      aria-pressed={level === "detail"}
                      onClick={() => setLevel("detail")}
                    >
                      A little more
                    </button>
                  </div>
                </div>
                <p className="topic-explanation">{topic[level]}</p>
                <div className="wonder-note">
                  <span aria-hidden="true">✦</span>
                  <p>What would happen if you could move it yourself?</p>
                </div>
                <button
                  className="button primary full"
                  onClick={() => tryActivity(topic.activity)}
                >
                  {topic.activity === "day-night"
                    ? "Make day turn into night"
                    : "Discover the Moon’s phases"}{" "}
                  →
                </button>
                <button
                  className="text-button"
                  onClick={() => ask(topic.question)}
                >
                  {topic.question} ↗
                </button>
                <a
                  className="source-link"
                  href={sources[topic.source].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {sources[topic.source].title} ↗
                </a>
                {topicId === "sun" && (
                  <a
                    className="source-link"
                    href={sources["moon-phases"].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    NASA: reflected moonlight ↗
                  </a>
                )}
              </aside>
            </div>
            <div className="explorer-bottom">
              <div>
                <p className="eyebrow">Your discovery passport</p>
                <div className="stamps">
                  {topicIds.map((id) => (
                    <span
                      key={id}
                      className={visited.includes(id) ? "collected" : ""}
                    >
                      {visited.includes(id) ? "✓" : "○"} {topics[id].name}
                    </span>
                  ))}
                </div>
              </div>
              <p>
                Visit all three neighbors.
                <br />
                Then try a little experiment.
              </p>
              <button
                className="button secondary"
                onClick={() => setView("play")}
              >
                Take the curiosity quiz →
              </button>
            </div>
          </section>
        )}
        {view === "try" && (
          <Experiments
            activity={activity}
            onChange={setActivity}
            onPlay={() => setView("play")}
          />
        )}
        {view === "play" && <Quiz onTry={tryActivity} />}
        {view === "ask" && (
          <section className="guide-page" aria-labelledby="guide-title">
            <div className="guide-intro">
              <p className="eyebrow">A question is a great place to start</p>
              <h2 id="guide-title">What made you wonder?</h2>
              <p>Find a science explanation, then try it for yourself.</p>
              <span className="library-badge">
                Library guide · Prepared answers
              </span>
              <p className="small-note">
                These answers come from our small Space library. This guide is
                not live AI.
              </p>
            </div>
            <div className="guide-card">
              <form onSubmit={submit}>
                <label htmlFor="space-question">Your Space question</label>
                <div className="question-row">
                  <input
                    id="space-question"
                    value={question}
                    maxLength={300}
                    placeholder="Why does the Moon change shape?"
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                  <button
                    className="button primary"
                    type="submit"
                    disabled={!question.trim()}
                  >
                    Find an explanation →
                  </button>
                </div>
              </form>
              <div className="reading-control">
                <span>Reading level</span>
                <div className="segmented">
                  <button
                    aria-pressed={level === "short"}
                    onClick={() => setLevel("short")}
                  >
                    Simply
                  </button>
                  <button
                    aria-pressed={level === "detail"}
                    onClick={() => setLevel("detail")}
                  >
                    A little more
                  </button>
                </div>
              </div>
              {answer && (
                <div className="guide-answer" role="status">
                  <p className="eyebrow">
                    {answer.supported
                      ? "Related library explanation"
                      : "Outside our checked library"}
                  </p>
                  <h3>{answer.title}</h3>
                  <p>{answer.text}</p>
                  <div className="guide-sources">
                    {answer.sourceIds.map((id) => (
                      <a
                        key={id}
                        className="source-link"
                        href={sources[id].url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {sources[id].title} ↗
                      </a>
                    ))}
                  </div>
                  {answer.activityId && (
                    <button
                      className="button secondary"
                      onClick={() => tryActivity(answer.activityId!)}
                    >
                      Try it in the Space lab →
                    </button>
                  )}
                </div>
              )}
              <p className="eyebrow question-prompt">
                Or follow one of these questions
              </p>
              <div className="suggested-questions">
                {questions.map((text) => (
                  <button key={text} onClick={() => ask(text)}>
                    {text}
                    <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <footer>
        <span>Made for curious minds.</span>
        <span>New discoveries start with “why?”</span>
        <a
          href="https://github.com/afiapoks/discovery-island"
          target="_blank"
          rel="noreferrer"
        >
          About this project ↗
        </a>
      </footer>
    </>
  );
}
