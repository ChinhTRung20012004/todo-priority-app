export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="card">
      <h2>Danh sách công việc</h2>
      {todos.length === 0 ? (
        <p>Chưa có công việc nào.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div>
                {/* Gạch ngang chữ nếu đã hoàn thành */}
                <strong style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.title}
                </strong>
                <p>Priority: {todo.priority} | Status: {todo.completed ? "Completed" : "Pending"}</p>
              </div>
              <div className="actions">
                <button onClick={() => onToggle(todo.id)}>
                  {todo.completed ? "Bỏ hoàn thành" : "Hoàn thành"}
                </button>
                
                {/* Nút Xóa mới thêm vào */}
                <button 
                  onClick={() => onDelete(todo.id)} 
                  style={{ backgroundColor: '#ff4d4f', color: 'white', marginLeft: '10px' }}
                >
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}