import { useState } from 'react';
import search from '../assets/search.svg';

export function Index({ searchChange, addTodo }) {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handleSearch = event => {
    searchChange(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTodo(value, description);
    setValue('');
    setDescription('');
  };

  return (
    <div className="index">
      <h1>TodoList</h1>
      <div className="search-container">
        <div className="search-icon">
          <img src={search} alt="" />
        </div>
        <input
          type="text"
          name=""
          id="search-bar"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
      <div className="outline"></div>
      <div className="create-task">
        <form action="" onSubmit={handleSubmit}>
          <div className="task-create-container">
            <label htmlFor="task-name">Criar Tarefa</label>
            <input
              type="text"
              name="taskname"
              id="task-name"
              onChange={e => setValue(e.target.value)}
              value={value}
            />
          </div>
          <div className="task-create-container">
            <label htmlFor="">descrição da tarefa:</label>
            <input
              type="text"
              name="description"
              id="desc-inp"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <button type="submit" id="submit-btn">
            criar tarefa
          </button>
        </form>
      </div>
    </div>
  );
}
