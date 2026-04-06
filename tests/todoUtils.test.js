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

  test("validateTodo should accept valid todo", () => {
    const validTodo = { id: 4, title: "Learn Vitest", priority: "high", completed: false };
    expect(validateTodo(validTodo)).toBe(true);
  });

  test("validateTodo should throw if title is empty", () => {
    expect(() => validateTodo({ title: "", priority: "high" })).toThrow();
  });

  test("addTodo should add new todo", () => {
    const newTodo = { id: 4, title: "Task D", priority: "medium", completed: false };
    const result = addTodo(sampleTodos, newTodo);
    expect(result).toHaveLength(4);
    expect(result[3].title).toBe("Task D");
  });

  // Sử dụng toggleTodoStatus để hết lỗi lint
  test("toggleTodoStatus should change completed state", () => {
    const result = toggleTodoStatus(sampleTodos, 1);
    expect(result[0].completed).toBe(true);
  });

  // Sử dụng filterTodos để hết lỗi lint
  test("filterTodos should return completed todos", () => {
    const result = filterTodos(sampleTodos, "completed");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  // Sử dụng sortTodosByPriority để hết lỗi lint
  test("sortTodosByPriority should put high first", () => {
    const result = sortTodosByPriority(sampleTodos);
    expect(result[0].priority).toBe("high");
  });

  test("getTodoStats should return correct stats", () => {
    const result = getTodoStats(sampleTodos);
    expect(result).toEqual({ total: 3, completed: 1, pending: 2 });
  });
});