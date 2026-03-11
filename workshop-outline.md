# AI Developer Tools Workshop - Cinq ICT

## Workshop Overview

| Time | Session |
|------|---------|
| 15 min | IDE Comparison: Cursor vs Claude Code |
| 45 min | Guided Assignment |
| 15 min | Best Practices & Tips |
| 45 min | Open Assignment (own project) |

---

## Session 1: IDE Comparison (15 min)

### Cursor

**What it is**: VS Code fork with AI deeply integrated into the editor experience.

**Key features**:
- **Tab completion**: Autocomplete on steroids, predicts multi-line changes
- **Cmd+K**: Inline editing with natural language
- **Composer**: Multi-file changes in one go
- **Chat panel**: Codebase-aware conversations with @-mentions

**Recent changes (late 2024 - early 2025)**:
- Agent mode in Composer (autonomous multi-step execution)
- Background agents (run tasks asynchronously)
- Improved context with @-mentions (@codebase, @web, @docs)
- Rules files (`.cursorrules`) for project-specific behavior
- Better memory and context retention

---

### Claude Code

**What it is**: Terminal-based agentic coding assistant that works alongside any editor.

**Key features**:
- Runs in terminal, editor-agnostic
- Autonomous file editing and command execution
- Deep codebase exploration and understanding
- Git integration (commits, PRs, branches)
- Plan mode for complex architectural tasks

**Recent changes**:
- MCP (Model Context Protocol) server support
- Hooks system for automation and guardrails
- Background agents for long-running tasks
- Custom slash commands
- Improved context management and summarization

---

### When to Use Which

| Cursor | Claude Code |
|--------|-------------|
| Quick edits, autocomplete | Large refactors, greenfield projects |
| Visual diff review preferred | Comfortable with terminal workflows |
| Tight editor integration needed | Complex multi-step autonomous tasks |
| Smaller, focused changes | Full-stack scaffolding |

**They work great together**: Use Claude Code for big changes, Cursor for refinement.

---

## Session 2: Guided Assignment Options (45 min)

Choose one of the following assignments for participants.

---

### Option A: Extend the Dashboard

**Goal**: Implement the empty widget slots in an existing partially-built analytics dashboard.

**Starting point**: Provided repo — `workshop-dashboard-app`

```bash
cd workshop-dashboard-app
npm run dev
# Open http://localhost:3000
```

**Context**: The app already has 3 live widgets (GitHub Stars, Cat Fact, Bitcoin Price). Participants implement the empty placeholder cards using public APIs — no auth required.

