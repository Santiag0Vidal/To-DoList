import React, { useState } from "react";
import BuscadorTareas from "../BuscadorTareas/BuscadorTareas";
import AgregarTarea from "../AgregarTarea/AgregarTarea";
import TaskList from "../ListaTarea/ListaTarea";
import styles from "./Tarea.module.css";

//Usen mismo nombre de la funcion que exportan como nombre del archivo. Si el archivo se lama Tarea, entonces el export default deberia ser Tarea
export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addTask = (description) => {
    setTasks([...tasks, { description, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(
    (
      task // Filtra las tareas según el texto de búsqueda
    ) => task.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <AgregarTarea onAddTask={addTask} />
      <BuscadorTareas value={searchText} onChange={setSearchText} />
      <p>Total de tareas: {tasks.length}</p>
      <p>Tareas completadas: {tasks.filter((task) => task.completed).length}</p>

      {tasks.length === 0 && <p>No hay tareas cargadas.</p>}

      {tasks.length > 0 && filteredTasks.length === 0 && (
        <p>No hay tareas que coincidan con la búsqueda.</p>
      )}

      {tasks.length > 0 && filteredTasks.length > 0 && (
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      )}

      {tasks.length > 0 && tasks.every((task) => task.completed) && (
        <div>
          <p className={styles.restMessage}>
            Completaste tus tareas. ¡Estás listo para descansar!
          </p>
        </div>
      )}
    </div>
  );
}
