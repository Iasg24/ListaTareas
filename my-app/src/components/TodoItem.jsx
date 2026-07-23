import React from 'react';

const TodoItem = ({ task, toggleTask }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-center py-3">
      <input
        className="form-check-input me-2 mt-0"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        id={`task-${task.id}`}
        style={{ cursor: 'pointer' }}
      />
      <label 
        className="form-check-label" 
        htmlFor={`task-${task.id}`}
        style={{ 
          cursor: 'pointer',
          color: '#555',
          fontSize: '1rem'
        }}
      >
        {task.text}
      </label>
    </li>
  );
};

export default TodoItem;