import { describe, test, expect } from "vitest";
import {
  validateTodo,
  addTodo,
  toggleTodoStatus,
  filterTodos,
  sortTodosByPriority,
  getTodoStats,
} from "../src/utils/todoUtils";

describe("todoUtils", () => {
  const sampleTodos = [
    { id: 1, title: "Task A", priority: "medium", completed: false },
    { id: 2, title: "Task B", priority: "high", completed: true },
    { id: 3, title: "Task C", priority: "low", completed: false },
  ];

  test("validateTodo should throw if title is empty", () => {
    expect(() => validateTodo({ title: "", priority: "high" })).toThrow("Title is required");
  });

  test("addTodo should add new todo", () => {
    const newTodo = { id: 4, title: "Task D", priority: "medium", completed: false };
    const result = addTodo(sampleTodos, newTodo);
    expect(result).toHaveLength(4);
  });

  test("getTodoStats should return correct stats", () => {
    const result = getTodoStats(sampleTodos);
    expect(result).toEqual({ total: 3, completed: 1, pending: 2 });
  });
});