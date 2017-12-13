import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Wrapper from './components/wrapper';
import TableForm from './components/form';
import MyTable from './components/table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize : 0,    
      data : []
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (  
        <Wrapper>
            <NavBar items={menuItems} onClick={this.navItemClicked}/>
            <TableForm onSubmit={this.onSubmit}/>
            <MyTable pageSize={this.state.pageSize} data={this.state.data} columns={columns}/>
        </Wrapper>
    );
  }

  navItemClicked(color) { 
    console.log(`${color} clicked`);
  }

  onSubmit(data) {
    console.log(data);    
    this.setState({
      ...this.state,
      pageSize : data.pageSize,      
      data: maptimes(data.totalRows, record)
    });
  }
}

let maptimes = (n,fn) => new Array(n).fill(0).map((d,i) => fn(i));
let record = (i) => {
  i++;
  return {
    firstName : 'First Name ' + i,
    lastName : 'Last Name ' + i,
    id : i
  }
}

var menuItems = [
  "red",
  "yellow",
  "green",
  "orange",
  "purple"
]


var columns = [
  {
      field : 'id',
      header : 'Id',         
  },
  {
      field : 'firstName',
      header: 'First Name',      
  },
  {
      field : 'lastName',
      header: 'Last Name'
  },  
]

export default App;
