import React from 'react';

import './card-price.scss';

const CardPrice = (props) => {
    return (
        <div className="card-price">
            <h3 className="card-price__txt font-sans font-weight-normal font-color-main mar-0 ">
                <strong >
                    £ { props.price } 
                </strong>
                <span className="font-size-15">
                    &#160; per head
                </span>
            </h3>
        </div>
    )
}

export default CardPrice;