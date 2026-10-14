// Issue #14 — Wednesday, October 14, 2026 (regular)
export const issue14 = {
  "id": "issue-14",
  "issueNumber": 14,
  "dateline": "Wednesday · October 14, 2026",
  "kind": "regular",
  "deck": "The new before the news.",
  "readingLevel": "Upper high school · approx. Grade 10",
  "nextLine": "Next edition arrives Friday.",
  "ai": [
    {
      "id": "ai-argon",
      "kicker": "01 / Frontier",
      "title": "Google's price war, delivered Tuesday",
      "body": "Google launched Gemini 4 Argon on Tuesday — its first frontier model in over seven months, and the opening shot of the Gemini 4 family — with pricing designed as a weapon: $2 per million input tokens and $10 per million output, with cached inputs 95% cheaper, running through November 30 before doubling to $4/$20. That is exactly half of Claude Opus 5.5's $4/$20 — and a fifth of GPT-6 Astra's $10/$50. On benchmarks, Argon tops the Vals Index, which measures performance across finance, coding, legal and tax work, and scores 53 on Artificial Analysis' Intelligence Index on its High setting — tying GPT-6 Astra, edging GPT-6.1 Sol and Meta's new Muse Wonder Max by a point, and trailing the Claude 5.5 pair by about five. The output limit jumps from 64K tokens to a full million. Developers and enterprises get it through the Gemini API; Google AI Pro and Ultra subscribers get it in the Gemini app and AI Mode in Search, while Ultra subscribers get it in the Antigravity coding tool. Google names Deloitte, LexisNexis, Ambience Healthcare and Isomorphic Labs among early testers, and says its own engineers using Argon in Antigravity lifted agentic code submissions 35% while cutting rollbacks by a third — with the Chrome team compressing a months-long Chromium refactor into weeks. Separately, Google is expanding its Fairwind Program: hundreds more vetted cybersecurity defenders will get access to a version of the model with its cyber safeguards removed.",
      "why": "The price war just got a calendar: the $2/$10 intro rate expires November 30.",
      "prediction": "The discount is a land grab — watch whether Anthropic and OpenAI answer with their own cuts before the promo ends, and whether the Fairwind carve-out, a frontier model with the cyber brakes off handed to hundreds of partners, becomes the next safety flashpoint.",
      "confidence": "high"
    },
    {
      "id": "ai-recording",
      "kicker": "02 / Security",
      "title": "The USB stick wrapped in toilet paper",
      "body": "The FBI arrested an OpenAI engineer last Thursday on charges of bugging his own employer. Abdulrahman Alfozan, 35, a Saudi national who joined OpenAI's product team in July 2025, is charged with using a device to intercept oral communications. OpenAI found the device on September 30 during a sweep: an encrypted audio recorder plugged into a USB port behind a television in an executive conference room in San Francisco, wrapped in toilet paper, believed to have been planted around September 28. The room, per the complaint, hosts highly confidential discussions of proprietary research, product plans, government engagements and strategy. Surveillance footage showed Alfozan near the room without authorization; on October 5 he allegedly entered to retrieve the device, and security found an unattended bag with his wallet, ID and a second recorder. The complaint also alleges a chatbot account associated with his spouse submitted prompts between September 24 and 30 about building, concealing and remotely accessing an encrypted audio recorder. FBI Director Kash Patel said the target was 'sensitive communications about the company's superintelligence technology.' OpenAI fired Alfozan the day of his arrest and says it has 'no indications' he accessed or exfiltrated model weights, source code or customer data — adding that it used its own AI models to identify him.",
      "why": "The AI industry's first insider-spying prosecution — and the lab used its own models to catch the insider.",
      "prediction": "Watch whether more labs disclose AI-assisted internal investigations — AI-powered insider surveillance is now a disclosed fact, not a rumor. And watch the detention hearing: Patel's 'superintelligence technology' framing invites the question of whether this stays a recording case or grows into a foreign-intelligence one.",
      "confidence": "high"
    },
    {
      "id": "ai-worm",
      "kicker": "03 / Safety",
      "title": "The worm that lives in your TV box",
      "body": "Anthropic's Frontier Red Team published research Monday warning that small AI models are 'months away' from being able to copy themselves across the cheap connected gadgets in your home — smart ovens, off-brand Android TV boxes, security cameras — forming a replicator with no central server and no off switch. To test it, researchers William Zhou and Daniel Freeman bought 15 off-brand Android TV boxes at about $55 each and ran Google's Gemma4-26B across them at a glacial 0.39 tokens per second. Of five open-weight models tested, exactly one — GLM-5.2, from Beijing-based Z.ai (formerly Zhipu AI) — managed full end-to-end replication in a simplified test: it spread to all eight contained nodes in four of five trials. The honest caveat, which Anthropic includes: the evaluation 'keeps the cyber-exploit element of the replication trivial,' so the results are an 'upper bound on real-world success' — no fully autonomous real-world spread has been demonstrated. If small models keep improving at their historical rate, the authors write, they'll match this capability by the end of this year. Anthropic's proposed defenses: model files moving between home devices leave network signatures ISPs can flag — during the Mirai botnet, the authors note, one provider's quarantine cleared 92% of infections within 14 days — plus stricter rules on default device passwords.",
      "why": "The first lab-published timeline for self-replicating AI: months, not years.",
      "prediction": "This paper becomes Exhibit A in every 2027 IoT-security regulation fight. Watch whether the 'no off switch' framing pushes ISPs and device makers into mandated hardening — and whether any real-world replicator shows up before the regulation does.",
      "confidence": "high"
    },
    {
      "id": "ai-defrost",
      "kicker": "04 / Infrastructure",
      "title": "When the freezers became the attack",
      "body": "Overnight Sunday into Monday, attackers remotely forced the refrigeration controllers in hundreds of French supermarkets into an extended defrost cycle — heating fridges and freezers to 50°C (122°F) for six to eight hours, spoiling vast quantities of fresh and frozen food and reportedly triggering fires at several locations. Intermarché says roughly 150 of its stores were hit; Coopérative U around 80 to 100; Carrefour 80 of its roughly 6,000 French supermarkets; Monoprix about 5% of its approximately 490 stores; E.Leclerc locations too. Investigators traced the attack to refrigeration-control software from Danish manufacturer Danfoss — the AK-SM and AK-SC series — running on outdated firmware; Danfoss says most affected units were legacy products that no longer receive security updates. CERT-FR, the incident-response arm of France's ANSSI cybersecurity agency, published an alert on October 12; the Paris prosecutor's office opened an investigation through its anti-cybercrime office, and Prime Minister Sébastien Lecornu ordered ANSSI onto the case. No group has claimed responsibility, and authorities are coordinating with European counterparts over whether similar systems elsewhere are exposed. Coopérative U's chief called the attack on food-preservation equipment 'unprecedented.' Intermarché's CEO estimates losses in the tens of millions of euros nationwide in a single day — an executive estimate, with verified industry totals still to come.",
      "why": "A cyberattack that melted the food supply — operational tech is the new attack surface.",
      "prediction": "This is the clearest case yet of a remote control channel turned against physical equipment, and businesses are wiring agents into exactly this kind of hardware. Watch for copycat hits on European retail chains — and for OT-security budgets to get very unpopular with CFOs, very fast.",
      "confidence": "high"
    }
  ],
  "world": [
    {
      "id": "world-pope",
      "kicker": "01 / Vatican",
      "title": "A cancer diagnosis at the top of the Church",
      "body": "Pope Leo XIV has lung cancer. The Vatican confirmed Tuesday that surgery at Rome's Gemelli hospital — removing the lower lobe of his right lung in a video-assisted procedure lasting about 90 minutes — confirmed lung adenocarcinoma, the most common form of non-small-cell lung cancer. The 71-year-old pontiff announced the nodule himself on Sunday, calling it localized and 'in a very initial phase'; the operation went ahead Tuesday under thoracic surgeon Stefano Margaritora and, per the Vatican, was 'successful, with no complications.' It is the first major medical procedure of a papacy that began in May 2025 — Leo is the first American-born pope. All public events are cancelled through October 20, with about a week of hospital recovery expected; the Vatican gave no details on the cancer's stage or whether chemotherapy or radiation will follow. The 11-day Latin America tour starting November 6 — Uruguay, Argentina, Peru — remains on the schedule for now.",
      "why": "The first serious health event of the first American papacy — with no deputy who steps in.",
      "prediction": "The November 6 tour is the real health barometer: a pope who flies to South America on schedule is a pope in recovery; a postponement starts the quiet succession conversation in earnest.",
      "confidence": "high"
    },
    {
      "id": "world-horn",
      "kicker": "02 / The Horn",
      "title": "Ethiopia and Eritrea, at the border again",
      "body": "Ethiopian government troops reached Zalambessa on Tuesday — a town of about 15,000 on Ethiopia's northernmost point, on the Eritrean border, previously held by Tigrayan rebels — as diplomats scrambled to keep the Horn of Africa's neighbors from open war. Witnesses and the conflict monitor ACLED say Eritrean troops crossed into Zalambessa last week in support of the rebels; Eritrea denies any incursion and has asked the UN to take deterrent measures against Ethiopia, calling Addis Ababa's accusations a 'declaration of war.' The fighting restarted September 23, when a rebel alliance led by the Tigray People's Liberation Front went on the offensive across Tigray, Amhara and Afar — reigniting a war that killed hundreds of thousands between 2020 and 2022. Ethiopia told the UN Security Council last week that Eritrean forces, including mechanized units, had pushed up to 60 km into northern Ethiopia; Eritrea calls that a pretext for aggression. ACLED reports Ethiopian drone strikes drove Eritrean forces back from positions near Adigrat last week.",
      "why": "Two armies, one border town, and a war that already killed hundreds of thousands once.",
      "prediction": "Zalambessa is the tripwire now. Watch whether Eritrea pushes back across — or whether the Red Sea tanker war pulls both capitals' attention seaward instead.",
      "confidence": "high"
    },
    {
      "id": "world-greenland",
      "kicker": "03 / The Arctic",
      "title": "'Our new and beautiful Greenland'",
      "body": "President Trump announced Wednesday that 'massive' oil, gas and mineral exploration is 'getting ready to begin' in Greenland, posting on Truth Social that unnamed experts say the island's easily available oil is 'far greater than that of almost any land, anywhere in the world.' He gave no details — no companies, no locations, no timeline. The announcement follows last month's US–Denmark–Greenland agreement, struck after Trump's repeated threats to take control of the island: it expands the American military presence — two new bases, a role in the 'Golden Dome' missile-defense system — while reaffirming Danish sovereignty and Greenlanders' right to self-determination. Trump framed the island as indispensable to US security: 'Any future attack on the United States will have to come across Greenland.' The commercial reality is thinner: any Arctic drilling would face steep technical, environmental and regulatory hurdles, and the exploration announcement itself names no operator and no start date.",
      "why": "From acquisition threats to extraction plans in a month — the Arctic is the new energy frontier.",
      "prediction": "The details are the whole story: watch which companies get named and whether Nuuk — not Washington — signs off. Until then, this is a Truth Social post, not a drilling program.",
      "confidence": "high"
    },
    {
      "id": "world-blacksea",
      "kicker": "04 / The Black Sea",
      "title": "A sunken ship, a summoned ambassador",
      "body": "Drone strikes on two merchant ships in the Black Sea overnight Tuesday sank one vessel and left 11 sailors missing. The Guinea-Bissau-flagged HS Dignity went down about 15 nautical miles east of the Bulgarian village of Krapets — five of its 16 crew, believed to be Syrian and Egyptian nationals, were rescued; the search for the other 11 continues. The Maltese-flagged, Ukrainian-owned Chelsea 3 was hit by three drones off Byala; all 15 crew — seven Ukrainians and eight Azerbaijanis — were rescued, some with minor injuries. Both attacks happened inside Bulgaria's exclusive economic zone, outside its territorial waters. Prime Minister Rumen Radev summoned Russia's ambassador, said Moscow was suspected and that the strikes 'benefit the Russian Federation' — while stopping short of formally blaming Russia, saying conclusive evidence hasn't been presented. Ukraine blamed Russia directly; EU Commission President Ursula von der Leyen called the Black Sea 'another front of escalation.' Russia has not publicly commented. It was the second deadly sinking in a week: a week earlier, the Alfa Watan sank with all 10 crew — nine Syrians — presumed dead.",
      "why": "A NATO member's ambassador summons over civilian shipping — the war's maritime front is widening.",
      "prediction": "Watch insurance rates for Black Sea routes and whether NATO converts the ambassador summons into a maritime-security operation — the next attack decides whether this is an incident or a campaign.",
      "confidence": "high"
    }
  ],
  "explainers": [
    {
      "id": "expl-argon",
      "term": "Gemini 4 Argon",
      "field": "Technology",
      "body": "Google's new frontier model, launched October 13 — the first of the Gemini 4 family. Its pitch is depth: multi-step work across coding, finance, legal, cybersecurity and science, where it ranks #1 on the Vals Index. The launch price — $2 per million input tokens, $10 output through November 30, then doubling — sits at exactly half of Claude Opus 5.5 and a fifth of GPT-6 Astra: Google is buying market share, with a calendar on the offer."
    },
    {
      "id": "expl-worm",
      "term": "Self-replicating AI (the AI worm)",
      "field": "Cybersecurity",
      "body": "A program that copies itself from device to device with no central server — a replicator. Anthropic's Frontier Red Team warns small AI models are months from pulling it off across home gadgets like TV boxes and smart ovens: unlike ordinary malware, an AI replicator could figure out unfamiliar devices on its own, and with no central point to shut off, it would be slow — doubling in days — but stubborn. The report is a forecast with a built-in caveat: the cyber-exploit step was simplified in testing, so the timeline is an upper bound."
    },
    {
      "id": "expl-recording",
      "term": "Interception of oral communications",
      "field": "Security",
      "body": "The federal charge filed against OpenAI engineer Abdulrahman Alfozan: using or attempting to use a device to secretly record people's spoken conversations. It carries up to five years in prison and a $250,000 fine. The charge is about recording — not espionage, which prosecutors have not charged — but the FBI director's framing ('superintelligence technology') shows what the government thinks was at stake."
    },
    {
      "id": "expl-pope",
      "term": "Adenocarcinoma",
      "field": "Health",
      "body": "A cancer that starts in glandular cells — in this case, the lungs. It is the most common type of non-small-cell lung cancer, and the diagnosis Pope Leo XIV's team confirmed after removing the lower lobe of his right lung. The Vatican has not disclosed the cancer's stage or whether it has spread, which is why every prognosis you read this week is speculation."
    },
    {
      "id": "expl-greenland",
      "term": "Sovereignty",
      "field": "Geopolitics",
      "body": "The right of a state to govern itself — the word doing the heaviest lifting in the Greenland story. The US–Denmark–Greenland agreement explicitly reaffirms Danish sovereignty and Greenlanders' right to self-determination, even as Washington expands its military footprint and Trump announces 'massive' exploration. The tension between those two sentences is the whole Arctic question: who decides what gets drilled, and who gets paid."
    },
    {
      "id": "expl-defrost",
      "term": "Forced defrost",
      "field": "Cybersecurity",
      "body": "A normal refrigeration cycle, run in reverse: fridges periodically warm briefly to melt ice buildup. The French supermarket attackers forced that cycle to run for six to eight hours at 50°C — turning the equipment's own maintenance function into the weapon. It is a pattern to remember: the most damaging hacks don't break the machine, they make it misbehave."
    },
    {
      "id": "expl-ambassador",
      "term": "Summoning the ambassador",
      "field": "Geopolitics",
      "body": "A formal diplomatic protest: a foreign ministry calls in another country's ambassador to deliver a complaint face to face. Bulgaria summoned Russia's envoy Eleonora Mitrofanova after the Black Sea drone strikes — a step short of expelling her, but a public signal that Sofia holds Moscow responsible even without presenting conclusive evidence. It is diplomacy's raised voice, not its slammed door."
    }
  ],
  "culturalMoves": [
    {
      "id": "culture-argon",
      "label": "Read · 5 min",
      "body": "The launch detail that matters: Google's own comparison table has Argon leading in 14 of 18 benchmarks, tying GPT-6 on cybersecurity — and the $2/$10 intro price expires November 30.",
      "url": "https://www.cryptopolitan.com/google-gemini-4-argon-openai-anthropic-price/",
      "linkLabel": "Read the launch breakdown"
    },
    {
      "id": "culture-worm",
      "label": "Read · 4 min",
      "body": "The AI worm warning, explained: 15 off-brand TV boxes at $55 each, a model crawling at 0.39 tokens per second — and the one open-weight model that completed the full replication cycle.",
      "url": "https://en.softonic.com/articles/anthropic-warns-tiny-ai-models-could-soon-turn-gadgets-into-self-spreading-worms",
      "linkLabel": "Read the research summary"
    },
    {
      "id": "culture-pope",
      "label": "Read · 3 min",
      "body": "USA Today on the Pope's surgery: the Sunday announcement, the 90-minute operation, and the November 6 Latin America tour that is now the health barometer.",
      "url": "https://www.usatoday.com/story/news/world/2026/10/13/pope-leo-diagnosed-with-lung-cancer-successful-surgery/92237630007/",
      "linkLabel": "Read the USA Today report"
    },
    {
      "id": "culture-iter",
      "label": "For THE ĪTER",
      "body": "Anthropic warns of machines that copy themselves with no off switch. Write about the smallest system that runs without you: the fridge that hums all night, the phone that updates while you sleep. Who is really in charge of it — you, or the default settings? 300 unedited words."
    }
  ],
  "financialMoves": [
    {
      "id": "finance-concept",
      "label": "One concept",
      "body": "Today's CPI is really two numbers. The headline rate — expected around 3.6% year-on-year, up from 3.4%, with a 0.6% monthly jump — is mostly an energy story: gasoline and diesel pass-through from months of elevated crude. The core rate — expected 2.5% year-on-year, 0.2% on the month — strips out food and energy and is the number the Fed actually decides on. A 1.1-point gap between the two would be the widest of this cycle, and the clearest signal that this inflation is supply-driven — the kind rate hikes handle poorly. When the print lands at 12:30 GMT, read the core line first."
    },
    {
      "id": "finance-week",
      "label": "This week",
      "body": "September CPI lands today at 8:30am ET (12:30 GMT) — the last inflation reading before the Fed's October 27–28 meeting. Markets price only about 17% odds of a hike this month but roughly 80% by December; the 10-year Treasury sits around 5.2%, down from its early-October high near 5.35%. Thursday brings September PPI and retail sales; Friday, Fed Chair Warsh speaks at the IMF annual meeting. China's September data came in split: consumer prices up 0.9% year-on-year, still well below the 2% target, while producer prices rose 5.0% — the highest since 2022 — on mining and raw materials. And today's number also sets the 2027 Social Security cost-of-living adjustment: forecasts cluster around 3.5%, up from 2.8% this year."
    },
    {
      "id": "finance-watch",
      "label": "Watch",
      "body": "Whether today's core print comes in at 0.2% or 0.3% on the month — that is the difference between a December hike and an October surprise. Whether Trump names any actual companies, locations, or dates for the Greenland exploration. Whether NATO or the EU moves from statements to ships after the Bulgaria ambassador summons. And Brazil's runoff on October 25: Flávio Bolsonaro vs. Lula in a dead heat, with 250 billion reais of austerity on the ballot."
    }
  ],
  "words": [
    {
      "id": "w1",
      "word": "ARGON",
      "scramble": "GOANR",
      "definition": "Google's new frontier model — half the price of Opus 5.5, until November 30.",
      "explainerId": "expl-argon"
    },
    {
      "id": "w2",
      "word": "INTERCEPTION",
      "scramble": "TINRPTONECIE",
      "definition": "The charge against OpenAI's engineer: bugging an executive conference room.",
      "explainerId": "expl-recording"
    },
    {
      "id": "w3",
      "word": "REPLICATOR",
      "scramble": "LIORETPRCA",
      "definition": "A program that copies itself across your TV boxes — Anthropic's warning.",
      "explainerId": "expl-worm"
    },
    {
      "id": "w4",
      "word": "ADENOCARCINOMA",
      "scramble": "NIACRNOMEOAADC",
      "definition": "The Pope's diagnosis — the most common non-small-cell lung cancer.",
      "explainerId": "expl-pope"
    },
    {
      "id": "w5",
      "word": "SOVEREIGNTY",
      "scramble": "EIRGYONSTVE",
      "definition": "What Denmark keeps while America drills — the Greenland deal's key word.",
      "explainerId": "expl-greenland"
    },
    {
      "id": "w6",
      "word": "DEFROST",
      "scramble": "FDTSROE",
      "definition": "The cycle hackers forced French supermarket fridges into — at 50°C.",
      "explainerId": "expl-defrost"
    },
    {
      "id": "w7",
      "word": "AMBASSADOR",
      "scramble": "MAAOADSRSB",
      "definition": "Who Bulgaria summoned after drones sank a ship off its coast.",
      "explainerId": "expl-ambassador"
    }
  ],
  "quizQuestions": []
};
