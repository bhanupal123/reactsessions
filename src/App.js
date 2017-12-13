import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Wrapper from './components/wrapper';
import LoginForm from './components/form';

class App extends Component {
  render() {
    return (  
        <Wrapper>
            <NavBar items={menuItems} onClick={this.navItemClicked}/>
            <LoginForm onSubmit={onSubmit}/>
        </Wrapper>
    );
  }

  navItemClicked(color) { 
    console.log(`${color} clicked`);
  }
}

function onSubmit(data) {
  console.log(data);
}


var menuItems = [
  "red",
  "yellow",
  "green",
  "orange",
  "purple"
]

export default App;
