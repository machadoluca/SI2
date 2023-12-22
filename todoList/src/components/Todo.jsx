import del from '../assets/delete.svg';
import pencil from '../assets/pencil.svg';
import check from '../assets/check.svg';

export function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div
      className="todo-container"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      <div className="todo-info">
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
      <div className="todo-options">
        <button className="check" onClick={() => completeTodo(todo.id)}>
          <img src={check} alt="" />
        </button>
        <button className="edit">
          <img src={pencil} alt="" />
        </button>
        <button className="del" onClick={() => removeTodo(todo.id)}>
          <img src={del} alt="" />
        </button>
      </div>
    </div>
  );
}
