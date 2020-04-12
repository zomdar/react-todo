import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


import './ToDoList.scss';

const ToDoList = React.memo(props => {

  return (
    <Row>
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1">
            hey hey hey hey hey heyhey hey hey heyhey heyhey hey
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            Link 2
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
            This one is a button
          </ListGroup.Item>
        </ListGroup>
    </Row>
  );
});

export default ToDoList;
