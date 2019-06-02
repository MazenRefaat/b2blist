import React from 'react';

import './button.scss';

const Button = (props) => {
    return (
        <div>
            <button className="btn btn-action font-sans font-size-12" onClick={props.clickEvent}>{props.text}</button>
        </div>
    )
}

export default Button