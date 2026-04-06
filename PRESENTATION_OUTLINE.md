# AI Developer Tools Workshop — Outline & Speaker Notes

**Source deck:** `presentation/presentation.html`  
**Audience:** Developers at Cinq ICT  
**Tools:** Cursor, Claude Code, best practices  

Use this document for **finetuning** (training data or slide edits): the **Structural outline** is the canonical section order; **Speaker notes** map 1:1 to each slide.

**Note:** Part 1 below is **principles-first** with a shorter tool section. When you update the deck, remap slide numbers to match this appendix (28 slides total).

---

## Summary of the presentation

This is a **two-hour hands-on workshop** framed around a simple idea: software is central to every business, skills age quickly, and **AI-assisted coding is a craft to learn**—not a lazy shortcut. The session leads with **durable principles** (context, verification, bounded work) and **agentic coding** as a theme: **more delegation to agents means more intentional trust and guardrails**—not blind autopilot.

**Cursor** (in-editor, diff-forward) and **Claude Code** (terminal-first agent) appear as **two workflow shapes** that **complement** each other, with a **scenario-style** guide for when each mode fits. Detailed product timelines are de-emphasized (tools change weekly); point people to **official docs** for “what’s new.”

The middle of the workshop is **practice-first**: ~45 minutes of **guided assignments** (four tracks: dashboard widgets, intentional bugs, MCP setup, slash-command skills) so participants **struggle before** the **best-practices** segment—making tips stick. A final **open assignment** block lets people apply the same workflow to their own code. The deck closes with **concrete prompting and context rules**, **project configuration** (`.cursorrules` / `CLAUDE.md`), a **grounded MCP overview**, resources, and **one homework action**: add project instructions so every future session is smarter.

---

## Key takeaways

1. **Match workflow to the task (and the day):** In-editor (Cursor) for tight loops, autocomplete, and **visible diffs**; terminal agent (Claude Code) for **multi-step**, repo-wide, or scripted work—they **complement**; same developer may switch modes.
2. **Agentic coding needs guardrails:** Wider autonomy ⇒ explicit **scope**, **review before merge**, **undo/checkpoints**, sandboxes or tool allowlists where available; **you** own secrets and production.
3. **Context beats vague asks:** Name files, symptoms, and constraints; chunk work; start fresh sessions for unrelated tasks.
4. **Prompt like a spec:** Goal first, then constraints; use examples; ask for explanation before big edits; iterate instead of restarting from zero.
5. **Encode the repo once:** `.cursorrules` (Cursor) and `CLAUDE.md` (Claude Code) turn repeated corrections into **free** context every session—**versionable team assets**.
6. **MCP is powerful but optional:** Connect docs, DBs, GitHub, etc.—but **start simple**; most projects do not need MCP on day one.
7. **One action this week:** Add `CLAUDE.md` or `.cursorrules` to a project you own (stack, conventions, explicit don’ts).

---

## Structural outline (for finetuning)

Use this as the **skeleton** when you shorten, expand, or reorder the deck.

| Part | Section | Slide purpose (aggregate) |
|------|---------|---------------------------|
| 1 | **Opening** | Title, three framing quotes, agenda, learning outcomes (**slides 1–5**) |
| 2 | **Part 1 — Principles & workflow** | Divider (“how we work with AI now”); **durable principles**; **agentic shift** (trust + guardrails); **landscape** (fast change, docs as truth, 2–3 principle examples max); **Cursor** (in-editor / diff-forward); **Claude Code** (terminal agent); **when to use which** (scenario table, `.cursorrules` / `CLAUDE.md`, combination strategy) (**slides 6–12**) |
| 3 | **Part 2 — Guided assignment** | Divider (“struggle first”); four options; one slide per option (A–D) with commands and pointers to `assignments/*/ASSIGNMENT.md` (**slides 13–18**) |
| 4 | **Part 3 — Best practices** | Divider; context management; prompting; project config samples; MCP (brief + “start without it”) (**slides 19–23**) |
| 5 | **Part 4 — Open assignment** | Divider; open assignment ideas; tips for success; links; closing CTA (**slides 24–28**) |

**Finetuning hooks:** optional **2-minute norming** (“what went wrong last time?”) after Part 1 divider; **pairing** (one prompts, one reads diffs) for agentic tracks; **org red lines** slide (secrets, auto-merge) if required; swap assignment D for a team-specific skill; add **licensing / data** if your org requires it; one **live demo** slide if you want less text.

---

## Speaker notes — slide by slide

Slides are numbered in **deck order** (horizontal progression in Reveal.js; no vertical stacks in this file).

### Slide 1 — Title

