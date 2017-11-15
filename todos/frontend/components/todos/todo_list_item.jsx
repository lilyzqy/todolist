import React from 'react';
import TodoDetailViewContainer from '../steps/todo_detail_view_container';

class TodoListItem extends React.Component{
  constructor(props) {
    //debugger
    super();

    this.state = {
      done: props.todo.done,
      detail: false
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);

  }

  // changeState(e) {
  //   this.setState({[]})
  // }

  updateTodo(e) {
    e.preventDefault();
    this.setState({done: !this.state.done});
  }

  showDetail(){
    if(this.state.detail) {
      return <TodoDetailViewContainer todo = {this.props.todo}/>;
      }
  }

  changeDetail(){
    this.setState({detail:!this.state.detail}) ;
  }

  render() {
    //this.props
    return (
      <li><h2 onClick={this.changeDetail.bind(this)}>{this.props.todo.title}</h2>
        <button type="button" onClick={ this.updateTodo }> {this.state.done ? 'Undo' : 'Done'} </button>
        {this.showDetail()}
      </li>

    );

  }
}

export default TodoListItem;
// <button type="button" onClick={ this.handleSubmit }> Delete Todo</button>
