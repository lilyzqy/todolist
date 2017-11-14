import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class ToDoList extends React.Component {
  // constructor(props) {
  //   debugger
  //   super(props);
  //   this.props = props;
  // }
  render() {
    const {removeTodo,receiveTodo, todos} = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} removeTodo = {removeTodo}/>)}
        </ul>
        <TodoForm receiveTodo={receiveTodo}/>
      </div>

    );
  }
}
// export const ToDoList = () => { return(<h3>Todo List goes here!</h3>);};
export default ToDoList;
