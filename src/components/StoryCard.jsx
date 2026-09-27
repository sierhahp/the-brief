export default function StoryCard({ story, highlight, onHighlight }) {
  const set = (kind) =>
    onHighlight(story.id, highlight === kind ? null : kind);

  return (
    <article className="story" id={story.id}>
      <div className="kicker sans">{story.kicker}</div>
      <h3>{story.title}</h3>
      <p>{story.body}</p>
      <div className="why">{story.why}</div>
      {story.prediction && (
        <div className="prediction sans">
          <strong>
            Prediction
            {story.confidence && (
              <span className={`confidence ${story.confidence}`}>
                {story.confidence} confidence
              </span>
            )}
          </strong>
          {story.prediction}
        </div>
      )}
      <div className="hl-row sans">
        <button
          className={`hl-btn ${highlight === "explain" ? "active-explain" : ""}`}
          onClick={() => set("explain")}
        >
          {highlight === "explain" ? "✓ " : ""}Explain this
        </button>
        <button
          className={`hl-btn ${highlight === "interesting" ? "active-interesting" : ""}`}
          onClick={() => set("interesting")}
        >
          {highlight === "interesting" ? "✓ " : ""}Interesting
        </button>
      </div>
    </article>
  );
}
