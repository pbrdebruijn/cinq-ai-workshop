# Tool Setup Guide

Get Claude Code and Cursor ready before the workshop.

---

## Claude Code

Claude Code is a terminal-based AI coding agent made by Anthropic. It can be used with either an Anthropic API key or a Claude.ai Pro/Max subscription.

### Option A — API key (recommended for workshops)

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

### Option B — Claude.ai subscription

If you already have a **Claude Pro** or **Claude Max** subscription, you can log in with your browser account instead of an API key:

```bash
claude
```

On first run, Claude Code will open a browser window to authenticate via claude.ai.

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
