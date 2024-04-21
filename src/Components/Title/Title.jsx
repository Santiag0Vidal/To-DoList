//Esto es el punto 5
/*
import React from 'react';
import styles from './Title.module.css'; // Importando el archivo CSS

function Titulo(props) {
  return <h2 className={styles.titulo}>{props.texto}</h2>; // Añadiendo la clase CSS "titulo" desde el módulo importado
}

export default Titulo;*/

import React from 'react';
import gifX2 from '../../assets/GifX2.gif';
import styles from './Title.module.css'; // Importando el archivo CSS

function Titulo(props) {
    return ( 
    
        <div>
            <img src={gifX2} alt="GifX2" className={styles.gif}/>
        </div>
    );
}


export default Titulo;