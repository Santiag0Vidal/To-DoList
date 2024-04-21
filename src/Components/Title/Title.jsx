//Esto es el punto 5
import React from 'react';
import gifX2 from '../../assets/GifX2.gif';
import './Styles.css';

function Titulo(props) {
    return ( //<p className="newMessage">{props.texto}</p>; //aca muestra el texto que recibe como prop
    
        <div>
            <img src={gifX2} alt="GifX2" className="gif"/>
        </div>
    );
}


export default Titulo;