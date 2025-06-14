import React from "react";

const TaskList = ({ tasks, onToggle, onRemove }) => {
  if (tasks.length === 0)
    return <p className="text-gray-500 mt-4">No tasks found.</p>;

  return (
    <ul className="w-full max-w-md">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-white rounded p-3 mb-2 shadow"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-4 h-4"
              title="Mark as Completed"
            />
            <span
              className={`${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => onRemove(task.id)}
            className="text-red-500"
            title="Delete Task"
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
