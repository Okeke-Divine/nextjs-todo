// TodoItem.js

"use client"; // Ensures this code only runs on the client-side

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {

  const handleDelete = async (id: string) => {
    const listItem = document.getElementById(id);
    if (listItem) {
      listItem.style.display = 'none';
    }
    deleteTodo(id);
  };

  return (
    <>
      <li id={id} className={`flex gap-1 items-center`}>
        <div className="cursor-pointer text-red-200" onClick={() => handleDelete(id)}>
          [x]
        </div>
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-400">
          {title}
        </label>
      </li>
    </>
  );
}

export default TodoItem;
