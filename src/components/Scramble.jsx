import { useState } from "react";

const storeKey = (issueId) => `tbb-scramble-${issueId || "scramble"}`;

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

// Letters you use leave the bank: tap a tile or type, and it moves into your
// guess. The bank always shows what's left.
export default function Scramble({ words, issueId }) {
  const total = words.length;
  const [initial] = useState(() => loadSaved(issueId));
  const [record, setRecord] = useState(() => initial || null);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState([]); // array of letters, in order
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'
  const [outcomes, setOutcomes] = useState({}); // id -> true (solved) | false (skipped)

  const done = !!record;
  const current = words[index];

  // Multiset subtraction: bank letters minus the letters already used in the guess.
  const bankLetters = (() => {
    const pool = current.scramble.split("");
    for (const ch of guess) {
      const i = pool.indexOf(ch);
      if (i >= 0) pool.splice(i, 1);
    }
    return pool;
  })();

  const advance = (next) => {
    if (Object.keys(next).length >= total) {
      finish(next);
    } else {
      setIndex(index + 1);
      setGuess([]);
      setFeedback(null);
    }
  };

  const finish = (finalOutcomes) => {
    const solved = words.filter((w) => finalOutcomes[w.id]).length;
    const rec = {
      solved,
      total,
      date: new Date().toISOString(),
      words: words.map((w) => ({
        id: w.id,
        word: w.word,
        definition: w.definition,
        solved: !!finalOutcomes[w.id],
      })),
    };
    try { localStorage.setItem(storeKey(issueId), JSON.stringify(rec)); } catch {}
    setRecord(rec);
  };

  const check = () => {
    if (done) return;
    const clean = guess.join("").trim().toUpperCase();
    if (!clean) return;
    if (clean === current.word) {
      const next = { ...outcomes, [current.id]: true };
      setOutcomes(next);
      setFeedback("correct");
      setTimeout(() => advance(next), 900);
    } else {
      setFeedback("wrong");
    }
  };

  const skip = () => {
    if (done) return;
    const next = { ...outcomes, [current.id]: false };
    setOutcomes(next);
    advance(next);
  };

  const tapTile = (letter) => {
    if (done || feedback === "correct") return;
    setGuess([...guess, letter]);
    setFeedback(null);
  };

  const removeLast = () => {
    if (done || guess.length === 0) return;
    setGuess(guess.slice(0, -1));
    setFeedback(null);
  };

  const reset = () => {
    if (done || guess.length === 0) return;
    setGuess([]);
    setFeedback(null);
  };

  // Typing feeds the same bank: each typed letter is consumed only if it's
  // still in the bank, so used letters visibly leave the bank as you type.
  const onType = (e) => {
    if (done || feedback === "correct") return;
    const raw = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    const pool = current.scramble.split("");
    const next = [];
    for (const ch of raw) {
      const i = pool.indexOf(ch);
      if (i >= 0) {
        pool.splice(i, 1);
        next.push(ch);
      }
    }
    setGuess(next);
    setFeedback(null);
  };

  if (done && record) {
    return (
      <div className="scramble-card">
        <div className="section-label sans">Vocabulary scramble</div>
        <div className="scramble-done">
          Final: {record.solved} of {record.total} unscrambled
          {record.date ? ` · ${fmtDate(record.date)}` : ""}.
        </div>
        <p className="quiz-final-note sans">Your attempt is recorded. Scroll through the words:</p>
        <div className="vocab-review">
          {record.words.map((w) => (
            <div className="vocab-row" key={w.id}>
              <div className={`vocab-word sans ${w.solved ? "solved" : "missed"}`}>
                {w.solved ? "✓" : "✗"} {w.word}
              </div>
              <div className="vocab-def">“{w.definition}”</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="scramble-card">
      <div className="section-label sans">Vocabulary scramble</div>
      <div className="scramble-progress sans">
        Word {index + 1} of {total} · {Object.values(outcomes).filter(Boolean).length} solved
      </div>

      <div className="scramble-definition">“{current.definition}”</div>

      <div className="guess-line sans" aria-live="polite">
        {guess.length > 0 ? guess.join("") : <span className="guess-hint">Tap letters below, or type</span>}
      </div>

      <div className="letter-bank" role="group" aria-label="Letter bank">
        {bankLetters.map((letter, i) => (
          <button
            key={`${i}-${letter}`}
            type="button"
            className="letter-tile sans"
            onClick={() => tapTile(letter)}
            aria-label={`Use letter ${letter}`}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="bank-count sans">
        {bankLetters.length} {bankLetters.length === 1 ? "letter" : "letters"} left
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          className="scramble-input sans"
          value={guess.join("")}
          onChange={onType}
          onKeyDown={(e) => e.key === "Enter" && check()}
          placeholder="Or type the word"
          autoComplete="off"
          autoCapitalize="characters"
        />
      </div>

      <div className={`scramble-feedback sans ${feedback || ""}`}>
        {feedback === "correct" && "Correct — nicely done."}
        {feedback === "wrong" && "Not quite — try again."}
      </div>

      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        <button className="btn sans" onClick={check}>Check</button>
        <button className="btn-ghost sans" onClick={removeLast} disabled={guess.length === 0}>Remove last</button>
        <button className="btn-ghost sans" onClick={reset} disabled={guess.length === 0}>Reset</button>
        <button className="btn-ghost sans" onClick={skip}>Skip</button>
      </div>
    </div>
  );
}
