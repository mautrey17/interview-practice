import logo from './logo.svg';
import './App.css';
import React from 'react';
import useState from 'react';

function App() {

  const [count, setCount] = React.useState(0);


  return (
    <div className="App">
      <h1>test</h1>
      <p>
        {count}
      </p>
      <button onClick={()=> setCount(count >= 1 ? count - 1 : count)}>Lower the count</button>
      <button onClick={() => setCount(count + 1)}>Stop the count</button>
    </div>
  );
}

export default App;
