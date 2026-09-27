import { useState } from "react";

export default function HighlightsPanel({ highlights, stories, onClear }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const entries = Object.entries(highlights);
  const titleFor = (id) => {
    const s = stories.find((st) => st.id === id);
    return s ? s.title : id;
  };

  const copyAll = async () => {
    const text = entries
      .map(([id, kind]) => `• [${kind === "explain" ? "Explain this" : "Interesting"}] ${titleFor(id)}`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(`My highlights — The Brief #1\n${text}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {entries.length > 0 && (
        <button className="hl-fab sans" onClick={() => setOpen(!open)}>
          ★ {entries.length} highlight{entries.length === 1 ? "" : "s"}
        </button>
      )}
      {open && (
        <div className="hl-panel sans">
          <h3>My highlights</h3>
          <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 8 }}>
            Saved on this device
          </div>
          {entries.length === 0 ? (
            <div className="hl-empty">
              Nothing yet — tap “Explain this” or “Interesting” on any story.
            </div>
          ) : (
            entries.map(([id, kind]) => (
              <div className="hl-item" key={id}>
                <span className={`tag ${kind}`}>
                  {kind === "explain" ? "Explain this" : "Interesting"}
                </span>
                {titleFor(id)}
              </div>
            ))
          )}
          <div className="hl-actions">
            {entries.length > 0 && (
              <>
                <button className="btn" onClick={copyAll}>
                  {copied ? "Copied!" : "Copy highlights"}
                </button>
                <button className="btn-ghost" onClick={onClear}>Clear</button>
              </>
            )}
            <button className="btn-ghost" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
