import { useState } from 'react';

export default function NewTodo({ onAddTodo }) {
  const [todo, setTodo] = useState({ title: '', desc: '' });
  const { title, desc } = todo;

  const handleChange = (e) => {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(todo);
    setTodo({ title: '', desc: '' });
  };

  return (
    <div className="bg-slate-600 w-[90%] md:w-[60%] mb-3 rounded-md p-5 text-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="text-md font-semibold" htmlFor="title">
            New Todo :
          </label>
          <input
            className="border border-white w-[75%] p-1 rounded-md outline-none ml-1 text-white"
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Your task here........."
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5 flex justify-start items-center">
          <label className="text-md font-semibold" htmlFor="desc">
            Description :
          </label>
          <textarea
            className="border border-white w-[73%] p-1 rounded-md outline-none ml-1 text-white"
            name="desc"
            id="desc"
            value={desc}
            placeholder="Describe your task"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="text-center bg-slate-800 px-6 py-2 w-full font-bold text-xl rounded-md cursor-pointer"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
