import React, { Component } from 'react';

import B2BAccordion from '../../components/accordion/accordion';

import './product-details.scss';

class ProductDetails extends Component {
    state = {
        toppings: [],
        specialInstructions: '',
        numOfPers: 0,
        isDisabled: true,
        orderPrice: this.props.location.state.productItem.price
    }
    componentDidMount(){

        localStorage.setItem('cart', JSON.stringify({'asd': 'asd'}));
        let toppings = [];
        this.props.location.state.productItem.toppings.forEach(element => {
            element.options.map(option => {
                option.selected = false;
            })
            
            toppings.push({...element});
        });
        this.setState({
            toppings: toppings
        })
    }
    
    handleOptionCheck = (option) => {
        let toppings = this.state.toppings;
        let isDisabled = true;
        let price = this.state.orderPrice;

        toppings.forEach(topping => {
            topping.options.forEach(optionItem => {
                if(optionItem.id == option.id) {
                    optionItem.selected = !optionItem.selected;
                }
            })
        })

        toppings.forEach(topping => {
            topping.options.forEach(optionItem => {
                if(optionItem.selected == true)
                    isDisabled = false;
            })
        })

        price = option.selected == true ? price + parseFloat(option.price) : price - parseFloat(option.price);
        
        this.setState({
            toppings: toppings,
            isDisabled: isDisabled,
            orderPrice: price
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleAddOrder = () => {
    }
    render(){
        const product = this.props.location.state.productItem;
        return(
            <div className="b2b-product-details">
                <div className="b2b-product-details__info-wrapper">
                    <h3 className="b2b-product-details__title pad-bottom-15 font-sans font-size-18 font-color-main">
                        { product.product }
                    </h3>

                    <div className="b2b-product-details__info">
                        <div className="b2b-product-details__img">
                            <img className="img" src={product.product_image} alt={ product.product } title={
                                product.product } />
                        </div>

                        <div className="b2b-product-details__details pad-left-15 pad-right-15">
                            <h3 className="font-sans font-size-18 font-color-main mar-0">
                                { product.product_description}
                            </h3>

                            <p className="font-sans font-size-12 font-color-main mar-top-15 mar-bottom-0">
                                { product.product_description_long}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="b2b-product-details__order-details mar-top-15">
                    <h3 className="font-sans font-size-15 font-weight-normal">
                        Toppings 
                    </h3>
                    {
                        this.state.toppings
                        &&
                        this.state.toppings.map((topping, key)=>{
                            return (<B2BAccordion onOptionCheck={this.handleOptionCheck} topping={topping} key={key} />)
                        })
                    }

                    <div className="b2b-product-details__order-details--instructions mar-top-15">
                        <h3 className="font-sans font-size-15 font-color-main">
                            Special Instructions
                        </h3>

                        <textarea className="b2b-textarea font-sans font-size-12 font-color-main" onChange={(event)=>this.handleInputChange(event)} placeholder="ex: No Onions, No Mayo - Write Comments in case you're allergic to some ingredient" value={this.state.specialInstructions} name="specialInstructions" id="" cols="30" rows="5"></textarea>
                    </div>
                </div>

                
                <div className="b2b-product-details__order-proceed mar-top-15">
                    <div>
                        <p className="font-sans font-size-12 mar-bottom-10">
                            <strong className="font-color-main font-weight-bold">
                                £ {this.state.orderPrice}
                            </strong>   
                            <span className="font-color-grey">
                                &#160; per head
                            </span>
                        </p>

                        <span className="font-sans font-size-8 font-color-grey">
                            All prices are without VAT
                        </span>
                    </div>

                    <div>
                        <div className="b2b-product-details__add">
                            <input className="b2b-product-details__add--persons" type="number" name="numOfPers" value={this.state.numOfPers} onChange={(event)=>this.handleInputChange(event)}/>

                            <span className="font-sans font-size-15 font-color-main">Pers.</span>

                            <button onClick={this.handleAddOrder} className={"b2b-product-details__add--btn font-sans font-size-15" + (this.state.isDisabled? " disabled" : "")}>ADD</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProductDetails;