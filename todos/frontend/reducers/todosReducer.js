import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions.js';
import merge from 'lodash/merge';

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type) {
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]:action.todo};
      return merge({},state,newTodo);
    case RECEIVE_TODOS:
      let newState = merge({},state);
      newState = action.todos;
      return newState;
    case REMOVE_TODO:
      let newSt = merge({},state);
      delete newSt[`${action.todoId}`];
    default:
      return state;
  }
};

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export default todosReducer;
