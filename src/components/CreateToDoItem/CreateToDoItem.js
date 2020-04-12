import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "./CreateToDoItem.scss";

const CreateToDoItem = ((props) => {
  const [enteredItem, setEnteredItem] = useState("");

  const submitToDoList = (event) => {
    if(enteredItem.length) {
        event.preventDefault();
        props.onAddToDoListItem({ enteredItem });
        setEnteredItem("");
    }
  };

  return (
    <Row>
      <InputGroup className="mb-3 mt-3">
        <FormControl
          placeholder="Todo item..."
          aria-label="Todo item"
          aria-describedby="basic-addon2"
          value={enteredItem}
          onChange={(event) => setEnteredItem(event.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={submitToDoList}>
            Submit
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Row>
  );
});

export default CreateToDoItem;
