# Workshop Dashboard App

A partially-built Next.js analytics dashboard used in the **Cinq ICT AI Developer Tools Workshop** (Assignment A).

Three widgets are already implemented and fetch live data from public APIs — use them as patterns to build the three empty cards during the assignment.

## Stack

- Next.js 15 · App Router · TypeScript
- Tailwind CSS
- Public HTTP APIs — no auth required

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/app/page.tsx   — all widgets and the page layout live here
```

Existing widgets (reference patterns):
- `GitHubStarsWidget` — GitHub REST API
- `CatFactWidget` — catfact.ninja
- `BitcoinPriceWidget` — Coindesk API

Empty slots to implement:
- Weather Overview — Open-Meteo API
- Crypto Markets — CoinGecko API
- News Headlines — Hacker News Algolia API

## Assignment

See [ASSIGNMENT.md](./ASSIGNMENT.md) for tasks, API details, and bonus challenges.
