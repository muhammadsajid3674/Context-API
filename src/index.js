import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { parent } from './redux/reducers/index';
import { loadStateLocalStorage, saveStateLocalStorage } from './core/localStorageMethods';
import { configureStore } from '@reduxjs/toolkit';

const persistedState = loadStateLocalStorage()
const store = configureStore({
  reducer: parent,
  preloadedState: persistedState
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
  saveStateLocalStorage(store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
