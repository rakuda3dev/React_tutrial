import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist' ;
import storage from 'redux-persist/lib/storage';
import {persistGate, PersistGate} from 'redux-persist/integration/react';
import './index.css';
import App from './App';

// value of state
let state_value = {
  counter:0,
  message:"COUNTER"
}

// reducer
function counter(state = state_value, action){

  switch (action.type){
    case 'INCREMENT':
    return {
      counter:state.counter + 1,
      message:"INCREMENT"
    };
    case 'DECREMENT':
    return {
      counter:state.counter - 1,
      message:"DECREMENT"
    };
    case 'RESET':
    return {
      counter:0,
      message:"RESET"
    };
    default:
    return state;
  }
}

// configration of Redux Persist
const persistConfig = {
  key: 'root',
  storage,
}

// persist reducer
const persistedReducer = persistReducer(persistConfig, counter)

// store persister
let store = createStore(persistedReducer)
let pstore = persistStore(store)

// 表示のレンダリング
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={pstore}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
