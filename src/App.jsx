import { useEffect, useState } from "react";
import { editions } from "./editions";
import StoryCard from "./components/StoryCard";
import Scramble from "./components/Scramble";
import Quiz from "./components/Quiz";
import HighlightsPanel from "./components/HighlightsPanel";

const THEME_KEY = "bdb-theme";
const hlKey = (n) => `bdb-highlights-issue-${n}`;

function loadHighlights(n) {
  try {
    return JSON.parse(localStorage.getItem(hlKey(n))) || {};
  } catch {
    return {};
  }
}

export default function App() {
  const [issueNumber, setIssueNumber] = useState(editions[0].issueNumber);
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");
  const [highlights, setHighlights] = useState(() => loadHighlights(editions[0].issueNumber));

  const edition = editions.find((e) => e.issueNumber === issueNumber) || editions[0];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setHighlights(loadHighlights(edition.issueNumber));
  }, [edition.issueNumber]);

  useEffect(() => {
    localStorage.setItem(hlKey(edition.issueNumber), JSON.stringify(highlights));
  }, [highlights, edition.issueNumber]);

  const onHighlight = (id, kind) => {
    setHighlights((prev) => {
      const next = { ...prev };
      if (kind) next[id] = kind;
      else delete next[id];
      return next;
    });
  };

  const allStories =
    edition.kind === "regular" ? [...(edition.ai || []), ...(edition.world || [])] : [];

  return (
    <div className="wrap">
      <header className="masthead">
        <h1>The Brief</h1>
        <p className="deck">{edition.deck}</p>
        <div className="dateline sans">
          <span>
            Issue #{edition.issueNumber} · {edition.dateline}
            {edition.kind === "quiz" ? " · Quiz day" : ""}
          </span>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
        <nav className="issue-nav sans" aria-label="Past issues">
          {editions.map((e) => (
            <button
              key={e.issueNumber}
              className={`issue-tab ${e.issueNumber === edition.issueNumber ? "active" : ""}`}
              onClick={() => {
                setIssueNumber(e.issueNumber);
                window.scrollTo({ top: 0 });
              }}
            >
              #{e.issueNumber}
              {e.kind === "quiz" ? " · Quiz" : ""}
            </button>
          ))}
        </nav>
      </header>

      {edition.kind === "quiz" ? (
        <main>
          <section className="section">
            <div className="section-label sans">Quiz day</div>
            <h2 className="section-title">Test yourself</h2>
            <p className="quiz-intro">{edition.intro}</p>
            <Quiz questions={edition.quizQuestions} issueId={edition.id} />
          </section>
        </main>
      ) : (
        <main>
          <section className="section">
            <div className="section-label sans">Signals</div>
            <h2 className="section-title">AI, moving fast</h2>
            {edition.ai.map((s) => (
              <StoryCard key={s.id} story={s} highlight={highlights[s.id]} onHighlight={onHighlight} />
            ))}
          </section>

          <section className="section">
            <div className="section-label sans">Signals</div>
            <h2 className="section-title">The world, in motion</h2>
            {edition.world.map((s) => (
              <StoryCard key={s.id} story={s} highlight={highlights[s.id]} onHighlight={onHighlight} />
            ))}
          </section>

          <section className="section">
            <div className="section-label sans">Know a bit about a lot</div>
            <h2 className="section-title">Explainers</h2>
            <div className="explainer-grid">
              {edition.explainers.map((e) => (
                <div className="explainer" key={e.id}>
                  <div className="explainer-term sans">{e.term}</div>
                  <div className="field sans">{e.field}</div>
                  <p>{e.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-label sans">Put it to work</div>
            <h2 className="section-title">Cultural &amp; financial capital</h2>
            <div className="moves">
              <div className="move-col">
                <h4>Cultural moves</h4>
                {edition.culturalMoves.map((m) => (
                  <div className="move" key={m.id}>
                    <div className="move-label sans">{m.label}</div>
                    <p>{m.body}</p>
                    {m.url && (
                      <a href={m.url} target="_blank" rel="noreferrer">{m.linkLabel} →</a>
                    )}
                  </div>
                ))}
              </div>
              <div className="move-col">
                <h4>Financial moves</h4>
                {edition.financialMoves.map((m) => (
                  <div className="move" key={m.id}>
                    <div className="move-label sans">{m.label}</div>
                    <p>{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {edition.words && edition.words.length > 0 && (
            <section className="section">
              <div className="section-label sans">Before you play</div>
              <h2 className="section-title">Words in this issue</h2>
              <p className="words-bridge-note sans">
                Meet each word in context now — you’ll unscramble them in the game below.
              </p>
              <div className="words-bridge">
                {edition.words.map((w) => (
                  <div className="word-row" key={w.id}>
                    <div className="word-term sans">{w.word}</div>
                    <div className="word-def">“{w.definition}”</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="section">
            <div className="section-label sans">Play</div>
            <h2 className="section-title">Vocabulary scramble</h2>
            <Scramble words={edition.words} issueId={edition.id} />
          </section>
        </main>
      )}

      <footer className="footer">
        <div>The Brief · Issue #{edition.issueNumber}</div>
        <div className="next">{edition.nextLine}</div>
      </footer>

      {edition.kind === "regular" && (
        <HighlightsPanel
          highlights={highlights}
          stories={allStories}
          onClear={() => setHighlights({})}
        />
      )}
    </div>
  );
}
