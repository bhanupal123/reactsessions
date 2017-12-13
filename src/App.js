import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Wrapper from './components/wrapper';

class App extends Component {
  render() {
    return (  
        <Wrapper>
            <NavBar items={menuItems} onClick={this.navItemClicked}/>
            <div>
              <p className="second"> text </p>
            </div>
        </Wrapper>
    );
  }

  navItemClicked(color) { 
    console.log(`${color} clicked`);
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
