import React from 'react';

import './card-image.scss';

const CardImage = (props) => {
    return (
        <div className="card-image">
            <img className="card-image__img" src={props.img} title={props.title} alt={props.title} />
        </div>
    )
}

export default CardImage;