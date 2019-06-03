import React from 'react';

import './button.scss';
import { FormattedMessage } from 'react-intl';

const Button = (props) => {
    return (
        <div>
            <button className="btn btn-action font-sans font-size-12" onClick={props.clickEvent}>
                <FormattedMessage id={`product-card.${props.text}`} defaultMessage="view" />
                
            </button>
        </div>
    )
}

export default Button