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

### Option C: MCP Power Tools

**Goal**: Configure and use MCP (Model Context Protocol) servers inside Claude Code to unlock richer AI assistance.

**Context**: MCP servers let Claude call external tools — live documentation, GitHub, databases, filesystems — directly during a conversation. This assignment explores what becomes possible when you wire them up.

**Setup (suggested servers)**:

```bash
# context7 — always up-to-date library docs
claude mcp add context7 npx -- -y @upstash/context7-mcp

# GitHub MCP — interact with repos, issues, PRs
claude mcp add github npx -- -y @modelcontextprotocol/server-github
# Requires: export GITHUB_PERSONAL_ACCESS_TOKEN=<your PAT>
```

**Requirements**:
1. Successfully configure at least **2 MCP servers** (verify with `claude mcp list`)
2. Use `context7` to ask Claude a question about the Next.js App Router or Tailwind v4 — note how it cites a live doc page
3. Ask the same question *without* MCP context (new session) — compare the quality and recency of the answers
4. Use the GitHub MCP to list open issues on `vercel/next.js` and have Claude summarise the top 3 by recent activity
5. Use the live context from `context7` to **implement a new widget** in `workshop-dashboard-app` that you previously left empty
6. *(Bonus)* Configure the same MCP servers in Cursor via `.cursor/mcp.json` and compare the experience

**Evaluation criteria**:
- Were both servers correctly configured and usable inside Claude Code?
- Was there a measurable difference in answer quality with vs without `context7`?
- Did the MCP-assisted widget implementation require fewer correction prompts?

**Facilitator notes**:
- If GitHub PAT setup is slow, skip the GitHub MCP and add `@modelcontextprotocol/server-filesystem` instead (no auth needed)
- `context7` fetches docs at query time — the contrast with a session without it is the key teaching moment

---

### Option D: UI Redesign with a Custom Skill

**Goal**: Write a reusable Claude Code slash command (skill) that critiques and redesigns UI components, then iterate on both the skill and the app.

**Context**: Claude Code skills are Markdown files stored in `~/.claude/commands/` (global) or `.claude/commands/` (project-scoped). They become `/skill-name` slash commands in any Claude Code session. This assignment teaches how to encode your own best practices into reusable AI commands.

**Requirements**:

1. **Create a `/redesign` skill** at `.claude/commands/redesign.md` in `workshop-todo-app`:
   ```markdown
   Review the UI/UX of $ARGUMENTS (or the whole page if none given).
   1. List issues: contrast, spacing, accessibility, visual hierarchy
   2. Propose fixes with specific Tailwind classes
   3. Implement the fixes — dark theme, rounded corners, proper focus states
   Design constraints: zinc/amber palette, DM Sans font, mobile-first.
   ```
2. Run `/redesign` on `src/app/page.tsx` — review the output
3. Refine the skill prompt (tighten constraints, add animation requirements, etc.) and run again — compare outputs
4. Add a `CLAUDE.md` to `workshop-todo-app` documenting the design tokens and conventions so Claude has ambient context on every run
5. *(Bonus)* Add a `/component` skill that scaffolds a new styled React component from a one-line description
6. *(Bonus)* Create an equivalent Cursor Rules file (`.cursor/rules/ui.mdc`) and compare how Cursor applies it vs Claude Code

**Evaluation criteria**:
- How much did refining the skill prompt improve the output quality?
- Does the `CLAUDE.md` visibly influence Claude's responses (test: ask "what fonts does this project use?")?
- Did the redesigned todo app look and feel noticeably better?

**Facilitator notes**:
- The key lesson is *iteration* — the first skill draft will produce mediocre output; improving the prompt is the exercise
- Participants who finish early can compare project-scoped vs global skills and discuss the trade-offs

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
- [Claude Code MCP Guide](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [MCP Server Registry](https://github.com/modelcontextprotocol/servers)
- [context7 MCP](https://github.com/upstash/context7)
- [Next.js Documentation](https://nextjs.org/docs)
- [Open-Meteo API](https://open-meteo.com/en/docs) — free, no auth required
