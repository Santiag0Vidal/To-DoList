import React from 'react'; // Importa React desde la biblioteca 'react'
import style from './Button.module.css';

export default function Button({ onClick, buttonText }) { // Define un componente funcional llamado TaskInputButton que recibe onClick y buttonText como props
  return ( // Retorna la interfaz de usuario del componente TaskInputButton
    <button onClick={onClick}>{buttonText}</button> // Renderiza un botón que ejecuta la función onClick cuando se hace clic y muestra el texto buttonText
  );
}
