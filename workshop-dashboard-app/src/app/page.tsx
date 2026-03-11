export default async function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-amber-300">
              Workshop Analytics Dashboard
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              A small Next.js dashboard with a few live widgets and empty slots
              to fill during the workshop.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-xs">
            <p className="text-zinc-400">
              Stack:{" "}
              <span className="font-semibold text-zinc-100">
                Next.js 16 &middot; App Router &middot; Tailwind
              </span>
            </p>
            <p className="text-zinc-500">
              Data from public HTTP APIs (no auth required).
            </p>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <Card title="Next.js GitHub Stars" description="Live data from GitHub API">
            <GitHubStarsWidget />
          </Card>

          <Card title="Random Cat Fact" description="Fun filler widget using catfact.ninja">
            <CatFactWidget />
          </Card>

          <Card
            title="Bitcoin Price (USD)"
            description="From Coindesk public price API"
          >
            <BitcoinPriceWidget />
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card
            title="Weather Overview"
            description="To be implemented: call a weather API"
            empty
          >
            <Placeholder>
              For example, use{" "}
              <code className="rounded bg-zinc-800 px-1 py-0.5 text-[10px]">
                api.open-meteo.com
              </code>{" "}
              to show current temperature in Amsterdam.
            </Placeholder>
          </Card>

          <Card
            title="Crypto Markets"
            description="To be implemented: small list of coins"
            empty
          >
            <Placeholder>
              Use{" "}
              <code className="rounded bg-zinc-800 px-1 py-0.5 text-[10px]">
                api.coingecko.com
              </code>{" "}
              to show 3 coins with price and 24h change.
            </Placeholder>
          </Card>

          <Card
            title="News Headlines"
            description="To be implemented: simple list widget"
            empty
          >
            <Placeholder>
              Use a public news API (for example{" "}
              <a
                href="https://hn.algolia.com/api"
                className="underline decoration-amber-300/60 decoration-2 underline-offset-2"
              >
                Hacker News Search API
              </a>
              ) to render a few top headlines.
            </Placeholder>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-[2fr,3fr]">
          <Card
            title="API Call Timeline"
            description="To be implemented: small chart or log"
            empty
          >
            <Placeholder>
              Ideal for adding a small chart component (e.g.{" "}
              <code className="rounded bg-zinc-800 px-1 py-0.5 text-[10px]">
                recharts
              </code>
              ) or a list that shows last N successful fetches.
            </Placeholder>
          </Card>

          <Card
            title="Requests Table"
            description="To be implemented: tabular data view"
            empty
          >
            <Placeholder>
              Use any of the above APIs to build a sortable table (e.g. GitHub
              issues, crypto assets, or weather history).
            </Placeholder>
          </Card>
        </section>
      </main>
    </div>
  );
}

type CardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  empty?: boolean;
};

function Card({ title, description, children, empty }: CardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-sm shadow-black/40">
      <header className="mb-3">
        <h2 className="text-sm font-semibold text-zinc-100">{title}</h2>
        {description ? (
          <p className="mt-1 text-[11px] text-zinc-500">{description}</p>
        ) : null}
      </header>
      <div
        className={`flex-1 text-xs ${
          empty ? "text-zinc-500" : "text-zinc-100"
        }`}
      >
        {children}
      </div>
    </article>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-950/40 p-3 text-center text-[11px] text-zinc-500">
      {children}
    </div>
  );
}

async function GitHubStarsWidget() {
  let data:
    | {
        stargazers_count?: number;
        forks_count?: number;
        open_issues_count?: number;
      }
    | null = {
    stargazers_count: undefined,
    forks_count: undefined,
    open_issues_count: undefined,
  };

  try {
    const res = await fetch("https://api.github.com/repos/vercel/next.js", {
      // This is static enough that we can revalidate infrequently.
      next: { revalidate: 60 },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) {
      return (
        <p className="text-[11px] text-red-300">
          Failed to load GitHub data (status {res.status})
        </p>
      );
    }

    data = (await res.json()) as typeof data;
  } catch (error) {
    return (
      <p className="text-[11px] text-red-300">
        Could not reach api.github.com. Showing placeholder data only.
      </p>
    );
  }

  return (
    <div className="mt-1 text-xs text-zinc-100">
      <p className="text-2xl font-semibold text-amber-300">
        {data?.stargazers_count?.toLocaleString("en-US") ?? "–"}
      </p>
      <p className="mt-1 text-[11px] text-zinc-400">Stars on vercel/next.js</p>
      <div className="mt-3 flex gap-3 text-[11px] text-zinc-400">
        <span>
          Forks: {data?.forks_count?.toLocaleString("en-US") ?? "–"}
        </span>
        <span>
          Open issues:{" "}
          {data?.open_issues_count?.toLocaleString("en-US") ?? "–"}
        </span>
      </div>
    </div>
  );
}

async function CatFactWidget() {
  let data: { fact?: string } | null = { fact: undefined };

  try {
    const res = await fetch("https://catfact.ninja/fact", {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return (
        <p className="text-[11px] text-red-300">
          Could not load cat fact (status {res.status})
        </p>
      );
    }

    data = (await res.json()) as typeof data;
  } catch (error) {
    return (
      <p className="text-[11px] text-red-300">
        Could not reach catfact.ninja. Showing placeholder text.
      </p>
    );
  }

  return (
    <p className="mt-1 text-[11px] leading-relaxed text-zinc-200">
      {data?.fact ?? "No fact available right now."}
    </p>
  );
}

async function BitcoinPriceWidget() {
  let data:
    | {
        bpi?: { USD?: { rate_float?: number } };
        time?: { updated?: string };
      }
    | null = {
    bpi: undefined,
    time: undefined,
  };

  try {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice/USD.json",
      { next: { revalidate: 60 } },
    );

    if (!res.ok) {
      return (
        <p className="text-[11px] text-red-300">
          Failed to load BTC price (status {res.status})
        </p>
      );
    }

    data = (await res.json()) as typeof data;
  } catch (error) {
    return (
      <p className="text-[11px] text-red-300">
        Could not reach api.coindesk.com. Showing placeholder price.
      </p>
    );
  }

  const price = data?.bpi?.USD?.rate_float;

  return (
    <div className="mt-1 text-xs">
      <p className="text-2xl font-semibold text-emerald-300">
        {price ? `$${price.toFixed(2)}` : "–"}
      </p>
      <p className="mt-1 text-[11px] text-zinc-400">
        BTC / USD (Coindesk)
      </p>
      {data?.time?.updated ? (
        <p className="mt-1 text-[10px] text-zinc-500">
          Last updated: {data.time.updated}
        </p>
      ) : null}
    </div>
  );
}
