import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selectors';
import {receiveTodo, receiveTodos, removeTodo} from '../../actions/todo_actions';

const mapStateToProps = (state)=> ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  removeTodo: (todoId) => dispatch(removeTodo(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
