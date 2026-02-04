# 🏓 DinkDrills — AI-Powered Pickleball Training Plans

Generate personalized pickleball training plans based on your DUPR rating, skill gaps, schedule, and goals.

**Live:** [dinkdrills.vercel.app](https://dinkdrills.vercel.app)

## Features

- **3-step plan generator** — skill level → weaknesses → schedule → personalized plan
- **30+ real drills** covering: dinking, drives, serves, volleys, drops, lobs, footwork, strategy, transitions, resets
- **DUPR-calibrated** — drills filtered by skill range (2.0–6.0)
- **Youth support** — age-appropriate drills for players 5–18
- **4 goal modes** — recreational, competitive, DUPR improvement, youth development
- **No signup required** — instant plan generation

## Tech Stack

- Next.js 15 + TypeScript
- Tailwind CSS 4
- Deterministic plan generation engine (zero external API costs)
- 19 passing tests (Jest + ts-jest)

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # 19 tests
npm run build   # production build
```

## API

```bash
POST /api/generate-plan
{
  "rating": 3.5,
  "weaknesses": ["dinking", "drops"],
  "timePerSession": 60,
  "daysPerWeek": 3,
  "goal": "competitive",
  "isYouth": false,
  "age": null
}
```

## Roadmap

- [ ] DUPR API integration for auto-rating
- [ ] Video drill library with embedded tutorials
- [ ] Progress tracking & session logging
- [ ] Subscription model (Pro plans)
- [ ] Academy management features (multi-student plans)
