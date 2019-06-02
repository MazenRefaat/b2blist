import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import './index.scss';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("app"));