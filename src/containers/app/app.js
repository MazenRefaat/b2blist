import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from '../product-list/product-list';
import Header from '../../components/header/header';
import ProductDetails from '../product-details/product-details';
import Cart from '../../components/cart/cart';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Cart />
                <Route exact path='/' component={ProductList} />
                <Route path='/product-details/:productItem' component={ProductDetails} />
            </BrowserRouter>
        )
    }
}

export default App;