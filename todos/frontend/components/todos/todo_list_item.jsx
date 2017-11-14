import React from 'react';

class TodoListItem extends React.Component{
  // constructor(props) {
  //   //debugger
  //   super();
  // }


  render() {
    //this.props
    return (
      <li>{this.props.todo.title}
        <button type="button" onClick={ this.handleSubmit }> Delete Todo</button>
      </li>

    );

  }
}

export default TodoListItem;
