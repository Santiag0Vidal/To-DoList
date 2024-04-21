import React, { useState } from 'react'; // Importa React y el hook useState desde la biblioteca 'react'
import TaskInputButton from '../Button/Button';
import BuscadorTareas from '../BuscadorTareas/BuscadorTareas'; // Importa el nuevo componente BuscadorTareas
import AgregarTarea from '../AgregarTarea/AgregarTarea'; // Importa el nuevo componente AgregarTarea
import styles from './Tarea.module.css'; // Importa el archivo CSS de estilo

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
          <TaskInputButton onClick={() => onDelete(index)} buttonText="Eliminar" className={styles.delete} /> {/* Renderiza el componente TaskInputButton y pasa la función onDelete y el texto "Eliminar" como props */}
        </li>
      ))}
    </ul>
  );
}

// Componente principal que contiene el estado global y gestiona las operaciones de la lista de tareas
export default function TodoListApp() { // Define un componente funcional llamado TodoListApp y lo exporta como componente principal
  const [tasks, setTasks] = useState([]); // Define el estado local tasks para almacenar la lista de tareas
  const [searchText, setSearchText] = useState(''); // Define el estado local searchText para almacenar el texto de búsqueda

  const addTask = (description) => { // Define una función addTask para agregar una nueva tarea a la lista
    setTasks([...tasks, { description, completed: false }]); // Actualiza el estado tasks agregando una nueva tarea
  };

  const toggleTask = (index) => { // Define una función toggleTask para cambiar el estado de completado de una tarea
    const updatedTasks = [...tasks]; // Crea una copia de la lista de tareas
    updatedTasks[index].completed = !updatedTasks[index].completed; // Cambia el estado de completado de la tarea seleccionada
    setTasks(updatedTasks); // Actualiza el estado tasks con la lista de tareas actualizada
  };

  const deleteTask = (index) => { // Define una función deleteTask para eliminar una tarea de la lista
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filtra la lista de tareas excluyendo la tarea seleccionada
    setTasks(updatedTasks); // Actualiza el estado tasks con la lista de tareas actualizada
  };

  const filteredTasks = tasks.filter(task => // Filtra las tareas según el texto de búsqueda
    task.description.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <AgregarTarea onAddTask={addTask} />
      <BuscadorTareas value={searchText} onChange={setSearchText} />
      <p>Total de tareas: {tasks.length}</p>
      <p>Tareas completadas: {tasks.filter(task => task.completed).length}</p>
  
      {tasks.length === 0 && <p>No hay tareas cargadas.</p>}
  
      {tasks.length > 0 && filteredTasks.length === 0 && (
        <p>No hay tareas que coincidan con la búsqueda.</p>
      )}
  
      {tasks.length > 0 && filteredTasks.length > 0 && (
        <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      )}
  
      {tasks.length > 0 && tasks.every(task => task.completed) && (
        <div>
           <p className={styles.restMessage}>Completaste tus tareas. ¡Estás listo para descansar!</p>
        </div>
      )}
    </div>
  );
}
