import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux'; //provider is going to keep track of that store which is that global state and that allows us to access that store anywhere inside from the app , we don't have  to be exactly in parent component or child component we can access that state from anywhere
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
    
    );
