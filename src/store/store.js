import { injectReducer, createReducer } from '../reducers';
import storeFactory from './store-factory';

let store;

export const registerAsyncReducer = (name, reducer) => {
    injectReducer(name, reducer.default);
    store.replaceReducer(createReducer());
};

export const configureStore = (rootReducer, initialState) => {
    if (store) {
        throw new Error('Store already configured');
    }
    store = storeFactory(rootReducer, initialState);
    return store;
};
