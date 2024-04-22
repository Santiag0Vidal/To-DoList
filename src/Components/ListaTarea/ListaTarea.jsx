import React from 'react'; // Importa React desde la biblioteca 'react'
import styles from './ListaTarea.module.css'; // Importa el archivo CSS de estilo
import Button from '../Button/Button';


// Componente para mostrar la lista de tareas y realizar operaciones
function TaskList({ tasks, onToggle, onDelete }) { // Define un componente funcional llamado TaskList que recibe tareas, funciones onToggle y onDelete como props
  return ( // Retorna la interfaz de usuario del componente TaskList
    <ul>
      {tasks.map((task, index) => ( // Mapea cada tarea en un elemento de lista
        <li key={index} className={styles.listItem}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
            className={styles.checkbox}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className={styles.taskDescription}>
            {task.description}
          </span>
          <Button onClick={() => onDelete(index)} buttonText="Eliminar" className={styles.delete} /> {/* Renderiza el componente TaskInputButton y pasa la función onDelete y el texto "Eliminar" como props */}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
