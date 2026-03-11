"use client";

import { useMemo, useState } from "react";

type TodoFilter = "all" | "active" | "completed";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let nextId = 1;

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState<TodoFilter>("all");
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);

  const stats = useMemo(
    () => ({
      total: todos.length,
      completed: todos.filter((t) => t.completed).length,
      active: todos.filter((t) => !t.completed).length,
    }),
    [todos],
  );

  const visibleTodos = useMemo(() => {
    switch (filter) {
      case "active":
        // BUG: This should show only active todos but currently returns completed ones.
        return todos.filter((t) => t.completed);
      case "completed":
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  function handleAddTodo(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      { id: nextId++, title: trimmed, completed: false },
    ]);
    setTitle("");
  }

  function handleToggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleDeleteTodo(id: number) {
    // BUG: Uses the position in the array instead of the todo id.
    setTodos((prev) => prev.filter((_, index) => index !== id));
  }

  function handleClearCompleted() {
    // BUG: Keeps only completed todos instead of clearing them.
    setTodos((prev) => prev.filter((todo) => todo.completed));
    setIsClearModalOpen(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-8 text-zinc-50">
      <main className="w-full max-w-xl rounded-2xl bg-zinc-900 p-6 shadow-lg shadow-black/40">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-amber-300">
              Workshop Todo List
            </h1>
            <p className="text-sm text-zinc-400">
              Add tasks, toggle them done, and experiment with filters.
            </p>
          </div>

          <section className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-xs">
            <p className="text-zinc-400">
              Total: <span className="font-semibold text-zinc-100">{stats.total}</span>
            </p>
            <p className="text-zinc-400">
              Active:{" "}
              <span className="font-semibold text-amber-200">{stats.active}</span>
            </p>
            <p className="text-zinc-400">
              Completed:{" "}
              <span className="font-semibold text-emerald-300">
                {stats.completed}
              </span>
            </p>
          </section>
        </header>

        <form
          onSubmit={handleAddTodo}
          className="mb-4 flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2"
        >
          <input
            type="text"
            placeholder="Add a task and press Enter"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-lg bg-amber-300 px-3 py-1.5 text-xs font-semibold text-zinc-950 shadow-sm transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!title.trim()}
          >
            Add
          </button>
        </form>

        <section className="mb-3 flex items-center justify-between gap-2 text-xs">
          <div className="inline-flex rounded-full bg-zinc-900 p-1">
            <FilterChip
              label="All"
              active={filter === "all"}
              onClick={() => setFilter("all")}
            />
            <FilterChip
              label="Active"
              active={filter === "active"}
              onClick={() => setFilter("active")}
            />
            <FilterChip
              label="Completed"
              active={filter === "completed"}
              onClick={() => setFilter("completed")}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsClearModalOpen(true)}
            className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] text-zinc-300 transition hover:border-red-500 hover:text-red-400 disabled:opacity-40"
            disabled={stats.completed === 0}
          >
            Clear completed…
          </button>
        </section>

        <section className="space-y-2">
          {visibleTodos.length === 0 ? (
            <p className="rounded-xl border border-dashed border-zinc-800 bg-zinc-950/40 px-4 py-6 text-center text-xs text-zinc-500">
              No todos yet. Add your first task above.
            </p>
          ) : (
            <ul className="space-y-2">
              {visibleTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm"
                >
                  <button
                    type="button"
                    onClick={() => handleToggleTodo(todo.id)}
                    className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] ${
                      todo.completed
                        ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                        : "border-zinc-600 text-zinc-500"
                    }`}
                    aria-label={
                      todo.completed ? "Mark as not done" : "Mark as done"
                    }
                  >
                    {todo.completed ? "✓" : ""}
                  </button>

                  <p
                    className={`flex-1 text-xs ${
                      todo.completed
                        ? "text-zinc-500 line-through"
                        : "text-zinc-100"
                    }`}
                  >
                    {todo.title}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="rounded-lg px-2 py-1 text-[11px] text-zinc-400 transition hover:bg-red-500/10 hover:text-red-300"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {isClearModalOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-sm rounded-2xl bg-zinc-900 p-5 shadow-xl shadow-black/60">
              <h2 className="mb-2 text-sm font-semibold text-zinc-50">
                Clear completed tasks?
              </h2>
              <p className="mb-4 text-xs text-zinc-400">
                This will remove{" "}
                <span className="font-semibold text-amber-200">
                  {stats.completed}
                </span>{" "}
                completed todos from the list. This action cannot be undone.
              </p>
              <div className="flex justify-end gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setIsClearModalOpen(false)}
                  className="rounded-lg border border-zinc-700 px-3 py-1 text-zinc-300 hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleClearCompleted}
                  className="rounded-lg bg-red-500 px-3 py-1 font-semibold text-zinc-50 shadow-sm hover:bg-red-400"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

type FilterChipProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-[11px] transition ${
        active
          ? "bg-zinc-100 text-zinc-950"
          : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
      }`}
    >
      {label}
    </button>
  );
}
