import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    onAdd(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 rounded w-72"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        title="Type your task here"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        title="Add Task"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
