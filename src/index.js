import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let var1 = "valeur"

ReactDOM.render(
  <React.StrictMode>
    <App name = "var1"/>
  </React.StrictMode>,
  document.getElementById('root')
);
