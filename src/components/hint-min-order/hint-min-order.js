import React from 'react';

const HintMinOrder = (props) => {
    return (
        <div>
            <span className="font-sans font-weight-normal font-color-grey font-size-12 mar-0">
                Minimum Order: { props.minNum }
            </span>
        </div>
    )
}

export default HintMinOrder;