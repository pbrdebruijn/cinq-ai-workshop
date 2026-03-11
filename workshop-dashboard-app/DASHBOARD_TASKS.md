## Workshop Dashboard App – Extension Tasks

This Next.js app (`workshop-dashboard-app`) is a **partially built analytics dashboard**.  
Some widgets already use public APIs; several cards are intentionally left empty so participants can add features with the help of AI coding tools.

The main entry point is:

- `src/app/page.tsx`

Run the app:

- `cd workshop-dashboard-app`
- `npm run dev`
- Open `http://localhost:3000`

---

## Existing API-backed widgets

These are already implemented and can be used as reference patterns.

### 1. GitHub stars widget

- **Location in code**: `GitHubStarsWidget` in `src/app/page.tsx`
- **API**:
  - `GET https://api.github.com/repos/vercel/next.js`
  - No auth required for low-volume workshop usage.
- **What it shows**:
  - `stargazers_count`
  - `forks_count`
  - `open_issues_count`
- **Notes**:
  - Uses `fetch` in a server component with `next: { revalidate: 60 }`.
  - Wraps network calls in `try/catch` so builds don’t fail if GitHub is unreachable.

### 2. Random cat fact widget

- **Location in code**: `CatFactWidget`
- **API**:
  - `GET https://catfact.ninja/fact`
- **What it shows**:
  - A short, random cat fact.
- **Notes**:
  - Great minimal example of fetching JSON and rendering a single field.

### 3. Bitcoin price widget

- **Location in code**: `BitcoinPriceWidget`
- **API**:
  - `GET https://api.coindesk.com/v1/bpi/currentprice/USD.json`
- **What it shows**:
  - `bpi.USD.rate_float` formatted as a USD price.
  - Optional “last updated” timestamp.

---

## Tasks: Implement the empty widgets

Each card marked as “To be implemented” is a workshop exercise.  
Below are suggested APIs and step-by-step guidance.

### Task A – Weather Overview card

- **UI card title**: “Weather Overview”
- **Suggested API**: [Open-Meteo](https://open-meteo.com/en/docs)
  - Example endpoint (no API key, Amsterdam coordinates):
  - `GET https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&current_weather=true`
- **Goal**:
  - Show current temperature and wind speed for Amsterdam.
- **Suggested steps**:
  1. Create a new async server component function, e.g. `WeatherWidget`.
  2. Use `fetch` to call the Open-Meteo endpoint.
  3. Parse `current_weather.temperature` and `current_weather.windspeed`.
  4. Render them inside the Weather card instead of the `Placeholder`.
  5. Add error handling (`try/catch`) so the dashboard still builds when offline.

### Task B – Crypto Markets card

- **UI card title**: “Crypto Markets”
- **Suggested API**: [CoinGecko public API](https://www.coingecko.com/en/api/documentation)
  - Simple, no-auth endpoint for a few coins:
  - `GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true`
- **Goal**:
  - Render a small list of 3 coins (BTC, ETH, SOL) with:
    - Current USD price
    - 24h percentage change (colour-coded up/down).
- **Suggested steps**:
  1. Add a `CryptoMarketsWidget` server component.
  2. Call the CoinGecko endpoint above.
  3. Map over the returned object to build a list.
  4. Use Tailwind classes to highlight positive vs negative 24h change.
  5. Optionally format numbers (`toFixed`, `toLocaleString`).

### Task C – News Headlines card

- **UI card title**: “News Headlines”
- **Suggested API**: [Hacker News Algolia Search API](https://hn.algolia.com/api)
  - Example endpoint (top front page stories):
  - `GET https://hn.algolia.com/api/v1/search?tags=front_page`
- **Goal**:
  - Show the top 5 headlines with links.
- **Suggested steps**:
  1. Add a `NewsHeadlinesWidget` server component.
  2. Parse `hits` array from the API response.
  3. Render a list of titles that link to `url` (fallback to HN item link if `url` missing).
  4. Keep text compact so it fits nicely in the card.

### Task D – API Call Timeline card

- **UI card title**: “API Call Timeline”
- **Suggested idea**:
  - Use any of the above APIs (or a mock endpoint) to build a *time series* or simple activity log.
- **Variant 1 – Simple log (no charts)**:
  - Show a list like:
    - “12:01 – Fetched GitHub stars”
    - “12:03 – Fetched BTC price”
  - Data source: can be hard-coded or generated on the server for workshop purposes.
- **Variant 2 – Chart-based**:
  - Install `recharts` and add a tiny sparkline for BTC price or temperature.
  - Good exercise in:
    - Adding a dependency
    - Creating a separate chart component file
    - Passing data in as props.

### Task E – Requests Table card

- **UI card title**: “Requests Table”
- **Goal**:
  - Build a small, sortable table that displays structured data from any of the APIs.
- **Suggested data sources**:
  - GitHub issues for `vercel/next.js`  
    `GET https://api.github.com/repos/vercel/next.js/issues?per_page=10`
  - Or: top Hacker News items from the News widget.
- **Suggested steps**:
  1. Add a `RequestsTableWidget` component.
  2. Fetch data and normalise it into an array of rows (id, title, status, date).
  3. Render a simple `<table>` styled with Tailwind.
  4. Optional: implement client-side sort buttons (would require a small `use client` wrapper component).

---

## Example prompts for participants

These are good starting prompts for Cursor / Claude Code:

- **Weather card**:
  - “In `src/app/page.tsx`, implement the Weather Overview card using the Open-Meteo API to show current temperature and wind speed for Amsterdam.”
- **Crypto card**:
  - “Using CoinGecko’s simple price API, add a `CryptoMarketsWidget` to show BTC, ETH, and SOL prices and 24h change in the Crypto Markets card.”
- **News card**:
  - “Wire up the News Headlines card to the Hacker News Algolia API and render the top 5 front page stories as links.”
- **Timeline / table**:
  - “Add a small requests table component in the Requests Table card that lists the last 10 GitHub issues for `vercel/next.js`, including title and state.”

Facilitators can encourage participants to:

- Ask the agent to **explain** the existing widgets first.
- Have the agent propose an implementation plan.
- Let the tool write the first version, then iterate on styling and behaviour.

