import React, { useState } from 'react';
import './App.css';

/**
 * Minimalistic Task Manager App
 * Features: Add, display, and delete tasks.
 * Uses primary (#1976d2), secondary (#424242), and accent (#ff9800) color palette.
 */

// PUBLIC_INTERFACE
function App() {
  // State for managed list of tasks (simple in-memory array)
  const [tasks, setTasks] = useState([]);
  // State for controlled input field
  const [input, setInput] = useState('');

  // Handler for changing input value
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handler for adding a new task
  // PUBLIC_INTERFACE
  const handleAddTask = () => {
    const trimmed = input.trim();
    if (trimmed.length === 0) return;
    setTasks([...tasks, trimmed]);
    setInput('');
  };

  // Handler for pressing Enter to add task
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  // Handler for deleting a task
  // PUBLIC_INTERFACE
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-app">
      <header className="tm-header">
        <h1 className="tm-title">Task Manager</h1>
      </header>

      <main className="tm-main">
        <div className="tm-add-row">
          <input
            className="tm-input"
            type="text"
            placeholder="Enter a new task..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            aria-label="New Task"
          />
          <button
            className="tm-add-btn"
            onClick={handleAddTask}
            aria-label="Add Task"
            disabled={input.trim() === ''}
          >
            Add
          </button>
        </div>

        <ul className="tm-task-list">
          {tasks.length === 0 && (
            <li className="tm-empty-state">No tasks yet. Add your first task!</li>
          )}
          {tasks.map((task, idx) => (
            <li className="tm-task" key={idx}>
              <span className="tm-task-text">{task}</span>
              <button
                className="tm-delete-btn"
                aria-label={`Delete "${task}"`}
                onClick={() => handleDeleteTask(idx)}
                title="Delete task"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
