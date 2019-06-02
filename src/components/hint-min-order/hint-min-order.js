import React from 'react';
import { FormattedMessage } from 'react-intl';

const HintMinOrder = (props) => {
    return (
        <div>
            <span className="font-sans font-weight-normal font-color-grey font-size-12 mar-0">
                <FormattedMessage id="product-card.min-order" defaultMessage="Minimum Order:" />
                { props.minNum }
            </span>
        </div>
    )
}

export default HintMinOrder;