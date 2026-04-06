import { useMemo, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import {
  addTodo,
  filterTodos,
  getTodoStats,
  sortTodosByPriority,
  toggleTodoStatus,
} from "./utils/todoUtils";
import "./App.css";

// Dữ liệu mẫu ban đầu [cite: 316, 320]
const initialTodos = [
  { id: 1, title: "Học React", priority: "high", completed: false },
  { id: 2, title: "Làm bài lab GitHub", priority: "medium", completed: true },
  { id: 3, title: "Viết test", priority: "high", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");

  // Hàm thêm mới công việc [cite: 324, 326]
  function handleAdd(todo) {
    setTodos((prev) => addTodo(prev, todo));
  }

  // Hàm đảo trạng thái hoàn thành [cite: 327, 329]
  function handleToggle(id) {
    setTodos((prev) => toggleTodoStatus(prev, id));
  }

  // Xử lý hiển thị: Lọc trước, sau đó Sắp xếp theo độ ưu tiên [cite: 334, 335]
  const displayedTodos = useMemo(() => {
    return sortTodosByPriority(filterTodos(todos, filter));
  }, [todos, filter]);

  // Tính toán thống kê [cite: 336]
  const stats = useMemo(() => getTodoStats(todos), [todos]);

  return (
    <div className="app-container">
      <h1>Todo Priority App</h1>
      <p>Ứng dụng ReactJS dùng để thực hành GitHub Flow, Test và CI.</p>
      
      {/* Component nhập liệu [cite: 342] */}
      <TodoForm onAdd={handleAdd} />

      {/* Bộ lọc trạng thái [cite: 343, 350] */}
      <div className="filter-box">
        <label>Lọc công việc: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Tất cả</option>
          <option value="completed">Đã hoàn thành</option>
          <option value="pending">Chưa hoàn thành</option>
        </select>
      </div>

      {/* Component thống kê [cite: 351] */}
      <TodoStats stats={stats} />

      {/* Danh sách hiển thị [cite: 352] */}
      <TodoList todos={displayedTodos} onToggle={handleToggle} />
    </div>
  );
}