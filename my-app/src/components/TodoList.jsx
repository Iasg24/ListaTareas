import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask }) => {
  return (
    <div className="mb-4">
      <ul className="list-group list-group-flush border rounded">
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