- Welcome; name and role; logistics (wifi, repo link, timeboxes).
- Set expectation: **Cursor + Claude Code + habits**, not a generic “AI hype” talk.
- Mention the subtitle bullets on screen: they are the three threads of the day.

### Slide 2 — Quote: “Every company is now a software company”

- Bridge: if every company ships software, **developer effectiveness** is a competitive lever—not a cost center story only.
- Optional: one sentence on how Cinq ICT sees this for clients or internal delivery.

### Slide 3 — Quote: Half-life of technical skills

- Empathy: everyone feels the pace of new frameworks, APIs, and tools.
- Transition: **learning AI tooling** is now part of staying current—not replacing fundamentals.

### Slide 4 — Quote: AI coding is not a shortcut

- This is the **tone slide**: we are here to **master a tool**, like testing or Git.
- Tease: best practices land **after** you have tried and failed a bit—by design.

### Slide 5 — Agenda

- Walk the four blocks and **total time** (adjust if your session length differs).
- Read the footer outcome line slowly: **workflow fit**, **prompts**, **team setup**, **real code** (adjust wording if the deck still says “tool choice”).
- Invite questions held until breaks or the end unless urgent.

### Slide 6 — Part 1 divider: Principles & workflow

- Frame: we are **not** picking a winner—we are building **habits** that survive the next rename and the next model.
- Optional **2-minute norming**: “What went wrong last time you used AI on code?” — surfaces trust and guardrails before you preach.
- Cursor vs Claude Code = **two shapes of workflow** (editor-integrated vs terminal agent), often **both** in one week.

### Slide 7 — Durable principles

- **Context is the product** — specific files, errors, constraints beat “fix my app.”
- **Verify, don’t trust** — run tests, read diffs, reproduce bugs before accepting big changes.
- **Bound the work** — small steps, clear acceptance; fresh session for unrelated tasks.
- **Encode once** — team rules in repo files beat repeating lectures in chat.
- Bridge: these apply whether the tool is inline completion or a full agent.

### Slide 8 — Agentic coding: trust & guardrails

- **More agentic** = more delegation: plans, multi-file edits, commands—higher upside and higher risk.
- **Trust is calibrated**: start with explain-first or narrow scope; widen as `CLAUDE.md` / rules mature.
- **Guardrails stack** (map to whatever the org uses): project instructions; review before apply/merge; checkpoints/undo; sandbox or tool allowlists; MCP only where approved; **humans own secrets and prod**.
- Same ideas show up as Bugbot/review automation, debug-with-evidence, bounded bash—**instances of one theme**, not a feature shopping list.

### Slide 9 — Tools move fast (landscape)

- One sentence: **both** Cursor and Claude Code ship constantly—this deck will age; **official docs** are the changelog.
- Optional 2–3 bullets **only** as examples of the principles above (e.g. plugins bundling rules/MCP; PR review assist; runtime evidence before patch; checkpoints)—**do not** narrate full timelines unless you enjoy quarterly deck rewrites.
- Invite bookmarking release notes / blogs for “homework follow.”

### Slide 10 — Cursor (in-editor workflow)

- **VS Code lineage** lowers adoption friction for most devs.
- Muscle memory: Tab, Cmd+K, Composer, Chat with `@`.
- **Why people reach for it:** see **the diff** in context; tight loop on a file or small surface.
- Quick demo idea (optional): one Cmd+K edit on a small snippet.

### Slide 11 — Claude Code (terminal-agent workflow)

- **Terminal-first** and **editor-agnostic**: Vim/tmux-style workflows; “agent in a pane.”
- **Autonomy:** edits + shell commands; git-native flows (commits/PRs as first-class).
- **Why people reach for it:** drive **multi-step** or repo-wide work from one place; scriptable slash commands and skills.
- Emphasize: still **your** repo—same verify-and-review discipline as in the editor.

### Slide 12 — When to use which? (table)

- Read rows as **scenarios**, not absolutes—**same person**, different tasks.
- Close with **`.cursorrules` vs `CLAUDE.md`** and **combination strategy** (e.g. larger refactors or scaffolding in Claude Code, polish and tight edits in Cursor)—not mutually exclusive.
- Ask: “Who lives in the terminal all day?” vs “Who wants everything in the IDE?”

### Slide 13 — Part 2 divider: Guided assignment

- **Struggle first** pedagogy: you will hit context limits, wrong files, and vague outputs—**that** is when tips resonate.
- Point to repo root and `assignments/` for written briefs.
- Optional: **pair** one “prompter” + one “diff reader” for assignment C or D (agentic tracks).

### Slide 14 — Assignment options

- **A** = integration + APIs; **B** = debugging discipline; **C** = MCP literacy; **D** = repeatable commands + `CLAUDE.md`.
- Let people **choose one**; roaming support; pairing OK.
- Clarify: all options are valid—no “easy” track.

