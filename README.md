# Tool Setup Guide

Get Claude Code and Cursor ready before the workshop.

## Prerequisites

This guide assumes **macOS**. Commands use `zsh`/`bash` and paths like `~/.zshrc`.

- **Node.js (LTS)** — Required for `npm` and the global Claude Code install. Install from [nodejs.org](https://nodejs.org) (choose the LTS version) or via a version manager (e.g. `nvm`, `fnm`). Check with `node -v` and `npm -v`.
- **A terminal** — Built-in **Terminal** (or **iTerm2**, **Warp**, etc.) to run the commands below.

**Windows?** These steps are not written for Windows. Ask a colleague for help adapting paths, shells, and env vars, or use WSL if you are comfortable with it.

---

## Claude Code

Claude Code is a terminal-based AI coding agent made by Anthropic. It can be used with either an Anthropic API key or a Claude.ai Pro/Max subscription.

**Before you start:** Close all terminal windows and open a fresh one. Claude Code commands won't work if you're in an existing session that's already configured for another project.

### API key

**1. Ask Bouke 😊**

**2. Install Claude Code**

```bash
npm install -g @anthropic-ai/claude-code
```

**3. Set your API key**

```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

To persist it across sessions, add the line above to your `~/.zshrc` or `~/.bashrc`.

**⚠️ Security note:** Don't commit your `.zshrc` file to Git. The `export` line should stay local to your machine.

**4. Verify**

```bash
claude --version
claude "hello"
```

Check if you can interact with Claude in a new session: close all terminals, open a fresh one, and try the two commands above. If they work, you're ready for the workshop.

---

## Cursor

> Payment and account setup details to be confirmed.

### Install

Download Cursor from [cursor.com](https://cursor.com) and install it like a normal app. It is a VS Code fork — your existing extensions and keybindings will carry over.

### Account & pricing

- *(TBD — free tier / Pro plan details to be added here)*

### Verify

Open a project folder in Cursor and press `Cmd+K` (macOS) or `Ctrl+K` (Windows/Linux) to trigger inline AI editing.

---

## Workshop apps

Once your tools are set up, install dependencies for the two workshop apps:

```bash
cd assignment-a-dashboard-app && npm install && cd ..
cd assignment-b-todo-app && npm install && cd ..
```

---

## Assignments (guided hands-on)

Pick **one** track for the guided block. Full briefs live here:

**Getting started tip:** Before diving in, take 5 minutes to preview the app. Run `npm run dev` and just browse - you'll see what's already working, what's new, and how the code is structured. This helps you understand the patterns before asking Claude to make changes.


| Track | Topic                                          | Brief                                                                                            |
| ----- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **A** | Extend the dashboard (APIs, server components) | `[assignments/a-dashboard/ASSIGNMENT.md](assignments/a-dashboard/ASSIGNMENT.md)`                 |
| **B** | Debug the todo app (symptoms → AI → fix)       | `[assignments/b-todo-app/ASSIGNMENT.md](assignments/b-todo-app/ASSIGNMENT.md)`                   |
| **C** | MCP (Context7 + custom servers)               | `[assignments/c-mcp-power-tools/ASSIGNMENT.md](assignments/c-mcp-power-tools/ASSIGNMENT.md)`     |
| **D** | `CLAUDE.md` + `/redesign` skill                | `[assignments/d-ui-redesign-skill/ASSIGNMENT.md](assignments/d-ui-redesign-skill/ASSIGNMENT.md)` |


App roots (from the briefs): `assignment-a-dashboard-app`, `assignment-b-todo-app`.

---

## Open assignment (Part 4)

After the **best-practices** segment, you apply the same workflow to **your own project** (or a sandbox repo)—not a separate repo brief.

- **Flow:** clear goal → short plan → small steps → run tests / check the app → repeat.
- **Ideas, tips, and resources** are on the slides: **Part 4 — Open assignment** in [`presentation/presentation.html`](presentation/presentation.html) (open-assignment slide, tips, resources).
- **Paul’s outline:** session structure and speaker notes for this block are in [`PRESENTATION_OUTLINE.md`](PRESENTATION_OUTLINE.md) under Part 4 and slides 24–28.

Bring a **small, real task** if you can (one bugfix, one feature slice, one refactor)—large scopes rarely fit the timebox.

---

## Spoilers / reference solutions (optional)

To keep `main` participant-safe, spoilers and reference implementations live on a separate branch:

**What this branch contains:** Working solutions for all assignments, bug hints for Assignment B, and MCP server configs.

```bash
git switch workshop-solutions
```

To return to the normal workshop state:

```bash
git switch main
```

**Pro tip:** Keep both branches handy. Compare your work against the solutions when you're stuck.