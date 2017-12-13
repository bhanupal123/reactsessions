import React from 'react';

const Wrapper = props => {
    return (
        <div className="App">        
            <div className="content">
                <div className="wrappedContent">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default Wrapper;