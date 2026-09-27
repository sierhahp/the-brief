// Issue #3 — Friday, September 25, 2026 (quiz)
// Covers Issues #1 and #2. Answers are graded client-side with immediate feedback.
export const issue3 = {
  issueNumber: 3,
  dateline: "Friday · September 25, 2026",
  kind: "quiz",
  deck: "The new before the news.",
  readingLevel: "Upper high school · approx. Grade 10",
  nextLine: "Next edition arrives Saturday.",
  intro: "Quiz day — ten short-answer questions on Issues #1 and #2. Type your answers and check each one for instant grading. No multiple choice, no mercy.",
  quizQuestions: [
    {
      id: "q1",
      prompt: "From Issue #2 — unscramble TULAKOW. Definition: “Leaving in protest — the UN’s favorite punctuation.” What’s the word?",
      answer: "WALKOUT",
      acceptedAnswers: [],
    },
    {
      id: "q2",
      prompt: "From Issue #2 — President Trump told the UN that US documents will stop saying “artificial intelligence.” What phrase will they use instead?",
      answer: "super intelligence",
      acceptedAnswers: ["superintelligence"],
    },
    {
      id: "q3",
      prompt: "From Issue #2 — name the three AI labs that spent weeks coordinating on safety before jointly unveiling cyber-focused safeguards.",
      answer: "OpenAI, Anthropic, and Google DeepMind",
      acceptedAnswers: [
        "OpenAI Anthropic Google DeepMind",
        "OpenAI Google DeepMind Anthropic",
        "Anthropic OpenAI Google DeepMind",
        "Anthropic Google DeepMind OpenAI",
        "Google DeepMind OpenAI Anthropic",
        "Google DeepMind Anthropic OpenAI",
      ],
    },
    {
      id: "q4",
      prompt: "From Issue #2 — California’s new executive order proposes independent verifiers for frontier labs, plus an emergency what: a last-resort shutdown for rogue models?",
      answer: "kill switch",
      acceptedAnswers: ["an emergency kill switch", "emergency kill switch"],
    },
    {
      id: "q5",
      prompt: "From Issue #2 — Microsoft powered on Nvidia’s Vera Rubin NVL72 rack. How many Vera CPUs and how many Rubin GPUs go into one rack?",
      answer: "36 Vera CPUs and 72 Rubin GPUs",
      acceptedAnswers: ["36 CPUs and 72 GPUs", "36 and 72"],
    },
    {
      id: "q6",
      prompt: "From Issue #2 — on the day of the first US–Iran shuttle talks in months, Brent crude fell below what price per barrel for the first time since September 8?",
      answer: "$100 per barrel",
      acceptedAnswers: ["$100", "100", "100 dollars"],
    },
    {
      id: "q7",
      prompt: "From Issue #2 — Bitcoin pushed past what price this week, its highest since January?",
      answer: "$86,000",
      acceptedAnswers: ["86000", "86,000", "86k", "$86k"],
    },
    {
      id: "q8",
      prompt: "From Issue #2 — Russia’s ruling United Russia party took what share of the vote in the September 18–20 Duma election?",
      answer: "57.8%",
      acceptedAnswers: ["57.8 percent", "57.8"],
    },
    {
      id: "q9",
      prompt: "From Issue #1 — unscramble NATIODRACAKBOW. Definition: “When the price of something right now is higher than the price for later.” What’s the word?",
      answer: "BACKWARDATION",
      acceptedAnswers: [],
    },
    {
      id: "q10",
      prompt: "From Issues #1 & #2 — the Fed’s September 16 hike set the rate range to what?",
      answer: "3.75–4%",
      acceptedAnswers: ["3.75 to 4 percent", "3.75%-4%", "3.75-4%"],
    },
  ],
};
