import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Todos.css";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";
// import { MDBRow, MDBBadge, MDBCardBody } from "mdbreact";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="d-flex flex-row" key={todo.id}>
          <MDBListGroup className="listGroup">
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              {todo.content}
              <MDBBadge
                className="badge"
                color="primary"
                pill
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <i className="fas fa-times" />
              </MDBBadge>
            </MDBListGroupItem>
          </MDBListGroup>
        </div>
      );
    })
  ) : (
    <MDBListGroup className="listGroup">
      <MDBListGroupItem>No Todo's Left</MDBListGroupItem>
    </MDBListGroup>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
