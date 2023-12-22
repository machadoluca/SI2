import { useState } from 'react';
import { Index } from './components/Index';
import './styles/App.css';
import { Todo } from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Limpar sofá',
      description: 'description 1',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Estudar',
      description: 'description 2',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Ler',
      description: 'description 2',
      isCompleted: false
    },
    {
      id: 4,
      title: 'Jogar games',
      description: 'description 3',
      isCompleted: false
    },
    {
      id: 5,
      title: 'Assistir jogo',
      description: 'description 3',
      isCompleted: false
    },
    {
      id: 6,
      title: 'treinar',
      description: 'description 3',
      isCompleted: false
    }
  ]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (title, description) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        title,
        description,
        isCompleted: false
      }
    ];

    setTodos(newTodo);
  };

  const removeTodo = id => {
    const newTodos = [...todos];
    const notTodos = newTodos.filter(todo => (todo.id !== id ? todo : null));
    console.log(notTodos);

    setTodos(notTodos);
  };

  const completeTodo = id => {
    const newTodos = [...todos];
    newTodos.map(todo =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );

    setTodos(newTodos);
  };

  const handleSearchChange = value => {
    const todosFilter = todos.filter(todo =>
      todo.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredTodos(todosFilter);
  };

  return (
    <>
      <Index searchChange={handleSearchChange} addTodo={addTodo} />
      <div className="todos-container">
        {filteredTodos.length > 0
          ? filteredTodos.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))
          : todos.map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
      </div>
    </>
  );
}

export default App;
