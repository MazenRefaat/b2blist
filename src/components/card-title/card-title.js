import React from 'react';

import './card-title.scss';

const CardTitle = (props) => {
    return (
        <div className="card-title">
            <h3 className="card-title__txt font-sans font-weight-normal font-color-main font-size-18 mar-0">
                { props.text }
            </h3>
        </div>
    )
}

export default CardTitle;