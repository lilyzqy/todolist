import {connect} from 'react-redux';
import StepList from './step_list';
import {allSteps} from '../../reducers/selectors';
//import TodoDetailView from './todo_detail_view';
//import {removeTodo} from '../../actions/todo_actions';
import {receiveSteps, receiveStep, removeStep} from '../../actions/step_actions';

const mapStateToProps = (state, {todoId})=> {
  debugger
  return {
    steps: allSteps(state, todoId)
  };
};

const mapDispatchToProps = dispatch => ({
  receiveSteps: (steps) => dispatch(receiveSteps(steps)),
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (stepId) => dispatch(removeStep(stepId))

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(StepList);
