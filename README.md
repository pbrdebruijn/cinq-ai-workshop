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

**4. Verify**

```bash
claude --version
claude "hello"
```

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


| Track | Topic                                          | Brief                                                                                            |
| ----- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **A** | Extend the dashboard (APIs, server components) | `[assignments/a-dashboard/ASSIGNMENT.md](assignments/a-dashboard/ASSIGNMENT.md)`                 |
| **B** | Debug the todo app (symptoms → AI → fix)       | `[assignments/b-todo-app/ASSIGNMENT.md](assignments/b-todo-app/ASSIGNMENT.md)`                   |
| **C** | MCP (Context7, GitHub, optional)               | `[assignments/c-mcp-power-tools/ASSIGNMENT.md](assignments/c-mcp-power-tools/ASSIGNMENT.md)`     |
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

```bash
git switch workshop-solutions
```

To return to the normal workshop state:

```bash
git switch main
```