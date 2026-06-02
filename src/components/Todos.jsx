import Todo from './Todo';

export default function Todos({ todos, onRemoveTodo }) {
  return (
    <div className="bg-slate-600 p-5 rounded-md mb-2 w-[90%] md:w-[60%]">
      {todos.length === 0 ? (
        <p className="text-white text-center">No todos yet! Add one above.</p>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            onRemoveTodo={onRemoveTodo}
          />
        ))
      )}
    </div>
  );
}
