import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //se crea una "raíz" de ReactDOM en el elemento HTML con el ID root. Este elemento es donde se montará la aplicacion React en la página web
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