### Slide 15 — Option A: Extend the Dashboard

- Command on slide: `cd assignment-a-dashboard-app && npm run dev`.
- Three widgets: **Weather** (Open-Meteo), **Crypto** (CoinGecko), **News** (HN Algolia)—no API keys.
- Remind: read `assignments/a-dashboard/ASSIGNMENT.md` for acceptance details.

### Slide 16 — Option B: Debug the Todo App

- Command: `cd assignment-b-todo-app && npm run dev`.
- **Three intentional bugs** in `src/app/page.tsx`—use the app first, **note symptoms**, then prompt with evidence.
- Reinforce: fix **one bug at a time** and verify—same discipline applies when an **agent** proposes fixes.

### Slide 17 — Option C: MCP Power Tools

- Example command for Context7 on slide; mention **GitHub MCP** as second server.
- Learning goal: see how **live docs / repo context** changes answer quality—and why MCP needs **org guardrails** when you connect real systems.
- Point to `assignments/c-mcp-power-tools/ASSIGNMENT.md`.

### Slide 18 — Option D: UI Redesign with a Skill

- Artifact path: `.claude/commands/redesign.md` for **`/redesign`**.
- Iterate the **prompt inside the command** and compare runs on the todo app.
- Also **`CLAUDE.md`** with design tokens—ties to Part 3 configuration.

### Slide 19 — Part 3 divider: Best practices

- “Now that you have scraped your knees, these will feel obvious.”
- Bridge: context, prompts, repo config, MCP—**short and actionable**.

### Slide 20 — Context management

- Contrast **bad vs good** example on the slide; stress **specificity** (file, line, error, token shape).
- Three bullets: **@ paths**, **chunk tasks**, **fresh session** for unrelated work.
- Optional audience prompt: “What vague prompt did you use in the assignment?”

### Slide 21 — Prompting techniques

- **Goal + constraints** block—this is how you avoid “build me auth” chaos.
- **Examples** for output shape reduce rework.
- **Explain first** before applying huge diffs—especially in legacy code and **agent** runs.
- **Iterate**: treat the thread as a spec conversation, not one-shot magic.

### Slide 22 — Project configuration

- Side-by-side: **`.cursorrules`** (Cursor conventions) vs **`CLAUDE.md`** (Claude Code project brain).
- Say explicitly: these files are **versionable team assets**—they are part of **guardrails**, not personal superstitions.
- Invite teams to paste their real stack bullets in a template after the workshop.

### Slide 23 — MCP — Model Context Protocol

- Four use cases on slide: DB, docs, design, internal APIs.
- **Critical footer:** most projects **do not need MCP** initially—avoid resume-driven setup.
- If org is security-sensitive: mention approval/guardrails without derailing.

### Slide 24 — Part 4 divider: Open assignment

- **45 minutes on your code** (or a sandbox repo)—apply the same loop: goal → plan → small steps → verify.
- You float; no new concepts—**repetition builds habit**.

### Slide 25 — Open assignment

- Ideas list is for people **without** a ready task—keeps the room moving.
- Encourage **small scope**: one feature, one bugfix, one refactor slice.

### Slide 26 — Tips for success

- Read the **numbered list** as a checklist.
- Emphasize **restart context** as a feature, not failure—long threads accumulate noise.

### Slide 27 — Resources

- Read URLs clearly; these are **bookmark anchors** for Monday.
- Cursor docs, Anthropic/Claude Code, MCP guide, MCP servers repo, Next.js docs.

### Slide 28 — Closing: One thing to do this week

- Homework: **`CLAUDE.md` or `.cursorrules`** on a real project—stack, conventions, **don’ts**.
- Reframe: **amortized** improvement—every future session benefits.
- Thank you; Q&A; where to follow up internally (Slack, guild, etc.—fill in for your org).

---

## Appendix: slide index (quick reference)

1. Title  
2. Quote — software company  
3. Quote — skill half-life  
4. Quote — not a shortcut  
5. Agenda  
6. Part 1 — Principles & workflow (divider)  
7. Durable principles  
8. Agentic coding — trust & guardrails  
9. Tools landscape (fast change; docs; optional examples)  
10. Cursor — in-editor workflow  
11. Claude Code — terminal-agent workflow  
12. When to use which? (scenario table)  
13. Part 2 — Guided Assignment  
14. Assignment options  
15. Option A — Dashboard  
16. Option B — Todo bugs  
17. Option C — MCP  
18. Option D — Redesign skill  
19. Part 3 — Best Practices  
20. Context management  
21. Prompting techniques  
22. Project configuration  
23. MCP brief  
24. Part 4 — Open Assignment  
25. Open assignment ideas  
26. Tips for success  
27. Resources  
28. Closing CTA  
