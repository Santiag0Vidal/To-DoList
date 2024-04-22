//Esto es el punto 5

import React from 'react';
import gifX2 from '../../assets/GifX2.gif';
import styles from './Title.module.css'; 

function Titulo(props) {
    return ( 
    
        <div>
            <img src={gifX2} alt="GifX2" className={styles.gif}/>
        </div>
    );
}


export default Titulo;