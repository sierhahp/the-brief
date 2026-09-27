# The Brief

A personal AI & world news briefing — a mobile-first, installable PWA built with Vite + React.

Each issue includes:
- **Signals** — AI and world news with predictions
- **Know a bit about a lot** — quick explainers that name each concept
- **Put it to work** — cultural & financial moves
- **Play** — a vocabulary scramble game with an interactive letter bank, plus quiz-day editions

Highlights save per-device in `localStorage` — no backend, nothing shared between visitors.

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```

Deploy the contents of `dist/` to Cloudflare (Workers/Pages direct upload) — see `~/workspace/your_files/bi-daily-brief-react-site/README.md` for the upload steps.
