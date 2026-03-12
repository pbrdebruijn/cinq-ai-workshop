# Assignment B — Debug the Todo App

This todo app looks fine but has **3 intentional bugs**. Your job is to find them, understand why they happen, and fix them with AI assistance.

## Get started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

Try using the app normally — add a few todos, mark some complete, try the filters, delete one. Something will feel off.

All bugs are in `src/app/page.tsx`.

---

## Tasks

### 1. Find the bugs
Use the app to trigger unexpected behaviour. For each bug:
- Describe the symptom clearly in plain English
- Tell the AI the symptom and ask it to find the root cause in `src/app/page.tsx`

### 2. Fix each bug
Once the AI identifies the cause, ask it to apply the fix. After each fix:
- Verify the behaviour in the browser
- Make sure fixing one bug didn't break another

### 3. Document what was wrong
For each bug, leave a short comment in the code or write a commit message that explains what the original mistake was and why the fix is correct.

---

## Tips

- Describe symptoms, not guesses — "when I click Active, completed todos still show" is more useful than "the filter is broken".
- Ask the AI to explain *why* the bug exists before asking it to fix it. The explanation is the learning.
- If the AI gives a wrong fix, describe what still breaks and ask it to try again.

---

## Bonus

- **localStorage persistence** — todos should survive a page refresh. Ask the AI to add `useEffect`-based persistence with `localStorage`.
- **Inline edit** — clicking a todo label should turn it into an input so you can rename it in place.
