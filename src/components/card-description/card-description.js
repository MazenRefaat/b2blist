import React from 'react';

import './card-description.scss';

const CardDesc = (props) => {
    return (
        <div className="card-desc">
            <h3 className="card-desc__txt font-sans font-weight-normal font-size-12  mar-0">
                { props.text }
            </h3>
        </div>
    )
}

export default CardDesc;