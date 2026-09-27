import { useEffect, useState } from "react";
import { editions } from "./editions";
import StoryCard from "./components/StoryCard";
import Scramble from "./components/Scramble";
import Quiz from "./components/Quiz";
import NotesPanel from "./components/NotesPanel";
import NoteModal from "./components/NoteModal";

const THEME_KEY = "bdb-theme";
const noteKey = (n) => `tbb-notes-issue-${n}`;

function loadNotes(n) {
  try {
    return JSON.parse(localStorage.getItem(noteKey(n))) || {};
  } catch {
    return {};
  }
}

export default function App() {
  const [issueNumber, setIssueNumber] = useState(editions[0].issueNumber);
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");
  const [notes, setNotes] = useState(() => loadNotes(editions[0].issueNumber));
  const [noteStoryId, setNoteStoryId] = useState(null);

  const edition = editions.find((e) => e.issueNumber === issueNumber) || editions[0];

  useEffect(() => {
    document.title = `The Brief — Issue #${edition.issueNumber}`;
  }, [edition.issueNumber]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setNotes(loadNotes(edition.issueNumber));
    setNoteStoryId(null);
  }, [edition.issueNumber]);

  useEffect(() => {
    localStorage.setItem(noteKey(edition.issueNumber), JSON.stringify(notes));
  }, [notes, edition.issueNumber]);

  const saveNote = (id, text) => {
    const trimmed = text.trim();
    setNotes((prev) => {
      const next = { ...prev };
      if (trimmed) next[id] = trimmed;
      else delete next[id];
      return next;
    });
    setNoteStoryId(null);
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setNoteStoryId(null);
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
            <Quiz key={edition.id} questions={edition.quizQuestions} issueId={edition.id} />
          </section>
        </main>
      ) : (
        <main>
          <section className="section">
            <div className="section-label sans">Signals</div>
            <h2 className="section-title">AI, moving fast</h2>
            {edition.ai.map((s) => (
              <StoryCard key={s.id} story={s} note={notes[s.id]} onOpenNote={() => setNoteStoryId(s.id)} />
            ))}
          </section>

          <section className="section">
            <div className="section-label sans">Signals</div>
            <h2 className="section-title">The world, in motion</h2>
            {edition.world.map((s) => (
              <StoryCard key={s.id} story={s} note={notes[s.id]} onOpenNote={() => setNoteStoryId(s.id)} />
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

          <section className="section">
            <div className="section-label sans">Play</div>
            <h2 className="section-title">Vocabulary scramble</h2>
            <Scramble key={edition.id} words={edition.words} issueId={edition.id} />
          </section>
        </main>
      )}

      <footer className="footer">
        <div>The Brief · Issue #{edition.issueNumber}</div>
        <div className="next">{edition.nextLine}</div>
      </footer>

      {edition.kind === "regular" && (
        <NotesPanel
          notes={notes}
          stories={allStories}
          issueNumber={edition.issueNumber}
          onClear={() => setNotes({})}
        />
      )}

      {noteStoryId && (() => {
        const story = allStories.find((s) => s.id === noteStoryId);
        return story ? (
          <NoteModal
            story={story}
            initialText={notes[noteStoryId] || ""}
            onSave={(text) => saveNote(noteStoryId, text)}
            onDelete={() => deleteNote(noteStoryId)}
            onClose={() => setNoteStoryId(null)}
          />
        ) : null;
      })()}
    </div>
  );
}
