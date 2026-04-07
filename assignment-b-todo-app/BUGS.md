## Workshop Todo App – Hidden Bugs

This Next.js todo app is designed for an AI-assisted debugging exercise.  
The app **builds successfully**, but contains several **runtime / logic bugs** you can hunt with an AI coding IDE or agent.

Below are the planted bugs, their symptoms, and hints. For Paul / workshop lead only — don’t show to participants during the exercise.

---

### 1. Filter shows the wrong items (Active vs Completed)

- **Symptom**:  
  - Add a few todos.  
  - Mark one as completed.  
  - Switch between **Active** and **Completed** filters.  
  - The **Active** tab appears to show completed tasks instead of incomplete ones.
- **What’s wrong conceptually**:  
  The filtering logic for the `"active"` state is inverted.
- **Where to look**:  
  - File: `src/app/page.tsx`  
  - Section: `visibleTodos` `useMemo` block that switches on `filter`.
- **Hint for fix**:  
  - For `"active"`, the code should filter by `!todo.completed`.  
  - For `"completed"`, it should filter by `todo.completed`.

---

### 2. Deleting a todo behaves inconsistently

- **Symptom**:  
  - Add several todos in a row.  
  - Delete a specific todo somewhere in the middle.  
  - Sometimes the **wrong todo is removed**, and sometimes the delete appears to do nothing.
- **What’s wrong conceptually**:  
  The delete handler uses the **array index** instead of the todo’s `id`. This breaks as soon as ids and indexes diverge.
- **Where to look**:  
  - File: `src/app/page.tsx`  
  - Function: `handleDeleteTodo`.
- **Hint for fix**:  
  - The filter predicate should compare the todo’s `id` to the `id` argument, not use the array index.

---

### 3. “Clear completed…” keeps the wrong todos

- **Symptom**:  
  - Add several todos, mark some as completed.  
  - Click **Clear completed…**, then confirm.  
  - Instead of removing completed todos, the list ends up keeping **only** the completed ones (or otherwise behaving opposite to expectations).
- **What’s wrong conceptually**:  
  The clear-completed handler uses the **wrong predicate** and keeps completed todos instead of discarding them.
- **Where to look**:  
  - File: `src/app/page.tsx`  
  - Function: `handleClearCompleted`.
- **Hint for fix**:  
  - The filter should drop items where `todo.completed === true`, not keep them.

---

### 4. “Active count” can look confusing with filters

- **Symptom**:  
  - Use the filters and the **Active** count in the stats panel.  
  - The count is **global**, not based on the currently visible (filtered) list, which can feel inconsistent with what you see.
- **What’s wrong conceptually**:  
  This is more of a **product/UX bug** than a code error: the stats are derived from the full `todos` array instead of `visibleTodos`, so “Active” doesn’t necessarily match the number of tasks on screen.
- **Where to look**:  
  - File: `src/app/page.tsx`  
  - `stats` `useMemo` block.
- **Hint for discussion / variant fix**:  
  - Decide whether stats should reflect all todos or only the currently filtered subset.  
  - If you want filter-aware stats, re-compute them from `visibleTodos` or from both `todos` and `filter`.

---

### 5. Id/key behavior across refreshes (module-level state)

- **Symptom**:  
  - In development with hot reload, you may notice todo ids starting over or not matching expectations after reloads.  
  - This doesn’t break the UI badly, but is a subtle correctness/design smell.
- **What’s wrong conceptually**:  
  The `nextId` counter lives at **module scope**, so every full refresh resets it to `1`. In a more complex app this could cause duplicate keys or collisions.
- **Where to look**:  
  - File: `src/app/page.tsx`  
  - Variable: `let nextId = 1;`.
- **Hint for fix / improvement**:  
  - Derive the next id from existing todos (e.g. `Math.max(...ids) + 1`) or use a stable id generator (`crypto.randomUUID`, `Date.now`, etc.).  
  - Alternatively, manage `nextId` inside React state.

---

### Suggested debugging prompts for participants

- **State & filters**  
  - “Explain how the todo filter logic works in this file.”  
  - “Why might the Active filter be showing completed todos in this app?”  
  - “Compare the Active and Completed branches in the visibleTodos hook and suggest fixes.”

- **Mutating lists**  
  - “Review the delete handler for todos and check whether it correctly uses ids.”  
  - “Is the clear completed logic in this todo app correct? What would you change?”

- **UX / derived state**  
  - “Is the active/completed stats panel consistent with what is rendered in the list? If not, why, and how can we improve it?”

