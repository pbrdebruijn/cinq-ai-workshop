# Assignment C — MCP Power Tools

MCP (Model Context Protocol) servers give Claude access to external tools — live documentation, GitHub, your filesystem — directly inside a conversation. This assignment shows you what changes when you wire them up.

## Prerequisites

- Claude Code installed and working (`claude --version`)
- Node.js 18+ (for running MCP servers via `npx`)
- A GitHub Personal Access Token with `repo` and `read:org` scopes (for Task 3 — skip if you don't have one)

---

## Tasks

### 1. Add the context7 MCP server

context7 fetches up-to-date documentation for popular libraries at query time.

```bash
claude mcp add context7 npx -- -y @upstash/context7-mcp
```

Verify it registered:

```bash
claude mcp list
```

### 2. Compare answers with and without live docs

**Without MCP** — start a fresh Claude Code session and ask:
> "How do I use the `next/font` package to load a Google Font in a Next.js App Router project?"

Note the answer. Close the session.

**With MCP** — open a new session and ask the same question. Claude will call context7 to fetch the current Next.js docs before answering.

Compare: is the answer more accurate? Does it cite a specific doc page?

### 3. Add the GitHub MCP server *(skip if no PAT)*

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN=<your-pat>
claude mcp add github npx -- -y @modelcontextprotocol/server-github
```

Ask Claude:
> "List the 5 most recently updated open issues on vercel/next.js and give me a one-line summary of each."

### 4. Use MCP to implement a dashboard widget

Open `workshop-dashboard-app` in Claude Code. Pick one of the remaining empty widget slots and ask Claude to implement it, but this time tell it to use context7 to look up the correct API first:

> "Use context7 to look up the Open-Meteo API docs, then implement the Weather Overview card in src/app/page.tsx."

---

## Tips

- Each `claude mcp add` command persists globally — you only need to run it once.
- If a tool call is denied, check `claude mcp list` to confirm the server name matches.
- `context7` works best with library-specific questions ("how do I do X in Next.js 15") rather than general ones.

---

## Bonus

- Add the **filesystem MCP** (`@modelcontextprotocol/server-filesystem`) scoped to your home directory and ask Claude to summarise the structure of one of the workshop apps without using any file-reading prompts — let MCP do the exploration.
- Configure the same servers in **Cursor** via `.cursor/mcp.json` and repeat Task 2. Which tool handles MCP context better?
