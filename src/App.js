import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import users from './data/users';
import UserBadge from './components/userBadge';
import UserForm from './components/form';
import UserService from './service/userService';

class App extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    
    this.initState = {
      firstName : "",
      lastName: "",
      gender: "male",
      projects : "",
      comments : "",
      favorites : "",
      clients : ""
    };
    
    this.state = {
      users : this.userService.getUsers(),   
      userInfo : {...this.initState},      
    }   

    this.onUserAdd = this.onUserAdd.bind(this);
    this.onUserEdit = this.onUserEdit.bind(this);
    this.fieldChanged = this.fieldChanged.bind(this);
    this.onUserDelete = this.onUserDelete.bind(this);
  }

  render() {    
    return (
      <Wrapper>  
        <UserForm {...this.state.userInfo} onSubmit={this.onUserAdd} fieldChanged={this.fieldChanged}/>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          this.state.users.map((user, i) => 
             <UserBadge {...user} 
              key={user.id} 
              onUserEdit={this.onUserEdit}
              onUserDelete={this.onUserDelete}/>)
        }
        </div>
      </Wrapper>
    );
  }

  onUserAdd(e) {
    e.preventDefault();    
    var userInfo = this.state.userInfo;    
    userInfo.name = userInfo.firstName + ' ' + userInfo.lastName;    
        
    if(userInfo.id) {
      this.userService.update(userInfo);
    }else {
      userInfo = this.userService.add(userInfo);      
    }

    this.setState({
      users: this.userService.getUsers(),
      userInfo : {...this.initState}
    });
  }
  
  onUserEdit(id) {
    var userInfo = this.state.users.find((user) => user.id === id);
    this.setState({
      ...this.state,
      userInfo : userInfo
    });    
  }  

  onUserDelete(id) {
    this.userService.delete(id);
    this.setState({
      users : this.userService.getUsers(),
      active : {...this.initState}
    });
  }

  fieldChanged(field, value) {    
    this.setState({      
        ...this.state,
        userInfo : {
          ...this.state.userInfo,
          [field]:value
        }        
    });
  }
}

export default App;
