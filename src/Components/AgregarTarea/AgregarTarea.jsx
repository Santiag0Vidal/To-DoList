import React, { useState } from 'react'; // Importa React y el hook useState desde la biblioteca 'react'

export default function AgregarTarea({ onAddTask }) { // Define un componente funcional llamado FormularioAgregarTarea que recibe la función onAddTask como prop
  const [currentTask, setCurrentTask] = useState(''); // Define un estado local currentTask para almacenar el valor del input

  const handleAddTask = () => { // Define una función handleAddTask para agregar una nueva tarea
    onAddTask(currentTask); // Llama a la función onAddTask pasando el valor del input como argumento
    setCurrentTask(''); // Limpia el valor del input
  };

  return ( // Retorna la interfaz de usuario del componente FormularioAgregarTarea
    <div>
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)} // Actualiza el estado currentTask con el valor del input
        placeholder="Agregar nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar</button> // Llama a la función handleAddTask cuando se hace clic en el botón
    </div>
  );
}

