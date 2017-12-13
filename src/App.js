import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavItem from './components/navItem';
import Wrapper from './components/wrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <Wrapper>
            <div className="navbar"> 
              {menuItems.map((c)=> <NavItem key={c} color={c}/>)}              
            </div>
        </Wrapper>
      </div>
    );
  }
}

var menuItems = [
  "red",
  "yellow",
  "green",
  "orange",
  "purple"
]

export default App;
