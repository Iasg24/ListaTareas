import React, { useState } from 'react';

const TodoForm = ({ addTask, removeCompletedTasks }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Agregar Tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="btn btn-success me-2 fw-bold" style={{ width: '40px' }}>
        +
      </button>
      <button 
        type="button" 
        className="btn btn-danger fw-bold" 
        style={{ width: '40px' }}
        onClick={removeCompletedTasks}
        title="Eliminar tareas completadas"
      >
        -
      </button>
    </form>
  );
};

export default TodoForm;
