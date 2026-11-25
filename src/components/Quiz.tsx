import { useState } from "react";
import { quizQuestions, type ActivityId } from "../content/library";

export default function Quiz({ onTry }: { onTry: (id: ActivityId) => void }) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const question = quizQuestions[index];
  const restart = () => {
    setIndex(0);
    setChoice(null);
    setScore(0);
    setComplete(false);
  };
  const choose = (answer: number) => {
    if (choice !== null) return;
    setChoice(answer);
    if (answer === question.correct) setScore((s) => s + 1);
  };
  return (
    <section className="quiz-page" aria-labelledby="quiz-title">
      <p className="eyebrow">Curiosity checkpoint</p>
      <h2 id="quiz-title">Little questions. Big discoveries.</h2>
      <p>No timer. No pressure. Let’s see what you noticed.</p>
      <div className="quiz-card">
        {complete ? (
          <div className="quiz-complete">
            <span className="completion-star" aria-hidden="true">
              ✦
            </span>
            <h3>You explored, tested, and learned.</h3>
            <p>
              You got {score} of 3 on this trip. Every explanation is a chance
              to discover something.
            </p>
            <button className="button primary" onClick={restart}>
              Play again →
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Question {index + 1} of 3</p>
            <h3>{question.question}</h3>
            <div className="quiz-options">
              {question.options.map((option, i) => (
                <button
                  key={option}
                  disabled={choice !== null}
                  onClick={() => choose(i)}
                  className={
                    choice !== null && i === question.correct
                      ? "correct"
                      : choice === i
                        ? "selected"
                        : ""
                  }
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                  {choice !== null && i === question.correct && (
                    <span className="answer-mark" aria-label="Correct answer">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
            {choice !== null && (
              <div className="quiz-feedback" role="status">
                <h4>
                  {choice === question.correct
                    ? "You noticed it!"
                    : "Good try. Let’s look a little closer."}
                </h4>
                <p>{question.explanation}</p>
                <div className="action-row">
                  <button
                    className="button secondary"
                    onClick={() => onTry(question.activity)}
                  >
                    Investigate it
                  </button>
                  <button
                    className="button primary"
                    onClick={() => {
                      if (index === 2) setComplete(true);
                      else {
                        setIndex((i) => i + 1);
                        setChoice(null);
                      }
                    }}
                  >
                    {index === 2 ? "See my discoveries" : "Next question"} →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
