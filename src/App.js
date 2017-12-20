import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/wrapper';
import users from './data/users';
import UserBadge from './components/userBadge';

class App extends Component {
  render() {    
    return (  
      <Wrapper>        
        <div className="profileContainer">  
          {
            users.map(user => 
              <UserBadge {...this.convertUser(user)} onUserAdd={this.onUserAdd}/>
            )
          }
        </div>
      </Wrapper>
    );
  }

  convertUser(user) {
    return {
      name : user.name.first + ' ' + user.name.last,
      gender : user.gender,
      img: user.picture.large,
      favorites : user.favorites,
      comments : user.comments,
      clients : user.clients,
      projects: user.projects
    }
  }

  onUserAdd(user) {
    console.log(`${user} added`);
  }  
}

export default App;
