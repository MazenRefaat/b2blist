import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'

import './cart.scss';

class Cart extends Component {
    state = {
        total: 0
    }

    calculateTotal = () => {
        let total = 0;
        this.props.cart.forEach(item => {
            total += parseFloat(item.price);
        })
        return total;
    }

    formatCartItem = (productName) => {
        let name = '';
        name = productName.length > 35 ? productName.substring(0, 35) + '...' : productName;
        return name;
    }

    render(){
        const total = this.calculateTotal();

        return(
            this.props.cart && this.props.cart.length > 0 
            ? 
            <div className="b2b-cart pad-15">
                <h4 className="b2b-cart__title font-sans font-size-12 font-color-main mar-0">
                    <FormattedMessage id="cart.title" defaultMessage="Cart"></FormattedMessage>
                </h4>

                <div>
                    <ul className="b2b-cart__list pad-0">
                        {
                            this.props.cart.map((item,key)=> {
                                return (
                                    <li key={key}>
                                        <p className="b2b-cart__item--txt font-sans font-size-12 font-weight-normal">
                                            <span>
                                                {this.formatCartItem(item.product)} 
                                            </span>
                                            
                                            <strong className="b2b-cart__total--price">
                                                (
                                                    <FormattedMessage id="currency.euro" defaultMessage="£"></FormattedMessage> 
                                                    &#160;
                                                    {item.price}
                                                )
                                            </strong>
                                        </p>

                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="b2b-cart__total">
                    <p className="b2b-cart__total--txt font-sans font-size-12 font-weight-bold mar-0">
                        <span>
                            <FormattedMessage id="cart.total" defaultMessage="Total"></FormattedMessage>
                        </span>

                        <strong className="b2b-cart__total--price">
                            <FormattedMessage id="currency.euro" defaultMessage="£"></FormattedMessage>  
                            &#160; 
                            {total}
                        </strong>
                    </p>
                </div>
            </div>
            :
            ""
        ) 
    }
    
}


export default Cart;