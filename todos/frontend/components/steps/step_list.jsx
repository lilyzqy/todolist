import React from 'react';

class StepList extends React.Component {
  render() {
    const {removeStep, receiveStep, steps, todoId} = this.props;
    return (
      <ul>

        <StepListItemContainer todoId = {this.props.todoId}/>
      </ul>

    );
  }
}

export default StepList;


// <button type="button"> Delete</button>
// <button type="button" onClick={ this.updateSteps.bind(this) }> {this.state.done ? 'Undo' : 'Done'} </button>
//
// <StepForm />
