import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Wrapper from './components/wrapper';
import TableForm from './components/form';
import MyTable from './components/table';

class App extends Component {
  render() {
    return (  
        <Wrapper>
            <NavBar items={menuItems} onClick={this.navItemClicked}/>
            <TableForm/>
            <MyTable/>
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
