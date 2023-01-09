import { createStore } from 'redux';
import { parent } from './reducers';


export const store = createStore(parent,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())