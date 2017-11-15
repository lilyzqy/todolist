import React from 'react';

class StepForm extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.changeState = this.changeState.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeState(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  uniqueId() {
  return new Date().getTime();
}

  // handleSubmit(e){
  //   e.preventDefault();
  //   const newToDo = {id: this.uniqueId(),
  //                   title:this.state.title,
  //                   body: this.state.body};
  //   this.props.receiveTodo( newToDo );
  // }

  render() {
    console.log(this.state);
    return (
      <form>
        <label>
          Title
          <input type="text" name="title" onChange={this.changeState}></input>
        </label>
        <label>
          Description
          <input type="text" name="description" onChange={this.changeState}></input>
        </label>
        <button type="submit" onClick={ this.handleSubmit } >Create Step</button>
      </form>
    );
  }

}

export default StepForm;
