import React, { useState } from 'react'; 

export default function AgregarTarea({ onAddTask }) { 
  const [currentTask, setCurrentTask] = useState(''); 
  const [showError, setShowError] = useState(false);

  const handleAddTask = () => { 
    if (currentTask.trim() !== '') {
    onAddTask(currentTask.trim()); 
    setCurrentTask(''); // Limpio el valor del input
    setShowError(false); 
  } else {
    setShowError(true); 
  }
  };

  return ( 
    <div>
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)} 
        
        placeholder="Agregar nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button> 
      {showError && <p>No se pueden agregar tareas vacías.</p>}
    </div>
  );
}

