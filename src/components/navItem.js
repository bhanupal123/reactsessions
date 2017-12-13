import React, { Component } from 'react';

const NavItem = props => {    
    var style = `5px solid ${props.color}`;    
    return (
        <a className="navanchor" style={{'borderTop' :style }} onClick={() => props.onClick(props.color)}>
            {props.color}
        </a>
    )
};

export default NavItem;














/*

render() {
        var style = `5px solid ${this.props.color}`;
        return (
            <a className="navanchor" style={{'border-top' :style }}>{this.props.color}</a>
        )
    }

    */