import React from 'react'; // Importa React desde la biblioteca 'react'
import styles from './BuscadorTareas.module.css'; // Importa el archivo CSS de estilo

export default function BuscadorTareas({ value, onChange }) { // Define un componente funcional llamado BuscadorTareas que recibe value y onChange como props
  return ( // Retorna la interfaz de usuario del componente BuscadorTareas
    <div>
      <input
        type="text"
        value={value} // Establece el valor del input como el valor de la prop 'value'
        onChange={(e) => onChange(e.target.value)} // Cuando cambia el valor del input, se llama a la función onChange pasando el nuevo valor como argumento
        placeholder="Buscar tareas"
        className={styles.input} // Aplica la clase CSS del módulo importado al input
      />
    </div>
  );
}

