import React, { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ResumenTareasRealizadas from './components/ResumenTareasRealizadas';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarea 1', completed: true },
    { id: 2, text: 'Tarea 2', completed: false },
    { id: 3, text: 'Tarea 3', completed: true },
    { id: 4, text: 'Tarea 4', completed: false },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const pendingTasksCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <TodoHeader />
      <TodoForm addTask={addTask} removeCompletedTasks={removeCompletedTasks} />
      <TodoList tasks={tasks} toggleTask={toggleTask} />
      <ResumenTareasRealizadas pendingTasksCount={pendingTasksCount} />
    </div>
  );
}

export default App;
