import React from 'react';
import useInput from './useInput';
import logo from './logo.svg';
import { Input, Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="paragraph">
          Edit <code>src/App.js</code> and save to reload.
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
      <TestInput />
      <TestInput />
    </div>
  );
}

const TestInput = () => {
  const [value, setValue] = useInput();
  return <Input value={value} onChange={e => setValue(e.target.value)} />;
};

export default App;
