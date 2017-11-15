import React from 'react';
import StepForm from './step_form';
import StepListContainer from './step_list_container';

class TodoDetailView extends React.Component {

  constructor(props){
    super();
    this.state = {todo: props.todo};
  }


  handleSubmit(e) {

    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  updateSteps(e) {
    e.preventDefault();
    this.setState({done: !this.state.done});
  }

  render(){
    return (
      <div>
        <p>{this.props.todo.body}</p>
        <StepListContainer todoId = {this.props.todo.id} />

        <button type="button" onClick={ this.handleSubmit.bind(this) }> Delete Todo</button>
      </div>
    );
  }
}

export default TodoDetailView;
