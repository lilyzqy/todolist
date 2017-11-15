import {combineReducers} from 'redux';
import todosReducer from './todosReducer';
import stepsReducer from './steps_reducer';


export default combineReducers ({
  todos: todosReducer,
  steps: stepsReducer
  //todo: todoReducer
});
