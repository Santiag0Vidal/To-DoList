import React from 'react';
import Tarea from '../../Components/Tarea/Tarea';
import Titulo from '../../Components/Title/Title';
import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.Limitado}>
            <Tarea></Tarea>
            <Titulo texto="Somos el grupo X2"/>
        </div>
    );
}

export default Home;
