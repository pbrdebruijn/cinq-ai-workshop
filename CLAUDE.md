# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Workshop materials for the **Cinq ICT AI Developer Tools Workshop** — a half-day session comparing Cursor vs Claude Code and guiding participants through hands-on assignments.

## Files

- **`presentation.html`** — The main slide deck, built with [Reveal.js](https://revealjs.com/) 4.6.1 as a self-contained HTML file (no build step). Open directly in a browser.
- **`workshop-outline.md`** — Full workshop script with session descriptions, assignment specs, best-practice tips, and facilitator notes.

## Viewing the Presentation

Open `presentation.html` directly in a browser. No server or build step required.

Keyboard shortcuts (Reveal.js defaults):
- `→` / `Space` — next slide
- `←` — previous slide
- `f` — fullscreen
- `s` — speaker notes view
- `Esc` — slide overview

## Design System

The presentation uses a custom dark theme defined inline in `presentation.html`:

| Token | Value | Usage |
|---|---|---|
| `--amber` | `#fbbf24` | Headings, accent, links |
| `--zinc-950` | `#09090b` | Background |
| `--zinc-300` | `#d4d4d8` | Body text |

Fonts loaded from Google Fonts:
- **Caveat** — all headings (`h1`–`h4`), handwritten style
- **DM Sans** — body text
- **DM Mono** — code blocks

CSS utility classes in use: `.accent`, `.accent-muted`, `.dim-text`, `.subtitle`, and layout helpers like `.two-col`.

## Workshop Structure

Four sessions totalling ~2 hours:
1. **IDE Comparison** (15 min) — Cursor vs Claude Code feature overview
2. **Guided Assignment** (45 min) — participants choose one of four options (Next.js dashboard, React Native todo, Tauri notes app, Next.js API integration)
3. **Best Practices** (15 min) — prompting, context management, project config files
4. **Open Assignment** (45 min) — participants work on their own project

Assignment specs (starter commands, requirements, evaluation criteria) live in `workshop-outline.md` under "Session 2".
