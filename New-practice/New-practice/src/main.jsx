import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './States/todoReducer';
import App from './App'

import './index.css'


const store = createStore(todoReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>   <App /></Provider>

  </React.StrictMode>,
)
