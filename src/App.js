import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { MDBRow, MDBCard, MDBCardTitle, MDBCardBody } from "mdbreact";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "buy milk" }, { id: 2, content: "Go to Gym" }]
  };

  deleteTodo = id => {
    // console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos // if the function variable and state variable is equal you can use like this=> todos: todos
    });
  };

  addNewTodo = todo => {
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div className="App">
        <MDBRow>
          <MDBCard className="card">
            <MDBCardTitle className="cardTitle">To-Do List</MDBCardTitle>
            <MDBCardBody>
              <AddTodo addNewTodo={this.addNewTodo} />
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </div>
    );
  }
}

export default App;
