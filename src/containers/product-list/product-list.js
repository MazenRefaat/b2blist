

import React, { Component } from 'react';

import { fetchProducts } from '../../services/products.service';
import ProductCard from '../product-card/product-card';


import './product-list.scss';

class ProductList extends Component {
    state = {
        products: [],
        cart: []
    }

    loadProducts = () => {
        return fetchProducts();
    }

    handleProductSelect = (param) => {
        this.props.history.push(`/product-details/${param.product_id}`, {productItem: param});

    }

    componentDidMount(){
        var cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.stringify(localStorage.getItem('cart')); 
        } else {
            localStorage.setItem('cart', JSON.stringify(this.state.cart));
        }
        
        this.setState({
            products: this.loadProducts(),
            cart: cart 
        })
    }
    render(){
        return (
            <div className="b2b-product-list">
                <h1 className="b2b-product-list__title">
                    Products
                </h1>
                {
                    this.state.products.products
                    &&
                    this.state.products.products.map((item, key) => 
                    {
                        return (<ProductCard onProductSelect={this.handleProductSelect} product={item} key={key} />)
                    })
                }


            </div>
        )
    }
    
}

export default ProductList;