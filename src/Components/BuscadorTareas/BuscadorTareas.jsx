import React from 'react'; 
import styles from './BuscadorTareas.module.css'; 

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

