import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';

// value of state
let state_value = {
  counter:0,
  message:"COUNTER"
}

// Reducer
function counter(state= state_value, action){
  switch (action.type){
    case 'INCREMENT':
    return {
      counter:state.counter + 1,
      message:"INCREMENT"
    };
    case 'DECREMENT':
    return {
      counter:state.counter -1,
      message:"DECREMENT"
    };
    default:
    return state;
  }
}

// store の作成
let store = createStore(counter);

// 表示のレンダリング
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
