import { TrashIcon } from '@heroicons/react/24/solid';

export default function Todo({ todo, id, onRemoveTodo }) {
  const { title, desc } = todo;

  return (
    <div className="bg-slate-800 flex justify-between items-center p-2 rounded-md mb-2">
      <div className="text-white pl-2">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p >{desc}</p>
      </div>
      <button type="button" onClick={() => onRemoveTodo(id)}>
        <TrashIcon className="h-6 w-6 cursor-pointer text-red-500" />
      </button>
    </div>
  );
}
