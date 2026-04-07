# Assignment A — Extend the Dashboard

The dashboard app has 3 live widgets already built (**Next.js GitHub Stars**, **Random Cat Fact**, **Bitcoin Price**) — see `src/app/page.tsx` for the component names. Your job is to implement the **three empty cards** (Weather, Crypto, News) using public APIs — no auth, no API keys needed for the core tasks.

## Get started

```bash
cd assignment-a-dashboard-app
npm install
npm run dev
# Open http://localhost:3000
```

Study the existing widgets in `src/app/page.tsx` before you start — they're your pattern.

---

## If you want a reference solution

If you want to compare your implementation against a working version, check out the solutions branch:

```bash
git switch workshop-solutions
open assignment-a-dashboard-app/src/app/page.tsx
git switch main
```

### Workshop fit (why this is before “best practices”)

This track is heavy on **integration and constraints** (server components, API shapes, pushing back on bad suggestions). You may still hit **wrong files**, **hallucinated endpoints**, or **over-eager `'use client'`** — that friction is what Part 3’s **context** and **prompting** slides refer to.

The sample prompts below are **already specific** on purpose: notice they name the **file**, the **API**, and the **pattern** to copy. If you only copy-paste them, pay attention to *that shape* — Part 3 unpacks why it beats vague asks like “add a weather widget.”

**Optional struggle (5 min):** For *one* widget only, try a deliberately vague prompt first (e.g. “add weather”), see what goes wrong, then retry using the structured prompt in this doc — you’ll feel the same ideas before they’re named.

---

## Tasks

### 1. Weather Overview card

API: [Open-Meteo](https://open-meteo.com/) — no key required.

Ask Claude to implement a Weather Overview card that shows current temperature and weather condition for a fixed location (e.g. Amsterdam). Tell it to look at the existing widgets for the data-fetching pattern to follow.

> "Implement the Weather Overview card in src/app/page.tsx. Use the Open-Meteo API (no key needed). Follow the same server component pattern as the existing widgets."

### 2. Crypto Markets card

API: [CoinGecko public API](https://www.coingecko.com/en/api) — no key required.

Show current price + 24h change for BTC, ETH, and SOL.

> "Add a Crypto Markets card using the CoinGecko API. Show BTC, ETH, SOL with current price and 24h % change. Color the change green/red."

### 3. News Headlines card

API: [Hacker News Algolia API](https://hn.algolia.com/api) — no key required.

Show the top 5 current HN stories with title and score.

> "Add a News Headlines card showing the top 5 Hacker News stories from the Algolia HN API. Show title and score, link to the story."

---

## Tips

- Copy the structure of the existing widgets (`GitHubStarsWidget`, `CatFactWidget`, `BitcoinPriceWidget`) — async server components with sensible error handling.
- All new widgets should stay **React Server Components** — fetch at render time; no `useEffect` / `useState` unless you deliberately choose a client-only approach (you shouldn’t need to).
- If the AI tries to add `'use client'`, push back: *"Keep this as a server component."*
- Wrap `fetch` in `try/catch` so a failed API doesn’t break the whole page; optional: `next: { revalidate: 60 }` on fetches to cache for 60s.
- The Open-Meteo base URL is `https://api.open-meteo.com/v1/forecast`.
- CoinGecko endpoint: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true`

---

## Bonus

- **Requests Table** — add a table below the widgets showing simulated recent API requests with timestamp, endpoint, and status code. Use static/mock data.
- **Sparkline chart** — install `recharts` and add a mini price chart to the Crypto card showing the last 7 days. Ask Claude to use the CoinGecko `/market_chart` endpoint.
