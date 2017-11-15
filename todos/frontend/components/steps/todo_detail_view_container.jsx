import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {removeTodo} from '../../actions/todo_actions';
import {receiveSteps, receiveStep, removeStep} from '../../actions/step_actions';

// const mapStateToProps = (state)=> ({
//
// });

const mapDispatchToProps = dispatch => ({
  removeTodo: (todoId) => dispatch(removeTodo(todoId)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps)),
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (stepId) => dispatch(removeStep(stepId))

});

export default connect (
  null,
  mapDispatchToProps
)(TodoDetailView);
