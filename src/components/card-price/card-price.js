import React from 'react';
import { FormattedMessage } from 'react-intl';

import './card-price.scss';

const CardPrice = (props) => {
    return (
        <div className="card-price">
            <h3 className="card-price__txt font-sans font-weight-normal font-color-main mar-0 ">
                <strong className="card-price__txt--value">
                    <FormattedMessage id="currency.euro" defaultMessage="£"></FormattedMessage>  
                    { props.price } 
                </strong>
                <span className="font-size-15">
                    &#160; 
                    <FormattedMessage id="product-card.per-head" defaultMessage="per head"></FormattedMessage>  
                </span>
            </h3>
        </div>
    )
}

export default CardPrice;