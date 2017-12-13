import React, { Component } from 'react';

class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = `5px solid ${this.props.color}`;
        return (
            <a className="navanchor" style={{'border-top' :style }}>{this.props.color}</a>
        )
    }
}


export default NavItem;














/*

render() {
        var style = `5px solid ${this.props.color}`;
        return (
            <a className="navanchor" style={{'border-top' :style }}>{this.props.color}</a>
        )
    }

    */