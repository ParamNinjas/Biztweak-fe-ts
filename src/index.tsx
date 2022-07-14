import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RecomendationReducer from './Slice/createSlice'
import {persistReducer} from 'redux-persist';
import { combineReducers } from 'redux';
import sessionStorage from 'redux-persist/es/storage/session';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const config = {key : "state" , storage : sessionStorage}

const rootReducer = combineReducers({
  RecomendationReducer
});
const persistedReducer = persistReducer(config ,rootReducer) 
const store = createStore(persistedReducer);
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
