import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Datenaufbereiter } from './Datenaufbereitung/Datenaufbereiter';


/**
 * Erstellt eine Json Array in der Console, dies wird nur benötigt um später damit zu arbeiten
 * Sollte im Produktivbetrieb auskommentiert werden
 */
// Datenaufbereiter.create_json_array_to_console();

const root = ReactDOM.createRoot(document.getElementById('buettner-sven-react-plant-search-tool'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
