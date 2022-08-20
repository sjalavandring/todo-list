import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {todoStore} from './store/store'
export {default as Task} from '../src/Components/Tasks/Task'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <Provider store={todoStore}>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>  
);

reportWebVitals();
