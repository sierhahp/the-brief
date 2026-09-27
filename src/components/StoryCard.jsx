export default function StoryCard({ story, note, onOpenNote }) {
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
      <div className="note-row sans">
        <button
          className={`note-btn ${note ? "has-note" : ""}`}
          onClick={onOpenNote}
        >
          {note ? "📝 My note" : "📝 Add a note"}
        </button>
      </div>
    </article>
  );
}
