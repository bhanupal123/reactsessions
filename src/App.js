import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import users from './data/users';
import UserBadge from './components/userBadge';
import UserForm from './components/form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],     
    }
  }

  render() {    
    return (
      <Wrapper>  
        <UserForm {...this.state.userInfo} onSubmit={this.onUserAdd}/>
        {
          this.state.users.map(user => 
             <UserBadge {...user} onUserAdd={this.onUserEdit}/>)
        }
      </Wrapper>
    );
  }

  onUserAdd(userInfo) {
    console.log(userInfo);
  }
  
  onUserEdit(userInfo) {
    console.log(userInfo);
  }  
}

export default App;
