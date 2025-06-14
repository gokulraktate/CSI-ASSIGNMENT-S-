import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterTask from './components/FilterTask';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === 'newest') return b.id - a.id;
      return a.id - b.id;
    });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">To Do List</h1>
      <FilterTask filter={filter} setFilter={setFilter} setSortOrder={setSortOrder} />
      <AddTask onAdd={addTask} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  );
};

export default App;
