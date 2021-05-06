import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Createuser from './createUser';

ReactDOM.render(
  <React.StrictMode>
    <Createuser />
  </React.StrictMode>,
  document.getElementById('createUser')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
