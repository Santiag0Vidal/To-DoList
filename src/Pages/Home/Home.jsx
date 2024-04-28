import React from "react";
import Tarea from "../../Components/Tarea/Tarea";
import Titulo from "../../Components/Title/Title";
import styles from "./Home.module.css";

//Buen trabajo.
//Bien componetizado. Codigo limpio y facil de leer.

//Observaciones:
//El componente title no cumple con el enunciado.
//Limpien el readme esta con ducomentacion autogenerada. La guia de instalacion no es correcta.

//Tarea podria no existir y toda esa logica ser traida al Home.

// No se que version de node usaron, pero no es la ultima, con lo cual falla al querer instalar y correr la app. Tuve que modificar el comando start para ejecutar el proyecto
//Podrian agregar algunas imagenes de como se ve la aplicacion corriendo al readme?

function Home() {
  return (
    <div className={styles.Limitado}>
      {/* Hagan self-close siempre que puedan.<Tarea></Tarea> --> <Tarea/> */}
      <Tarea></Tarea>
      <Titulo texto="Somos el grupo X2" />
    </div>
  );
}

export default Home;
