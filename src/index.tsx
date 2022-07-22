import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RecomendationReducer from './Slice/createSlice'
import { persistReducer, persistStore } from 'redux-persist';

import { PersistGate } from "redux-persist/integration/react";
import sessionStorage from 'redux-persist/es/storage/session';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const config = { key: "state", storage: sessionStorage }

const rootReducer = combineReducers({
  RecomendationReducer
});
const persistedReducer = persistReducer(config, rootReducer)


const configuredStore = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== "production",
});

let persistor = persistStore(configuredStore);


root.render(
  <React.StrictMode>


    
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={configuredStore}>
        <App />
      </Provider>
    </PersistGate>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
