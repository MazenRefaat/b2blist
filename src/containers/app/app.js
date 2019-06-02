import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from '../product-list/product-list';
import Header from '../../components/header/header';
import ProductDetails from '../product-details/product-details';
import Cart from '../../components/cart/cart'

class App extends Component {
    state={
        cart: []
    }
    componentDidMount = () => {
        let appData = {'cart': [], 'locale': 'en'};
        if(localStorage.getItem('appData')){
            appData = JSON.parse(localStorage.getItem('appData'));
            this.setState({
                cart: appData['cart']
            })
        } else {
            localStorage.setItem('appData', JSON.stringify(appData));
        }
    }
    updateCart = (product) =>{
        let appData = JSON.parse(localStorage.getItem('appData'));
        let cart = appData['cart'];

        cart.push(product);

        localStorage.setItem('appData', JSON.stringify(appData));
        
        this.setState({
            cart: cart 
        })
    }
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Cart cart={this.state.cart} />
                <Route exact path='/' component={ProductList} />
                <Route  path='/product-details/:productItem' render={(props) => <ProductDetails onCartUpdate={this.updateCart} {...props} /> }/>
            </BrowserRouter>
        )
    }
}

export default App;