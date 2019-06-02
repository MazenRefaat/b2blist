import React from 'react';
import CardImage from '../../components/card-image/card-image';
import CardTitle from '../../components/card-title/card-title';
import CardDesc from '../../components/card-description/card-description';
import CardPrice from '../../components/card-price/card-price';
import HintMinOrder from '../../components/hint-min-order/hint-min-order';
import Button from '../../components/button/button';

import './product-card.scss';
import { FormattedMessage } from 'react-intl';


const ProductCard = (props) => {
    function handleViewClick(product){
        props.onProductSelect(product);
    };

    return (
        <div className="b2b-product-card">
            <CardImage img={props.product.product_image} title={props.product.product} />

            <div className="b2b-product-card__info pad-left-15 pad-right-15">
                <div className="b2b-product-card__info--main">
                    <div className="info-row">
                        <CardTitle text={props.product.product} />

                        <CardPrice price={props.product.price} />
                    </div>
                </div>

                <div className="b2b-product-card__info--hint">
                    <div className="info-row">
                        <HintMinOrder minNum={1} />

                        <div>
                            <span className="font-sans font-size-12 font-color-grey">
                                <FormattedMessage id="product-card.plus-vat" defaultMessage="Plus VAT"/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="b2b-product-card__info--description">
                    <CardDesc text={props.product.product_description} />
                </div>

                <div className="b2b-product-card__info--view">
                    <Button clickEvent={()=> {handleViewClick(props.product)}} text={'view'} />
                </div>
            </div> 
        </div>
    )
}

export default ProductCard;