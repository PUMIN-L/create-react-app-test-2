import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [a, setA] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setA((prev) => prev + 1)}>
        <code>PUMIN TEST 2 and a = {a}</code>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
