import React from 'react';

const ColorBox = props => {
    return (
        <div style={{border: '5px solid'}}>
            <p className="second"> {props.text} </p>
        </div>
    )
}

export default ColorBox;