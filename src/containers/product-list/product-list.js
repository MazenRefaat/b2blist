

import React, { Component } from 'react';

import { fetchProducts } from '../../services/products.service';
import ProductCard from '../product-card/product-card';

import './product-list.scss';
import { FormattedMessage } from 'react-intl';

class ProductList extends Component {
    state = {
        products: []
    }

    loadProducts = () => {
        return fetchProducts();
    }

    handleProductSelect = (param) => {
        this.props.history.push(`/product-details/${param.product_id}`, {productItem: param});

    }

    componentDidMount(){
        this.setState({
            products: this.loadProducts()
        })
    }
    render(){
        return (
            <div className="b2b-product-list">
                <h1 className="b2b-product-list__title">
                    <FormattedMessage id="product-list.title" defaultMessage="Products"></FormattedMessage>
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