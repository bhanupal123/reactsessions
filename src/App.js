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
            <TableForm onSubmit={this.onSubmit}/>
            <MyTable/>
        </Wrapper>
    );
  }

  onSubmit(data) {
    console.log(data);
  }
  
}



export default App;
