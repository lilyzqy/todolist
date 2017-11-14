import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import Root from './components/root';
import {allTodos} from './reducers/selectors';


document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  ReactDOM.render(<Root store = {store} />, document.getElementById('content'));
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
});
