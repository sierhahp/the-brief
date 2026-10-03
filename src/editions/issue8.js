// Issue #8 — Saturday, October 3, 2026 (quiz)
// Covers Issues #5, #6, and #7. Answers are graded client-side with immediate feedback.
export const issue8 = {
  id: "issue-8",
  issueNumber: 8,
  dateline: "Saturday · October 3, 2026",
  kind: "quiz",
  deck: "The new before the news.",
  readingLevel: "Upper high school · approx. Grade 10",
  nextLine: "Next edition arrives Monday.",
  intro: "Quiz day — ten short-answer questions on Issues #5, #6, and #7. Type your answers and check each one for instant grading. No multiple choice, no mercy.",
  quizQuestions: [
    {
      id: "q1",
      prompt:
        "From Issue #5 — unscramble NIGETCA. Definition: “Acting like an agent with its own goals — the 70,000 iLands bots are the first commercial wave.” What’s the word?",
      answer: "AGENTIC",
      acceptedAnswers: [],
    },
    {
      id: "q2",
      prompt: "From Issue #5 — what did Pip, a 12-day-old iLands agent, do this week?",
      answer: "cold-emailed Cambridge's Henry Shevlin seeking gigs",
      acceptedAnswers: [
        "emailed Henry Shevlin",
        "cold-emailed a Cambridge professor",
        "emailed a Cambridge professor seeking gigs",
      ],
    },
    {
      id: "q3",
      prompt: "From Issue #5 — Trump’s rejected Iranian ceasefire proposal promised to reopen what within seven days?",
      answer: "the Strait of Hormuz",
      acceptedAnswers: ["Strait of Hormuz", "Hormuz"],
    },
    {
      id: "q4",
      prompt: "From Issue #6 — what is the name of OpenAI’s new always-on personal agents, each with its own cloud computer and browser?",
      answer: "Dots",
      acceptedAnswers: ["dots"],
    },
    {
      id: "q5",
      prompt:
        "From Issue #6 — unscramble WQUSAK. Definition: “A transponder code — 7500 means unlawful interference.” What’s the word?",
      answer: "SQUAWK",
      acceptedAnswers: [],
    },
    {
      id: "q6",
      prompt: "From Issue #6 — Anthropic’s IPO prospectus targets a valuation above what?",
      answer: "$2 trillion",
      acceptedAnswers: ["2 trillion", "$2T", "2T", "over 2 trillion dollars"],
    },
    {
      id: "q7",
      prompt:
        "From Issue #6 — flydubai flight FZ1073 squawked 7500, triggering a hijack scare. What actually caused it?",
      answer: "a violent altercation between the two pilots",
      acceptedAnswers: [
        "a fight between the pilots",
        "the pilots fought",
        "a cockpit fight",
        "a pilot altercation",
      ],
    },
    {
      id: "q8",
      prompt: "From Issue #7 — what is the headline spec of Google’s new Gemini 4 Argon model?",
      answer: "a 1-million-token output limit",
      acceptedAnswers: [
        "1 million token output limit",
        "1M-token output limit",
        "1M tokens",
        "1 million tokens",
      ],
    },
    {
      id: "q9",
      prompt:
        "From Issue #7 — unscramble RALLYOM. Definition: “Trump’s word for the AI accord: binding in conscience, not in law.” What’s the word?",
      answer: "MORALLY",
      acceptedAnswers: [],
    },
    {
      id: "q10",
      prompt: "From Issue #7 — British diesel hit what price per litre for the first time?",
      answer: "£2 a litre",
      acceptedAnswers: ["2 pounds a litre", "£2", "2 pounds"],
    },
  ],
};
