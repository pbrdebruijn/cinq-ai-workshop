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

**1. Create an Anthropic account**

Go to [console.anthropic.com](https://console.anthropic.com) and sign up.

**2. Add credits**

Navigate to **Billing** and add a payment method. For the workshop, $5–10 is more than enough.

**3. Create an API key**

Go to **API Keys → Create Key**. Copy it — you won't see it again.

**4. Install Claude Code**

```bash
npm install -g @anthropic-ai/claude-code
```

**5. Set your API key**

```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

To persist it across sessions, add the line above to your `~/.zshrc` or `~/.bashrc`.

**6. Verify**

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

