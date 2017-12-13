import React from 'react';

const Wrapper = props => {
    return (
        <div className="content">
            <div className="wrappedContent">
                {props.children}
            </div>
        </div>
    )
};

export default Wrapper;