import React, { Component } from "react";
import { MDBInput } from "mdbreact";

export default class AddTodo extends Component {
  state = {
    content: ""
  };

  addTodoList = e => {
    this.setState({
      content: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addNewTodo(this.state); // addNewTodo refer from App.js AddNewTodo function
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <MDBInput
            label="Add To-do's"
            outline
            onChange={this.addTodoList}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
