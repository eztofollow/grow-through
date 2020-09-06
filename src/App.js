import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';

const element = <h1>This site is under construction</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
        <MyForm />
        {element}
      </header>
      
    </div>
  );
}

export default App;
