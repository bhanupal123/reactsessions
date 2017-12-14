import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Wrapper from './components/wrapper';
import ColorBox from './components/colorBox';
import users from './data/users';

class App extends Component {
  render() {
    return (  
      <Wrapper>
        <NavBar items={menuItems} onClick={this.navItemClicked}/>  
        {/* Badge container */}
        <div className="profileContainer">  
          {/* Badge female start  */}
          <div class="container top50">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="item-1 female">
                <div className="img-container">
                    <a href="#"><img src="https://randomuser.me/api/portraits/women/60.jpg" /></a>
                  </div>
                  <div className="robin-key">
                    <p>Michelle Kim</p>
                      <ul>
                        <li><i className="fa fa-check"></i></li>
                          <li><a href="#"><i className="fa fa-plus"></i></a></li>
                      </ul>
                  </div>

                  <ul className="follow-list">
                    <li><a href="#"><i className="fa fa-heart"></i> 200</a></li>
                      <li><a href="#"><i className="fa fa-users"></i> 120</a></li>
                      <li><a href="#"><i className="fa fa-folder"></i> 52</a></li>
                      <li><a href="#"><i className="fa fa-comments"></i> 1120</a></li>
                  </ul>
              </div>
            </div>          
          </div>
          {/* Badge female ends  */}

          {/* Badge male start  */}
          <div className="container top50">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="item-1  male">
                <div className="img-container">
                  <a href="#"><img src={users[0].picture.large} /></a>
                </div>
                <div className="robin-key">
                  <p>noah marchand</p>
                    <ul>
                      <li><i className="fa fa-check"></i></li>
                        <li><a href="#" ><i className="fa fa-plus"></i></a></li>
                        {/* 
                            Add click handler here and print the user name on click
                            <li><a href="#" ><i className="fa fa-plus"></i></a></li> 
                        */}
                    </ul>
                </div>
                <ul className="follow-list">
                  <li><a href="#"><i className="fa fa-heart"></i> {users[0].favourites}</a></li>
                    <li><a href="#"><i className="fa fa-users"></i> {users[0].clients}</a></li>
                    <li><a href="#"><i className="fa fa-folder"></i> {users[0].projects}</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i>{users[0].comments}</a></li>
                </ul>
              </div>
            </div>                 
          </div> 
          {/* Badge male ends  */}       
        </div>
      </Wrapper>
    );
  }

  navItemClicked(color) { 
    console.log(`${color} clicked`);
  }
}

/**
 *  Excercise : Create a component for user badge that takes 
 *  Name, User image, favorites, clients, project and chats
 *  The component must have the background color set to pink, blue for women and men respectively
 *  The component must have a onAddClicked property which can be passed by the parent when + button is clicked
 *  Parent must print the user name to console with statement "noan marchand added.. "
 * 
 *  Load all the ten users in usres.json using the badge components
 *   All the best!!
 */

var menuItems = [
  "red",
  "yellow",
  "green",
  "orange",
  "purple"
]

export default App;
