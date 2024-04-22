import React from 'react'; 
import styles from './Button.module.css'; 

export default function Button({ onClick, buttonText }) { 
  return ( 
    <button className={styles.button} onClick={onClick}>{buttonText}</button> 
  );
}
