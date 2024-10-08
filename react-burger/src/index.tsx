import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './components/app/app.js';
import { Provider } from 'react-redux';
import store from './services/store.js';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
