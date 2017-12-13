import React from 'react';
import NavItem from './navItem';

const NavBar = props => {
    return (
        <div className="navbar"> 
            {props.items.map((c)=> <NavItem key={c} color={c} onClick={props.onClick}/>)}              
        </div>
    )
}

export default NavBar;