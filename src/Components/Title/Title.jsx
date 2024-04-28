//Esto es el punto 5

import React from "react";
//Nice image!
import gifX2 from "../../assets/GifX2.gif";
import styles from "./Title.module.css";

//Este componente no esta cumpliendo con lo que pedia el enunciado. la idea es renderizar un h1 con un text como prop.

function Titulo(props) {
  return (
    <div>
      <img src={gifX2} alt="GifX2" className={styles.gif} />
    </div>
  );
}

export default Titulo;
