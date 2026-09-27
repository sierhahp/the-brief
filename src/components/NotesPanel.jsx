import { useState } from "react";

export default function NotesPanel({ notes, stories, issueNumber, onClear }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const entries = Object.entries(notes).filter(([, t]) => t && t.trim());
  const titleFor = (id) => {
    const s = stories.find((st) => st.id === id);
    return s ? s.title : id;
  };

  const copyAll = async () => {
    const text = entries
      .map(([id, t]) => `• ${titleFor(id)}\n  ${t.trim()}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(
        `My notes — The Brief #${issueNumber}\n\n${text}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {entries.length > 0 && (
        <button className="note-fab sans" onClick={() => setOpen(!open)}>
          📝 {entries.length} note{entries.length === 1 ? "" : "s"}
        </button>
      )}
      {open && (
        <div className="note-panel sans">
          <h3>My notes</h3>
          <div className="note-panel-sub">
            Issue #{issueNumber} · saved on this device
          </div>
          {entries.length === 0 ? (
            <div className="note-empty">
              Nothing yet — tap “Add a note” on any story.
            </div>
          ) : (
            entries.map(([id, t]) => (
              <div className="note-item" key={id}>
                <div className="note-item-title">{titleFor(id)}</div>
                <div className="note-item-text">{t.trim()}</div>
              </div>
            ))
          )}
          <div className="note-actions">
            {entries.length > 0 && (
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
