import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
// import Task from '../src/Components/Tasks/Task'
export {default as Task} from '../src/Components/Tasks/Task'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
