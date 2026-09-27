import { useState } from "react";

// Lenient comparison: case-insensitive, punctuation and spacing ignored.
function norm(s) {
  return (s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

const storeKey = (issueId) => `tbb-quiz-${issueId || "quiz"}`;

function loadSaved(issueId) {
  try {
    const raw = localStorage.getItem(storeKey(issueId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

// Once graded, the quiz is FINAL: the score is locked and recorded.
export default function Quiz({ questions, issueId }) {
  const total = questions.length;
  const [initial] = useState(() => loadSaved(issueId));
  const [answers, setAnswers] = useState(() => {
    const a = {};
    const saved = initial?.answers || {};
    questions.forEach((q) => { if (saved[q.id] !== undefined) a[q.id] = saved[q.id]; });
    return a;
  });
  const [results, setResults] = useState(() => {
    const r = {};
    const saved = initial?.results || {};
    questions.forEach((q) => { if (saved[q.id]) r[q.id] = saved[q.id]; });
    return r;
  });
  const [locked, setLocked] = useState(() => !!initial);
  const [saved, setSaved] = useState(() => initial || null);

  const check = (q) => {
    if (locked) return;
    const guess = answers[q.id] || "";
    if (!guess.trim() || results[q.id]) return;
    const g = norm(guess);
    const ok = [q.answer, ...(q.acceptedAnswers || [])].some((a) => norm(a) === g);
    setResults((r) => ({ ...r, [q.id]: ok ? "correct" : "wrong" }));
  };

  // Grade everything (blanks count as wrong) and LOCK the quiz.
  const gradeFinal = () => {
    if (locked) return;
    const r = {};
    const a = {};
    questions.forEach((q) => {
      const guess = answers[q.id] || "";
      a[q.id] = guess;
      const g = norm(guess);
      const ok = !!g && [q.answer, ...(q.acceptedAnswers || [])].some((x) => norm(x) === g);
      r[q.id] = ok ? "correct" : "wrong";
    });
    const score = Object.values(r).filter((x) => x === "correct").length;
    const record = { score, total, date: new Date().toISOString(), answers: a, results: r };
    try { localStorage.setItem(storeKey(issueId), JSON.stringify(record)); } catch {}
    setAnswers(a);
    setResults(r);
    setSaved(record);
    setLocked(true);
  };

  const score = Object.values(results).filter((r) => r === "correct").length;
  const graded = Object.keys(results).length;

  return (
    <div>
      <div className="quiz-score sans">
        {locked && saved ? (
          <>Final score: {saved.score} of {saved.total}{saved.date ? ` · ${fmtDate(saved.date)}` : ""}</>
        ) : (
          <>Score: {score} / {graded}</>
        )}
      </div>
      {locked && (
        <p className="quiz-final-note sans">This quiz is final — your score is recorded.</p>
      )}
      {questions.map((q, i) => {
        const res = results[q.id];
        return (
          <div className="quiz-q" key={q.id}>
            <div className="quiz-qnum sans">Question {i + 1} of {total}</div>
            <p className="quiz-prompt">{q.prompt}</p>
            <input
              className="scramble-input sans"
              value={answers[q.id] || ""}
              onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && check(q)}
              placeholder="Type your answer"
              autoComplete="off"
              disabled={!!res || locked}
            />
            <div className={`scramble-feedback sans ${res || ""}`}>
              {res === "correct" && "Correct — nicely done."}
              {res === "wrong" && (
                <>Not quite. The answer: <strong>{q.answer}</strong></>
              )}
            </div>
            {!res && !locked && (
              <button className="btn sans" onClick={() => check(q)}>Check</button>
            )}
          </div>
        );
      })}
      {!locked && (
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 18 }}>
          <button className="btn sans" onClick={gradeFinal}>Grade all — final</button>
        </div>
      )}
      {locked && saved && (
        <div className="scramble-card" style={{ marginTop: 18 }}>
          <div className="scramble-done">
            Final score: {saved.score} of {saved.total}.
            {saved.score === saved.total ? " Flawless." : saved.score >= 7 ? " Sharp." : " Worth a re-read of the week’s issues."}
          </div>
        </div>
      )}
    </div>
  );
}
