import React from 'react'; // Importa React desde la biblioteca 'react'

export default function BuscadorTareas({ searchText, onChange }) { // Define un componente funcional llamado BuscadorTareas que recibe value y onChange como props
  return ( // Retorna la interfaz de usuario del componente BuscadorTareas
    <div>
      <input
        type="text"
        value={searchText}//{value} // Establece el valor del input como el valor de la prop 'value'
        onChange={(e) => onChange(e.target.value)} // Cuando cambia el valor del input, se llama a la función onChange pasando el nuevo valor como argumento
        placeholder="Buscar tareas"
      />
    </div>
  );
}
