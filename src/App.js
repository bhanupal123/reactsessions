import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavItem from './components/navItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <div className="content">
          <div className="wrappedContent">
            <div className="navbar"> 
              <NavItem color="green"/>
              <NavItem color="yellow"/>
              <a className="navanchor" style={{'border-top' : `5px solid blue`}}>Blusdse</a>
              <a className="navanchor" style={{'border-top' : '5px solid green'}}>Green</a>
            </div>
            <div className="navbar"> 
              <NavItem color="green"/>
              <NavItem color="yellow"/>
              <a className="navanchor" style={{'border-top' : `5px solid blue`}}>Blusdse</a>
              <a className="navanchor" style={{'border-top' : '5px solid green'}}>Green</a>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
