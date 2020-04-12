import React from "react";

import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import "./ToDoList.scss";

const ToDoList = ((props) => {

  const items = [...props.todoItem];

  // function alertClicked(index) {
  //   console.log(items);
  //   items.splice(1, index);
  // }

  const listItems = items.map((item, index) => {
    return (
        <ListGroup.Item key={index} action onClick={() => props.onDeleteItem(index)}>
          {item}
        </ListGroup.Item>
    )
  })

  return (
    <Row>
      <ListGroup>
          {listItems}
      </ListGroup>
    </Row>
  );
});

export default ToDoList;
