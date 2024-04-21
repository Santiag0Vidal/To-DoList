import style from './Tarea.module.css' // Importa los estilos CSS para el componente TodoListApp
import React, { useState } from 'react'; // Importa React y el hook useState desde la biblioteca 'react'
import TaskInputButton from '../Button/Button';
import BuscadorTareas from '../BuscadorTareas/BuscadorTareas';

// Componente para el input de agregar nuevas tareas
function TaskInput({ onAdd }) { // Define un componente funcional llamado TaskInput que recibe una función onAdd como prop
  const [currentTask, setCurrentTask] = useState(''); // Define un estado local currentTask para almacenar el valor del input

  const handleAddTask = () => { // Define una función handleAddTask para agregar una nueva tarea
    if (currentTask.trim() !== '') { // Verifica si el input no está vacío
      onAdd(currentTask); // Llama a la función onAdd pasando el valor del input como argumento
      setCurrentTask(''); // Limpia el valor del input
    }
  };

  return ( // Retorna la interfaz de usuario del componente TaskInput
    <div>
      <input
        type="text"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <TaskInputButton onClick={handleAddTask} buttonText="Agregar" /> {/* Renderiza el componente TaskInputButton y pasa la función handleAddTask y el texto "Agregar" como props */}
    </div>
  );
}

// Componente para mostrar la lista de tareas y realizar operaciones
function TaskList({ tasks, onToggle, onDelete }) { // Define un componente funcional llamado TaskList que recibe tareas, funciones onToggle y onDelete como props
  return ( // Retorna la interfaz de usuario del componente TaskList
    <ul>
      {tasks.map((task, index) => ( // Mapea cada tarea en un elemento de lista
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <TaskInputButton onClick={() => onDelete(index)} buttonText="Eliminar" /> {/* Renderiza el componente TaskInputButton y pasa la función onDelete y el texto "Eliminar" como props */}
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

  return ( // Retorna la interfaz de usuario del componente TodoListApp
    <div>
      <h1>To-Do List</h1>
      <TaskInput onAdd={addTask} /> 
      

      <BuscadorTareas searchText={searchText} onChange={setSearchText} /> {/* Esto es un comentario */}
     

      <p>Total de tareas: {tasks.length}</p>
      <p>Tareas completadas: {tasks.filter(task => task.completed).length}</p>

      {tasks.length === 0 || tasks.every(task => task.completed) ? (
      <p className={style.restMessage}>Completaste tus tareas. ¡Estás listo para descansar!</p> // Muestra este mensaje si no hay tareas o todas están completadas
    ) : (
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    )}

    {tasks.length > 0 && tasks.some(task => task.completed) && (
      <div>
        <h2>Tareas Completadas:</h2>
        <ul>
          {tasks.filter(task => task.completed).map((task, index) => (
            <li key={index}>
              <span style={{ textDecoration: 'line-through' }}>
                {task.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
}
