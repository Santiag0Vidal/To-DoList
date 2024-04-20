import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //se crea una "raíz" de ReactDOM en el elemento HTML con el ID root. Este elemento es donde se montará la aplicacion React en la página web
root.render(  //Esta función toma JSX y lo renderiza en el elemento raíz creado en la linea anterior. Dentro del método render, encapsulas el component App dentro de <React.StrictMode>, una herramienta que ayuda a identificar problemas potenciales en la aplicación.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
