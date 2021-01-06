import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist' ;
import storage from 'redux-persist/lib/storage';
import {persistGate, PersistGate} from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import MemoStore, {MemoReducer} from './memo/Store';
import { memoReducer } from './memo/Store';

// value of state
let state_value = {
  counter:0,
  message:"COUNTER"
}

// configration of Redux Persist
const persistConfig = {
  key: 'memo',
  storage,
}

// persist reducer
const persistedReducer = persistReducer(persistConfig, memoReducer)

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
