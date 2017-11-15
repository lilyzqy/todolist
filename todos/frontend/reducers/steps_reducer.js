import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions.js';
import merge from 'lodash/merge';

const stepsReducer = (state = initialState,action) =>{
  Object.freeze(state);
  switch(action.type) {
  case RECEIVE_STEP:
    const newStep = {[action.step.id]:action.step};
    return merge({},state,newStep);
  case RECEIVE_STEPS:
    let newState = merge({},state);
    newState = action.steps;
    return newState;
  case REMOVE_STEP:
    let newSt = merge({},state);
    delete newSt[`${action.stepId}`];
    return newSt;
  default:
    return state;
  }
};

const initialState =  {
    1: { // this is the step with id = 1
      id: 1,
      title: 'walk to store',
      done: false,
      todo_id: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: 'buy soap',
      done: false,
      todo_id: 1
    }
  };

  export default stepsReducer;
