/*
 Este componente TodoList renderiza una lista de tareas. Cada tarea se muestra como un elemento de lista (<li>)
que contiene un checkbox para marcar la tarea como completada, el texto de la tarea y un botón para eliminar la tarea.
Cuando se marca o desmarca el checkbox, se llama a la función onToggleTask, y cuando se hace clic en el botón de
eliminar, se llama a la función onDeleteTask, ambas pasando el índice de la tarea como argumento.
*/
import React from 'react'; // Importa React desde la biblioteca 'react'

export default function TodoList({ tasks, onToggleTask, onDeleteTask }) { // Define un componente funcional llamado TodoList que recibe tasks, onToggleTask y onDeleteTask como props
  return ( // Retorna la interfaz de usuario del componente TodoList
    <ul>
      {tasks.map((task, index) => ( // Mapea cada tarea en un elemento de lista
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed} // Establece el estado del checkbox como completado o no completado según el estado de la tarea
            onChange={() => onToggleTask(index)} // Cuando cambia el estado del checkbox, se llama a la función onToggleTask pasando el índice de la tarea como argumento
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.description}</span> {/* Establece el estilo del texto como tachado si la tarea está completada */}
          <button onClick={() => onDeleteTask(index)}>Eliminar</button> {/* Cuando se hace clic en el botón, se llama a la función onDeleteTask pasando el índice de la tarea como argumento */}
        </li>
      ))}
    </ul>
  );
}