import React from "react";
import styles from "./BuscadorTareas.module.css";

//Este componente podria llamarse input o textfield, es decir algo mas general dado que en si es un campo de texto y no acotado unicamente a un buscador de tareas
export default function BuscadorTareas({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar tareas"
        className={styles.input}
      />
    </div>
  );
}
