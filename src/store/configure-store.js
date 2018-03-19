/* eslint-disable no-console, no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

let storeFactory;

if (process.env.NODE_ENV === 'development') {
    storeFactory = (rootReducer, initialState, enhancers) => {
        if (!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            console.warn('External Dev Tools not installed in your browser. Please, visit https://github.com/zalmoxisus/redux-devtools-extension for details');
        }
        const enhanceStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const storeEnhancer = enhanceStore(...enhancers);
        return createStore(rootReducer, initialState, storeEnhancer);
    };
}

if (process.env.NODE_ENV === 'production') {
    storeFactory = (rootReducer, initialState, enhancers) => {
        const storeEnhancer = compose(...enhancers);
        return createStore(rootReducer, initialState, storeEnhancer);
    };
}

export const configureStore = (rootReducer, initialState) => {
    const enhancers = [applyMiddleware(thunk)];
    return storeFactory(rootReducer, initialState, enhancers);
};
