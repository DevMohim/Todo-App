import { useState, useEffect } from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  // ✅ localStorage থেকে initial data নাও
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ todos বদলালে localStorage এ save করো
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    setTodos((prev) => [...prev, { id: uuidv4(), todo }]);
  };

  const handleRemoveTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-start items-center flex-col bg-slate-500 pt-5">
      <h1 className="text-3xl font-bold text-white mb-5">ToDo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}
