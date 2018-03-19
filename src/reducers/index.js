import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';

const asyncReducers = {};
export const injectReducer = (name, reducer) => {
    if (!reducer) {
        throw new Error('reducer must be function');
    }
    if (asyncReducers[name] === reducer) {
        return;
    }
    asyncReducers[name] = reducer;
};

export const createReducer = () => combineReducers({
    ...asyncReducers,
    counter: counterReducer,
});
