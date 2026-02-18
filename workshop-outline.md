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

### Option A: Next.js Dashboard Component

**Goal**: Build a real-time metrics dashboard page using AI assistance.

**Starting point**: Fresh Next.js app (`npx create-next-app@latest`)

**Requirements**:
1. Create a `/dashboard` route using App Router
2. Build 4 metric cards showing:
   - Total users
   - Monthly revenue
   - Active sessions
   - Conversion rate
3. Add a simple line or bar chart (use `recharts`)
4. Include a data table with mock user data and sorting
5. Style everything with Tailwind CSS
6. Use server components where appropriate

**Evaluation criteria**:
- Did the AI understand the component structure?
- How much manual correction was needed?
- Quality of generated Tailwind classes

---

### Option B: React Native Todo App

**Goal**: Build a functional todo application with Expo.

**Starting point**: Fresh Expo app (`npx create-expo-app@latest`)

**Requirements**:
1. Main screen with todo list
2. Add new todo with text input
3. Mark todos complete (tap or swipe)
4. Delete todos (swipe or long-press)
5. Filter by: All / Active / Completed
6. Persist data with AsyncStorage
7. Simple but clean styling

**Evaluation criteria**:
- Correct React Native components (not web elements)
- Proper gesture handling
- State management approach

---

### Option C: Tauri Notes App

**Goal**: Build a desktop markdown note-taking application.

**Starting point**: Fresh Tauri + React app (`npm create tauri-app@latest`)

**Requirements**:
1. Sidebar listing all notes
2. Editor pane with textarea or markdown editor
3. Live preview of markdown (or toggle view)
4. Save notes to filesystem using Tauri APIs
5. Load notes on startup
6. Basic search/filter functionality
7. Create and delete notes

**Evaluation criteria**:
- Correct use of Tauri's invoke system
- Rust backend integration
- File system permissions handling

---

### Option D: Next.js API Integration App

**Goal**: Build a search app that integrates with a public API.

**Starting point**: Fresh Next.js app

**API choices** (pick one):
- Weather: OpenWeatherMap (free tier)
- Crypto: CoinGecko (no key needed)
- News: NewsAPI
- Movies: OMDB API

**Requirements**:
1. Search input with submit
2. Server Action or API Route to fetch data
3. Display results in cards/list
4. Loading states and error handling
5. Recent searches (stored in cookies or localStorage)
6. Responsive design

**Evaluation criteria**:
- Proper use of Server Actions vs API Routes
- Error boundary implementation
- Loading state UX

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
- [Tauri Documentation](https://tauri.app)
- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev)
