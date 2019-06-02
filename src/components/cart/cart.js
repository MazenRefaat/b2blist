import React, { Component } from 'react';
import { connect } from 'react-redux'

import './cart.scss';

class Cart extends Component {

    componentWillReceiveProps = () => {
        console.log('receive props', this.props.cart);
    }
    componentDidMount = () => {
        console.log('loaded');
    }
    render(){
        debugger;
        console.log('cart props', this.props.cart);
        return(
            <div className="b2b-cart pad-15">
                <h4 className="b2b-cart__title font-sans font-size-12 font-color-main mar-0">
                    Cart
                </h4>

                <div>
                    <ul>
                        {
                            this.props.cart.map((item,key)=> {
                                return (<li key={key}>{item.product}</li>);
                            })
                        }
                    </ul>
                </div>
            </div>
        ) 
    }
    
}

const mapStateToProps = (state) => {
    debugger;
    console.log('state', state);
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);