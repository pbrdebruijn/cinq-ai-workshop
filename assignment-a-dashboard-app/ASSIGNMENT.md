# Assignment A — Extend the Dashboard

You have a partially-built Next.js analytics dashboard. Three widgets are already working — use them as patterns to implement the three empty cards below.

## Get started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

Open `src/app/page.tsx`. Each empty card has a `<Placeholder>` that tells you which API to use.

---

## Tasks

### 1. Weather Overview card
Use the [Open-Meteo API](https://open-meteo.com/en/docs) — no API key required.

```
GET https://api.open-meteo.com/v1/forecast
    ?latitude=52.37&longitude=4.89&current_weather=true
```

Show the current temperature and wind speed for Amsterdam.

### 2. Crypto Markets card
Use the [CoinGecko API](https://docs.coingecko.com/reference/simple-price) — no API key required.

```
GET https://api.coingecko.com/api/v3/simple/price
    ?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true
```

Show BTC, ETH, and SOL with their price and 24h change. Colour the change green if positive, red if negative.

### 3. News Headlines card
Use the [Hacker News Algolia API](https://hn.algolia.com/api) — no API key required.

```
GET https://hn.algolia.com/api/v1/search?tags=front_page
```

Show the top 5 story titles as clickable links.

---

## Tips

- Copy the structure of `GitHubStarsWidget`, `CatFactWidget`, or `BitcoinPriceWidget` — they show the correct pattern for async server components with error handling.
- Wrap every `fetch` in a `try/catch` so a failed API call doesn't break the build.
- Use `next: { revalidate: 60 }` in your fetch options to cache responses for 60 seconds.

---

## Bonus

- **Requests Table** — Fetch open issues from `https://api.github.com/repos/vercel/next.js/issues` and display them in a sortable table using `@tanstack/react-table`.
- **Sparkline chart** — Install `recharts` and add a small line chart showing the last 7 days of Bitcoin price (use the CoinGecko `/market_chart` endpoint).
