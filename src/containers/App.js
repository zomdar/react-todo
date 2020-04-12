import React, { useState } from "react";
import "./App.scss";

import CreateToDoItem from "../components/CreateToDoItem/CreateToDoItem";
import ToDoList from "../components/ToDoList/ToDoList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const [item, setItem] = useState([]);

  const addToDoListItem = (todo) => setItem([...item, todo.enteredItem]);
  const deleteTodoListItem = (index) => {
    if(index !== -1) {
      item.splice(index, 1);
      setItem([...item]);
    }
  }

  return (
    <Container>
      <CreateToDoItem onAddToDoListItem={addToDoListItem} />
      <Row>
        <h1>To Do List</h1>
      </Row>
      <ToDoList 
        onDeleteItem={deleteTodoListItem}
        todoItem={item} />
    </Container>
  );
}

export default App;
