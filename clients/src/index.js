import React from 'react';
import ReactDOM from 'react-dom'; // ✅ Correct for React 17
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-right" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
