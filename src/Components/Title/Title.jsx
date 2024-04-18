//Esto es el punto 5
import React from 'react';

function Titulo(props) {
    return <h2 style={{ color: 'blue' }}>{props.texto}</h2>; //aca muestra el texto que recibe como prop
}

export default Titulo;