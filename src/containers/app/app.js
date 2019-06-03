import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from '../product-list/product-list';
import Header from '../../components/header/header';
import ProductDetails from '../product-details/product-details';
import Cart from '../../components/cart/cart';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_ar from 'react-intl/locale-data/ar';

import messages_en from "../../translations/en.json";
import messages_ar from "../../translations/ar.json";

const messages = {
    'en': messages_en,
    'ar': messages_ar
};

addLocaleData([...locale_en, ...locale_ar]);

function flattenMessages(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        let value       = nestedMessages[key];
        let prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            messages[prefixedKey] = value;
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
}


class App extends Component {
    state = {
        cart: [],
        locale: 'en'
    }

    handleDocumentLanguageChange = (locale) => {
        document.body.classList = locale == 'ar' ? locale : '';
        document.documentElement.dir = locale == 'ar' ? 'rtl' : 'ltr';
    }
    handleLanguageSelect = (event) => {
        let locale = event.target.value,
            appData = JSON.parse(localStorage.getItem('appData'));

        appData['locale'] = event.target.value;

        localStorage.setItem('appData', JSON.stringify(appData));

        this.handleDocumentLanguageChange(locale);

        this.setState({
            locale: locale
        })
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

    componentDidMount = () => {
        let appData = {'cart': [], 'locale': 'en'};
        if(localStorage.getItem('appData')){
            appData = JSON.parse(localStorage.getItem('appData'));
            this.handleDocumentLanguageChange(appData['locale']);

            this.setState({
                cart: appData['cart'],
                locale: appData['locale']
            });
        } else {
            localStorage.setItem('appData', JSON.stringify(appData));
        }
    }


    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={flattenMessages(messages[this.state.locale])}>
                <BrowserRouter className="en">
                    <Header locale={this.state.locale} onLanguageChange={this.handleLanguageSelect} />
                    <Cart cart={this.state.cart} />
                    <Route exact path='/' component={ProductList} />
                    <Route  path='/product-details/:productItem' render={(props) => <ProductDetails onCartUpdate={this.updateCart} {...props} /> }/>
                </BrowserRouter>
            </IntlProvider>
        )
    }
}

export default App;