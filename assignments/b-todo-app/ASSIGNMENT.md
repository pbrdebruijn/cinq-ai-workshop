# Assignment B — Debug the Todo App

The todo app has **3 intentional bugs** hidden in `src/app/page.tsx`. None of them are obvious from a quick read — they were placed to simulate realistic mistakes. Your goal is to find and fix all three using AI assistance.

## Get started

```bash
cd assignment-b-todo-app
npm install
npm run dev
# Open http://localhost:3000 — try using the app and note what breaks
```

---

## Tasks

### 1. Discover the bugs

Before asking Claude to fix anything, spend 5 minutes using the app yourself. Try:
- Adding a todo
- Marking a todo complete
- Deleting a todo
- Edge cases: empty string, very long text, rapid clicks

Note the symptoms you observe. Write them down — you'll use this to prompt Claude.

### 2. Use AI to locate root causes

Open Claude Code in the `assignment-b-todo-app` folder. Describe the symptoms you found:

> "I'm seeing the following behaviour in src/app/page.tsx: [your observations]. Read the file and identify the likely root cause for each issue."

Ask Claude to explain the bugs before fixing them. Understanding *why* it broke is the point — not just getting it to work.

### 3. Fix each bug with AI assistance

Fix one bug at a time. After each fix, verify the behaviour in the browser before moving to the next.

> "Fix bug #1 only. Don't change anything else. Explain what you changed and why."

This pattern — one fix, verify, next — prevents Claude from cascading one bad fix into another.

---

## Tips

- If Claude's fix doesn't work, describe what still goes wrong rather than saying "that didn't work." The more specific you are, the better the next attempt.
- Bugs are only in `src/app/page.tsx` — you don't need to look elsewhere.
- Use `git diff` to review exactly what Claude changed before accepting it.

---

## Bonus

- **localStorage persistence** — todos currently disappear on refresh. Add persistence so they survive. Hint: you'll need `useEffect` and `'use client'` for this.
- **Edit feature** — add the ability to rename a todo in-place by double-clicking it. Ask Claude to implement it, but specify the UX: click to enter edit mode, Enter to save, Escape to cancel.
