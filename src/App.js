import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
       <button onClick={() => setCount(count + 1)}>Add</button>
    </ div>
  )
}

export default App;