**Requirements**:
1. Implement **Weather Overview** card — [Open-Meteo API](https://open-meteo.com/en/docs)
   - `GET https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&current_weather=true`
   - Show current temperature and wind speed for Amsterdam
2. Implement **Crypto Markets** card — [CoinGecko API](https://www.coingecko.com/en/api)
   - `GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true`
   - Show BTC, ETH, SOL with price and colour-coded 24h change
3. Implement **News Headlines** card — [Hacker News Algolia API](https://hn.algolia.com/api)
   - `GET https://hn.algolia.com/api/v1/search?tags=front_page`
   - Show top 5 story titles as links
4. *(Optional)* **Requests Table** — GitHub issues for `vercel/next.js`
5. *(Optional)* **API Call Timeline** — sparkline chart with `recharts`

**Evaluation criteria**:
- Did the AI understand the existing server component patterns and replicate them?
- Correct use of `try/catch` so the build survives network errors
- Tailwind styling consistent with existing cards

**Example prompts**:
- `"In src/app/page.tsx, implement the Weather Overview card using the Open-Meteo API to show current temperature and wind speed for Amsterdam."`
- `"Using CoinGecko's simple price API, add a CryptoMarketsWidget to show BTC, ETH, and SOL prices and 24h change in the Crypto Markets card."`

---

### Option B: Debug the Todo App

**Goal**: Find and fix 3 intentional bugs in a provided Next.js todo application.

**Starting point**: Provided repo — `workshop-todo-app`

```bash
cd workshop-todo-app
npm run dev
# Open http://localhost:3000
```

**Context**: The app is a working-looking todo list, but has 3 logic bugs hidden in `src/app/page.tsx`. Participants use AI tools to discover and fix them.

**The 3 bugs** (for facilitators — don't reveal upfront):
1. **Active filter** — shows `completed` todos instead of active ones (wrong boolean condition)
2. **Delete** — uses array index instead of todo `id`, so it deletes the wrong item after any reordering
3. **Clear completed** — keeps completed todos and removes active ones instead of the reverse

**Requirements**:
1. Reproduce each bug by using the app
2. Use AI to trace the root cause in the code (describe the symptom, @-mention the file)
3. Apply the fix with AI assistance, verify the behaviour
4. Document what was wrong (a short comment or commit message)
5. *(Bonus)* Add `localStorage` persistence so todos survive a page refresh
6. *(Bonus)* Add an inline "Edit" feature to rename a todo

**Evaluation criteria**:
- How accurately did the AI diagnose the bugs from a symptom description?
- Quality of the AI's explanation vs just the fix
- How much manual guidance was needed to reach the correct fix?

---

### Option C: API Search App

**Goal**: Build a search interface around a public API using Next.js Server Actions.

**Starting point**: Fresh Next.js app (`npx create-next-app@latest`)

**API choices** (pick one):
- Movies: [OMDB API](https://www.omdbapi.com/) (free API key)
- Weather: [Open-Meteo](https://open-meteo.com/) (no key)
- Crypto: [CoinGecko](https://www.coingecko.com/en/api) (no key)
- News: [Hacker News Search API](https://hn.algolia.com/api) (no key)

**Requirements**:
1. Search input (controlled, with submit)
2. A **Server Action** that calls the chosen API
3. Display results in styled cards or a list
4. Loading indicator while the action is running
5. Error state when the API call fails
6. Recent searches stored in `localStorage`
7. Responsive design with Tailwind CSS

**Evaluation criteria**:
- Correct use of Server Actions (`'use server'`) vs client components
- Proper loading and error UX
- AI's ability to adapt to the chosen API's response shape

---

### Option D: AI Chatbot with Claude API

**Goal**: Build a minimal streaming chat interface backed by the Anthropic Claude API.

**Starting point**: Fresh Next.js app (`npx create-next-app@latest`)

**Requirements**:
1. Chat UI with message bubbles (user on the right, assistant on the left)
2. A Next.js Route Handler (`app/api/chat/route.ts`) that calls the Claude API
3. Stream the response — text appears token-by-token (use `ReadableStream` or `ai` SDK)
4. Keep full conversation history in state and send it with each request
5. *(Bonus)* System prompt input so users can customise the assistant persona
6. *(Bonus)* Copy-to-clipboard button on assistant messages
7. *(Bonus)* Clear conversation button

**Setup**:
```bash
npm install @anthropic-ai/sdk
# Add ANTHROPIC_API_KEY to .env.local
```

**Evaluation criteria**:
- Streaming implementation (real-time token rendering vs waiting for full response)
- Correct message history structure (`{ role: 'user' | 'assistant', content: string }[]`)
- AI's ability to wire up the Anthropic SDK correctly from a single prompt

---

## Session 3: Best Practices & Tips (15 min)

### Context Management

**Be specific with requests**:
```
Bad:  "Fix the login bug"
Good: "In src/auth/validate.ts, the JWT validation fails when
       tokens contain special characters in the payload.
       The error occurs on line 45."
```

**Reference files explicitly**:
- Cursor: Use @-mentions (`@src/components/Button.tsx`)
- Claude Code: Mention file paths or let it explore

**Chunk large tasks**:
1. Break into smaller, verifiable steps
2. Verify each step before proceeding
3. Commit working states frequently

**Fresh context for fresh problems**:
- Start new sessions for unrelated tasks
- Context pollution leads to confused outputs

---

### Prompting Techniques

1. **Goal first, then constraints**
   ```
   "Build a user registration form.
   Constraints: Use react-hook-form, zod validation,
   no external UI libraries."
   ```

2. **Provide examples**
   ```
   "Format the output like this:
   { id: string, name: string, createdAt: Date }"
   ```

3. **Ask for explanation before code**
   ```
   "Explain your approach before implementing"
   ```

4. **Iterate, don't restart**
   ```
   "The button styling is wrong. Make it rounded
   with more padding" (not: rewrite from scratch)
   ```

---

### Project Configuration

**Cursor - `.cursorrules` file**:
```
You are working on a Next.js 14 project with:
- App Router (not Pages)
- TypeScript strict mode
- Tailwind CSS for styling
- Server Components by default

Rules:
- Never use 'use client' unless necessary
- Use named exports, not default exports
- Prefer Server Actions over API routes
```

**Claude Code - `CLAUDE.md` file**:
```markdown
# Project: Cinq Dashboard

## Stack
- Next.js 14 (App Router)
- TypeScript
- Prisma + PostgreSQL
- Tailwind CSS

## Conventions
- Components in `src/components/`
- Use `cn()` helper for conditional classes
- All API calls through `src/lib/api.ts`

## Don't
- Don't use `any` type
- Don't install new dependencies without asking
```

---

### MCP (Model Context Protocol) - Brief Overview

**What it is**: A protocol to connect AI assistants to external tools and data sources.

**Examples**:
- Database access (query your Postgres directly)
- Documentation lookup (fetch from Notion, Confluence)
- Design tools (pull from Figma)
- Custom internal tools

**When to use it**:
- When AI needs access to live data
- When context from external systems is crucial
- For team-specific tooling

**Keep it simple**: Most projects don't need MCP. Start without it.

---

### Useful Extensions & Tools

**Cursor**:
- Built-in features cover most needs
- `.cursorrules` for project config
- @-mentions for context

**Claude Code**:
- Custom slash commands (`/commit`, `/review`)
- Hooks for automation (pre/post tool execution)
- MCP servers for external integrations
- `CLAUDE.md` for project context

---

## Session 4: Open Assignment (45 min)

Participants work on their own project or idea.

**Suggestions if stuck**:
- Port a side project feature to a new framework
- Build a tool that solves a daily annoyance
- Recreate a simple app you use (Trello board, Pomodoro timer)
- Prototype an idea you've been thinking about

**Tips for this session**:
1. Start with a clear, written goal
2. Use plan mode / Composer agent for initial scaffolding
3. Iterate in smaller chunks
4. Don't be afraid to restart the conversation if stuck

---

## Resources

- [Cursor Documentation](https://docs.cursor.com)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Claude API Documentation](https://docs.anthropic.com/en/api/getting-started)
- [Next.js Documentation](https://nextjs.org/docs)
- [Open-Meteo API](https://open-meteo.com/en/docs) — free, no auth required
- [CoinGecko API](https://www.coingecko.com/en/api) — free, no auth required
- [Hacker News Search API](https://hn.algolia.com/api) — free, no auth required
