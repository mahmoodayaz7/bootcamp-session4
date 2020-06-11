import React, { useState } from 'react';
import { Message } from './Message'
import './App.css';

function App() {

  let [count, setcount] = useState(0);
  let [isMorning, setisMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count}></Message>

      <h1>This is App JS counter = {count}</h1>
      <button onClick={() => alert('My Counter is ' + count)}> Alert Button. </button>
      <br />
      <button onClick={() => setcount(++count)}> Update Counter. </button>
      <br />
      <button onClick={() => setisMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
