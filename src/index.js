import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import QuoteApp from './containers/QuoteApp';
import rootReducer from './reducers/rootReducer';
import { create } from 'istanbul-reports';

const initialState = {};

const store = createStore(rootReducer, initialState);

const appRoot = (
    <Provider store={store}>
        <QuoteApp />
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'));

