# Assignment D — UI Redesign with a Custom Skill

Claude Code skills are Markdown files that become `/slash-commands` in any session. This assignment teaches you to write and iterate a skill that encodes your UI/UX standards, then apply it to redesign the todo app.

## Get started

```bash
cd assignment-b-todo-app
npm install
npm run dev
# Open http://localhost:3000 — note how the UI looks now
```

---

## Tasks

### 1. Write a CLAUDE.md

Create `assignment-b-todo-app/CLAUDE.md` with your project's conventions so Claude has ambient context in every session:

```markdown
# Todo App

## Stack
Next.js 15, React, Tailwind CSS, TypeScript

## Design conventions
- Colour palette: zinc greys + amber accent (#fbbf24)
- Font: system-ui (body), monospace (code)
- Dark background: zinc-950 (#09090b)
- Body text: zinc-300
- Border radius: rounded-xl for cards, rounded-lg for inputs
- All interactive elements must have visible focus rings
- Mobile-first, single-column layout
```

Test it: open a new Claude Code session in the `assignment-b-todo-app` folder and ask "what font does this project use?" — Claude should answer from CLAUDE.md without reading any source file.

### 2. Create a /redesign skill

Create the file `.claude/commands/redesign.md` inside `assignment-b-todo-app`:

```markdown
Review the UI/UX of $ARGUMENTS (default: src/app/page.tsx if not specified).

Steps:
1. Read the file and list issues across: contrast, spacing, typography, accessibility (focus rings, aria labels), and visual hierarchy.
2. Propose specific fixes using Tailwind CSS classes.
3. Implement all fixes in the file.

Constraints:
- Keep the existing zinc/amber palette from CLAUDE.md
- Every button and input must have a visible focus ring
- Minimum touch target 44px height on interactive elements
- Do not change any logic — only styles and structure
```

### 3. Run the skill and review

In Claude Code (inside `assignment-b-todo-app`):

```
/redesign
```

Look at the result in the browser. Note what improved and what still feels off.

### 4. Iterate on the skill

Edit `.claude/commands/redesign.md` to be more specific about what you want — for example:
- Add a requirement for smooth transitions (`transition-colors duration-150`)
- Specify that the empty state should have an illustration or icon
- Require that completed todos use a strikethrough

Run `/redesign` again and compare. The quality difference between iteration 1 and iteration 2 is the core lesson of this assignment.

---

## Tips

- Skills live in `.claude/commands/` (project) or `~/.claude/commands/` (global). Project-scoped skills are committed to the repo so the whole team benefits.
- `$ARGUMENTS` is replaced with whatever you type after the slash command: `/redesign src/app/page.tsx`.
- Keep constraints concrete — "looks clean" is useless, "rounded-xl border border-zinc-800 bg-zinc-900" is actionable.

---

## Bonus

- **Add a /component skill** at `.claude/commands/component.md` that scaffolds a new styled React component from a one-line description. Example: `/component EmptyState with icon and call-to-action button`.
- **Cursor Rules equivalent** — create `.cursor/rules/ui.mdc` with the same design constraints and compare how Cursor applies project rules vs Claude Code's CLAUDE.md + skills combo.
