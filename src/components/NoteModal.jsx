import { useEffect, useState } from "react";

export default function NoteModal({ story, quote, initialText, onSave, onDelete, onClose }) {
  const [text, setText] = useState(initialText || "");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="note-overlay" onClick={onClose}>
      <div
        className="note-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`Note on ${story.title}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="note-modal-kicker sans">{story.kicker}</div>
        <h3 className="note-modal-title">{story.title}</h3>
        {quote && <blockquote className="note-quote">“{quote}”</blockquote>}
        <textarea
          className="note-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Your thoughts, connections, follow-ups…"
          autoFocus
        />
        <div className="note-modal-actions sans">
          {initialText ? (
            <button className="btn-ghost btn-danger" onClick={onDelete}>
              Delete
            </button>
          ) : (
            <span />
          )}
          <div className="note-modal-save">
            <button className="btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn"
              onClick={() => onSave(text)}
              disabled={!text.trim()}
            >
              Save note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
