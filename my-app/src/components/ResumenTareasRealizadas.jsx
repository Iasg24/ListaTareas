import React from 'react';

const ResumenTareasRealizadas = ({ pendingTasksCount }) => {
  return (
    <div 
      className="text-center p-4 rounded mt-4" 
      style={{ backgroundColor: '#cff4fc', color: '#055160' }}
    >
      <h2 className="fw-bold fs-4 mb-2">RESUMEN TAREAS</h2>
      <h3 className="fs-5 m-0">Tareas pendientes : {pendingTasksCount}</h3>
    </div>
  );
};

export default ResumenTareasRealizadas;
