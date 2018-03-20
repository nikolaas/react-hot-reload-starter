import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const createMockedStore = configureMockStore(middlewares);

export const mockStore = initialState => {
    return createMockedStore(initialState);
};
