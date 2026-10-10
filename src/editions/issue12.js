// Issue #12 — Saturday, October 10, 2026 (quiz)
// Covers Issues #9, #10, and #11. Answers are graded client-side with immediate feedback.
export const issue12 = {
  id: "issue-12",
  issueNumber: 12,
  dateline: "Saturday · October 10, 2026",
  kind: "quiz",
  deck: "The new before the news.",
  readingLevel: "Upper high school · approx. Grade 10",
  nextLine: "Next edition arrives Monday.",
  intro: "Quiz day — ten short-answer questions on Issues #9, #10, and #11. Type your answers and check each one for instant grading. No multiple choice, no mercy.",
  quizQuestions: [
    {
      id: "q1",
      prompt:
        "From Issue #9 — unscramble ZRCA. Definition: “The new AI czar — Trump's title for Jay Clayton, leading the Super Intelligence Force.” What’s the word?",
      answer: "CZAR",
      acceptedAnswers: [],
    },
    {
      id: "q2",
      prompt:
        "From Issue #9 — unscramble ANOPESUB. Definition: “A court order to appear or produce documents — what finally got the AI labs to New York.” What’s the word?",
      answer: "SUBPOENA",
      acceptedAnswers: [],
    },
    {
      id: "q3",
      prompt:
        "From Issue #9 — Brazil's October 4 first round sent Senator Flávio Bolsonaro into an October 25 runoff with whom?",
      answer: "President Lula",
      acceptedAnswers: ["Lula", "Luiz Inácio Lula da Silva", "President Luiz Inácio Lula da Silva"],
    },
    {
      id: "q4",
      prompt:
        "From Issue #9 — Spain's Pedro Sánchez called a snap election after Congress defeated his housing decrees. On what date will Spaniards vote?",
      answer: "November 29",
      acceptedAnswers: ["29 November", "Nov 29", "November 29, 2026"],
    },
    {
      id: "q5",
      prompt:
        "From Issue #10 — unscramble TMINNCEAONT. Definition: “Keeping AI inside its sandbox — Google admitted three breaches.” What’s the word?",
      answer: "CONTAINMENT",
      acceptedAnswers: [],
    },
    {
      id: "q6",
      prompt:
        "From Issue #10 — Mistral launched a public preview of Mistral Large 4, its natively multimodal MoE with 1.05 trillion parameters. What’s the model’s nickname?",
      answer: "Le Chonk",
      acceptedAnswers: ["le chonk", "'Le Chonk'"],
    },
    {
      id: "q7",
      prompt:
        "From Issue #10 — SpaceX reportedly plans to raise how much — in bank loans plus investment-grade debt led by Apollo — to buy Nvidia chips for Colossus 2?",
      answer: "$40 billion",
      acceptedAnswers: ["40 billion", "$40B", "40B", "about $40 billion"],
    },
    {
      id: "q8",
      prompt:
        "From Issue #11 — GPT-6 shipped this week with a feature that turns answers into tappable buttons, interactive charts, and tools built on the spot. What’s it called?",
      answer: "Intelligent UI",
      acceptedAnswers: ["intelligent ui"],
    },
    {
      id: "q9",
      prompt:
        "From Issue #11 — Anthropic slashed Haiku 5.5 prices up to 90%, matching GPT-6 Luna exactly. What’s the new input price per million tokens?",
      answer: "$0.10",
      acceptedAnswers: ["10 cents", "$0.10 per million tokens", "10 cents per million tokens"],
    },
    {
      id: "q10",
      prompt:
        "From Issue #11 — ahead of Brazil's October 25 runoff, whose endorsement did Flávio Bolsonaro land on Thursday — the author-psychiatrist who finished third with 2.89% of valid votes?",
      answer: "Augusto Cury",
      acceptedAnswers: ["Cury"],
    },
  ],
};
