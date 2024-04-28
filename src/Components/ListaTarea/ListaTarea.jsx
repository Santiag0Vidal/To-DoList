import React from "react";
import styles from "./ListaTarea.module.css";
import Button from "../Button/Button";

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map(
        (
          task,
          index // Mapea cada tarea en un elemento de lista
        ) => (
          <li key={index} className={styles.listItem}>
            {/* Esto podria ser un componente checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(index)}
              className={styles.checkbox}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              className={styles.taskDescription}
            >
              {task.description}
            </span>
            <Button
              onClick={() => onDelete(index)}
              buttonText="Eliminar"
              className={styles.delete}
            />
          </li>
        )
      )}
    </ul>
  );
}

export default TaskList;
