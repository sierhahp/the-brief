import { useEffect, useRef, useState } from "react";

/**
 * Renders text so any selection can become a comment, Google-Docs style.
 * Select text -> a "Comment" bubble appears near the selection -> the
 * quoted words get marked, and tapping a mark re-opens the comment.
 */
export default function SelectableText({ text, comments = [], onAddComment, onComment }) {
  const ref = useRef(null);
  const [pop, setPop] = useState(null); // { x, y, quote }

  useEffect(() => {
    const hide = () => setPop(null);
    window.addEventListener("scroll", hide, true);
    return () => window.removeEventListener("scroll", hide, true);
  }, []);

  const handleSelect = () => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !ref.current) {
      setPop(null);
      return;
    }
    if (
      !ref.current.contains(sel.anchorNode) ||
      !ref.current.contains(sel.focusNode)
    ) {
      setPop(null);
      return;
    }
    const quote = sel.toString().trim();
    if (!quote) {
      setPop(null);
      return;
    }
    try {
      const rect = sel.getRangeAt(0).getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) {
        setPop(null);
        return;
      }
      setPop({
        x: Math.min(Math.max(rect.left + rect.width / 2, 70), window.innerWidth - 70),
        y: rect.top,
        quote,
      });
    } catch {
      setPop(null);
    }
  };

  // Split the text around each comment's quote so marks render inline.
  const segments = [];
  const ordered = [...comments]
    .filter((c) => c.quote)
    .sort((a, b) => text.indexOf(a.quote) - text.indexOf(b.quote));
  let cursor = 0;
  for (const c of ordered) {
    const idx = text.indexOf(c.quote, cursor);
    if (idx === -1) continue;
    if (idx > cursor) {
      segments.push({ type: "text", key: `t-${cursor}`, value: text.slice(cursor, idx) });
    }
    segments.push({ type: "mark", key: c.id, value: c.quote, comment: c });
    cursor = idx + c.quote.length;
  }
  if (cursor < text.length) {
    segments.push({ type: "text", key: `t-${cursor}`, value: text.slice(cursor) });
  }

  return (
    <span
      className="selectable"
      ref={ref}
      onMouseUp={handleSelect}
      onTouchEnd={handleSelect}
    >
      {segments.length === 0
        ? text
        : segments.map((s) =>
            s.type === "text" ? (
              <span key={s.key}>{s.value}</span>
            ) : (
              <mark
                key={s.key}
                className="comment-mark"
                onClick={(e) => {
                  e.stopPropagation();
                  setPop(null);
                  onComment(s.comment);
                }}
              >
                {s.value}
              </mark>
            )
          )}
      {pop && (
        <button
          type="button"
          className="comment-popover sans"
          style={{ left: pop.x, top: pop.y }}
          onMouseDown={(e) => e.preventDefault()}
          onTouchStart={(e) => e.preventDefault()}
          onClick={() => {
            const q = pop.quote;
            setPop(null);
            window.getSelection()?.removeAllRanges();
            onAddComment(q);
          }}
        >
          💬 Comment
        </button>
      )}
    </span>
  );
}
