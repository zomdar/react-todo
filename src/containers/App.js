import React, { useState } from 'react';
import './App.scss';

import CreateToDoItem from '../components/CreateToDoItem/CreateToDoItem';
import ToDoList from '../components/ToDoList/ToDoList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {

  const [item, setItem] = useState('');

  const addToDoListItem = () => console.log();

  return (
    <Container>
      <CreateToDoItem 
        onAddToDoListItem={addToDoListItem}></CreateToDoItem>
      <Row>
        <h1>To Do List</h1>
      </Row>
      <ToDoList></ToDoList>
    </Container>
  )
}

export default App;
