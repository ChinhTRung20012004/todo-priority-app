const PRIORITY_ORDER = {
  high: 3,
  medium: 2,
  low: 1,
};

export function validateTodo(todo) {
  if (!todo || typeof todo !== "object") {
    throw new Error("Todo must be an object"); // [cite: 156]
  }
  if (!todo.title || todo.title.trim() === "") {
    throw new Error("Title is required"); // [cite: 159]
  }
  if (!["high", "medium", "low"].includes(todo.priority)) {
    throw new Error("Invalid priority"); // [cite: 160]
  }
  return true;
}

export function addTodo(list, todo) {
  if (!Array.isArray(list)) throw new Error("List must be an array"); // [cite: 170]
  validateTodo(todo); // [cite: 171]
  return [...list, todo]; // Trả về mảng mới [cite: 172]
}

export function toggleTodoStatus(list, id) {
  if (!Array.isArray(list)) throw new Error("List must be an array");
  return list.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo // [cite: 180]
  );
}

export function filterTodos(list, status) {
  if (!Array.isArray(list)) throw new Error("List must be an array");
  if (status === "completed") return list.filter((todo) => todo.completed); // [cite: 187]
  if (status === "pending") return list.filter((todo) => !todo.completed); // [cite: 190]
  return list; // status === "all" [cite: 191]
}

export function sortTodosByPriority(list) {
  if (!Array.isArray(list)) throw new Error("List must be an array");
  return [...list].sort(
    (a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority] // High > Medium > Low [cite: 198]
  );
}

export function getTodoStats(list) {
  if (!Array.isArray(list)) throw new Error("List must be an array");
  const total = list.length;
  const completed = list.filter((todo) => todo.completed).length;
  return {
    total,
    completed,
    pending: total - completed, // [cite: 211]
  };
}