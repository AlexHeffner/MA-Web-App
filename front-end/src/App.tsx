import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/NavBar/NavBar';
import Router from './components/Router/Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
