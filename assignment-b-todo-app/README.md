# Workshop Todo App

A deliberately buggy Next.js todo app used in the **Cinq ICT AI Developer Tools Workshop** (Assignment B).

The app builds and runs fine, but contains **3 intentional runtime/logic bugs** to find and fix with AI assistance.

## Stack

- Next.js 15 · App Router · TypeScript
- Tailwind CSS
- Client-side state only (`useState`, `useMemo`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/app/page.tsx   — all bugs are in this file
```

Features: add todos, toggle completion, filter (All / Active / Completed), delete, clear completed.

## Assignment

Full brief (tasks, bonus): [`assignments/b-todo-app/ASSIGNMENT.md`](../assignments/b-todo-app/ASSIGNMENT.md) — assignment docs live only under `assignments/`, not in this app folder.
