import { useState } from "react";

export default function NotesPanel({ notes, comments, stories, issueNumber, onClear }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const entries = Object.entries(notes).filter(([, t]) => t && t.trim());
  const commentEntries = Object.entries(comments || {}).flatMap(([storyId, list]) =>
    (list || []).map((c) => ({ storyId, ...c }))
  );
  const total = entries.length + commentEntries.length;
  const titleFor = (id) => {
    const s = stories.find((st) => st.id === id);
    return s ? s.title : id;
  };

  const copyAll = async () => {
    const noteText = entries
      .map(([id, t]) => `• ${titleFor(id)}\n  ${t.trim()}`)
      .join("\n\n");
    const commentText = commentEntries
      .map((c) => `• ${titleFor(c.storyId)}\n  “${c.quote}”\n  → ${c.text.trim()}`)
      .join("\n\n");
    const parts = [];
    if (noteText) parts.push(`Notes\n${noteText}`);
    if (commentText) parts.push(`Comments\n${commentText}`);
    try {
      await navigator.clipboard.writeText(
        `My notes — The Brief #${issueNumber}\n\n${parts.join("\n\n")}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {total > 0 && (
        <button className="note-fab sans" onClick={() => setOpen(!open)}>
          📝 {total} note{total === 1 ? "" : "s"}
        </button>
      )}
      {open && (
        <div className="note-panel sans">
          <h3>My notes</h3>
          <div className="note-panel-sub">
            Issue #{issueNumber} · saved on this device
          </div>
          {total === 0 ? (
            <div className="note-empty">
              Nothing yet — tap “Add a note” on any story, or select text to comment.
            </div>
          ) : (
            <>
              {entries.map(([id, t]) => (
                <div className="note-item" key={id}>
                  <div className="note-item-title">{titleFor(id)}</div>
                  <div className="note-item-text">{t.trim()}</div>
                </div>
              ))}
              {commentEntries.map((c) => (
                <div className="note-item" key={c.id}>
                  <div className="note-item-title">{titleFor(c.storyId)}</div>
                  <div className="note-item-quote">“{c.quote}”</div>
                  <div className="note-item-text">{c.text.trim()}</div>
                </div>
              ))}
            </>
          )}
          <div className="note-actions">
            {total > 0 && (
              <>
                <button className="btn" onClick={copyAll}>
                  {copied ? "Copied!" : "Copy notes"}
                </button>
                <button className="btn-ghost" onClick={onClear}>
                  Clear
                </button>
              </>
            )}
            <button className="btn-ghost" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
